export const blog = {
    name: 'blog',
    title: 'Блог',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Заголовок (Title)',
            type: 'object',
            fields: [
                { name: 'uk', type: 'string', title: 'Українська' },
                { name: 'en', type: 'string', title: 'English' }
            ]
        },
        {
            name: 'text',
            title: 'Текст статьи (Text)',
            type: 'object',
            fields: [
                { name: 'uk', type: 'text', title: 'Українська' },
                { name: 'en', type: 'text', title: 'English' }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title.uk',
        }
    }
}