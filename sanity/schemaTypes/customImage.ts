export const customImage = {
    name: 'customImage',
    title: 'Зображення з налаштуваннями',
    type: 'image',
    options: {
        hotspot: true,
    },
    fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Опис зображення',
            description: 'Важливо для SEO',
        },
        {
            name: 'layout',
            title: 'Розташування та розмір (Layout)',
            type: 'string',
            options: {
                list: [
                    { title: 'На всю ширину (Full width)', value: 'full' },
                    { title: 'Зменшена по центру (Center)', value: 'center' },
                    { title: 'Зправа (Текст обтікає зліва)', value: 'floatRight' },
                    { title: 'Зліва (Текст обтікає справа)', value: 'floatLeft' }
                ],
                layout: 'radio'
            },
            initialValue: 'full'
        }
    ]
};