export const imageWithQuote = {
    name: 'imageWithQuote',
    title: 'Цитата з фото (Поруч)',
    type: 'object',
    fields: [
        {
            name: 'quote',
            title: 'Текст цитати',
            type: 'text',
            rows: 4
        },
        {
            name: 'image',
            title: 'Фотографія',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Опис зображення',
            description: 'Важливо для SEO',
        },
        {
            name: 'imagePosition',
            title: 'Де стоїть фото?',
            type: 'string',
            options: {
                list: [
                    { title: 'Справа (Текст зліва)', value: 'right' },
                    { title: 'Зліва (Текст справа)', value: 'left' }
                ],
                layout: 'radio'
            },
            initialValue: 'right'
        }
    ],
    preview: {
        select: {
            title: 'quote',
            media: 'image'
        }
    }
};