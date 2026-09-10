import type { SanityDocument } from 'sanity'

// Наследуем все системные поля от SanityDocument
interface BlogDocument extends SanityDocument {
    title?: {
        uk?: string;
        en?: string;
        ru?: string;
    };
}

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
                { name: 'en', type: 'string', title: 'English' },
                { name: 'ru', type: 'string', title: 'Русский' }
            ]
        },
        {
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: (doc:BlogDocument) => {
                    return doc.title?.en || doc.title?.uk || '';
                },
                maxLength: 96,
            },
        },
        {
            name: 'mainImage',
            title: 'Головне зображення (вывод на странице блогов)',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Альтернативний текст (Alt - для SEO)',
                }
            ]
        },
        {
            name: 'description',
            title: 'Короткий опис (Description - для картки)',
            type: 'object',
            fields: [
                { name: 'uk', type: 'text', title: 'Українська' },
                { name: 'en', type: 'text', title: 'English' },
                { name: 'ru', type: 'text', title: 'Русский' }
            ]
        },
        {
            name: 'content',
            title: 'Повний текст статті з фото (Content)',
            type: 'object',
            fields: [
                {
                    name: 'uk',
                    type: 'array',
                    title: 'Українська',
                    of: [
                        {
                            type: 'block',
                            marks: {
                                decorators: [
                                    { title: 'Bold', value: 'strong' },
                                    { title: 'Italic', value: 'em' },
                                    { title: 'Underline', value: 'underline' },
                                    { title: 'UPPERCASE', value: 'uppercase' },
                                    { title: 'lowercase', value: 'lowercase' }
                                ]
                            }
                        },
                        { type: 'customImage' },
                        { type: 'statsColumns' },
                        { type: 'imageWithQuote' }
                    ]
                },
                {
                    name: 'en',
                    type: 'array',
                    title: 'English',
                    of: [
                        {
                            type: 'block',
                            marks: {
                                decorators: [
                                    { title: 'Bold', value: 'strong' },
                                    { title: 'Italic', value: 'em' },
                                    { title: 'Underline', value: 'underline' },
                                    { title: 'UPPERCASE', value: 'uppercase' },
                                    { title: 'lowercase', value: 'lowercase' }
                                ]
                            }
                        },
                        { type: 'customImage' },
                        { type: 'statsColumns' },
                        { type: 'imageWithQuote' }
                    ]
                },
                {
                    name: 'ru',
                    type: 'array',
                    title: 'Русский',
                    of: [
                        {
                            type: 'block',
                            marks: {
                                decorators: [
                                    { title: 'Bold', value: 'strong' },
                                    { title: 'Italic', value: 'em' },
                                    { title: 'Underline', value: 'underline' },
                                    { title: 'UPPERCASE', value: 'uppercase' },
                                    { title: 'lowercase', value: 'lowercase' }
                                ]
                            }
                        },
                        { type: 'customImage' },
                        { type: 'statsColumns' },
                        { type: 'imageWithQuote' }
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title.uk',
            subtitle: 'description.uk'
        }
    }
}