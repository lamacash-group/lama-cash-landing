import Script from "next/script";

export const MicrosoftClarity = () => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_ID;
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    if (!projectId) return null;

    // Скрипт связывания GA и Clarity, переписанный на чистый JS
    const linkGaScript = gaId ? `
        function linkGAClientId(attemptsLeft) {
            if (typeof window.gtag !== "function") {
                if (attemptsLeft > 0) setTimeout(function() { linkGAClientId(attemptsLeft - 1) }, 300);
                return;
            }
            window.gtag("get", "${gaId}", "client_id", function(clientId) {
                if (clientId && typeof window.clarity === "function") {
                    window.clarity("set", "ga_client_id", clientId);
                }
            });
        }
        linkGAClientId(10);
    ` : '';

    return (
        <Script
            id="microsoft-clarity"
            strategy="afterInteractive" // КРИТИЧЕСКИ ВАЖНО: загружаем только когда браузер простаивает
            dangerouslySetInnerHTML={{
                __html: `
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "${projectId}");
                    
                    ${linkGaScript}
                `,
            }}
        />
    );
};