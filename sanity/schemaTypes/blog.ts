// // 1. Выносим блок картинки в константу
// const customImageBlock = {
//     name: 'customImage', // ОБЯЗАТЕЛЬНО УНИКАЛЬНОЕ ИМЯ!
//     type: 'image',
//     title: 'Зображення',
//     options: { hotspot: true },
//     fields: [
//         {
//             name: 'layout',
//             title: 'Розташування та розмір (Layout)',
//             type: 'string',
//             options: {
//                 list: [
//                     { title: 'На всю ширину (Full width)', value: 'full' },
//                     { title: 'Зменшена по центру (Center)', value: 'center' },
//                     { title: 'Зправа (Текст обтікає зліва)', value: 'floatRight' },
//                     { title: 'Зліва (Текст обтікає справа)', value: 'floatLeft' }
//                 ],
//                 layout: 'radio'
//             },
//             initialValue: 'full'
//         }
//     ]
// };
//
// const customImageBlockEn = {
//     name: 'customImage',
//     type: 'image',
//     title: 'Зображення',
//     options: { hotspot: true },
//     fields: [
//         {
//             name: 'layout',
//             title: 'Layout',
//             type: 'string',
//             options: {
//                 list: [
//                     { title: 'Full width', value: 'full' },
//                     { title: 'Center', value: 'center' },
//                     { title: 'Float Right', value: 'floatRight' },
//                     { title: 'Float Left', value: 'floatLeft' }
//                 ],
//                 layout: 'radio' // Будет отображаться как радио-кнопки
//             },
//             initialValue: 'full'
//         }
//     ]
// };
//
// // 2. Выносим блок колонок в константу
// const statsColumnsBlock = {
//     name: 'statsColumns',
//     title: 'Колонки зі статистикою (Stats Columns)',
//     type: 'object',
//     fields: [
//         {
//             name: 'columns',
//             title: 'Колонки',
//             type: 'array',
//             of: [
//                 {
//                     name: 'statItem',
//                     type: 'object',
//                     fields: [
//                         { name: 'number', type: 'string', title: 'Цифра (напр. 6000+)' },
//                         { name: 'text', type: 'string', title: 'Підпис (напр. операцій)' }
//                     ]
//                 }
//             ]
//         }
//     ],
//     preview: {
//         prepare() {
//             return { title: 'Блок: Колонки зі статистикою' }
//         }
//     }
// };
//
// const statsColumnsBlockEn = {
//     name: 'statsColumns',
//     title: 'Columns with statistics',
//     type: 'object',
//     fields: [
//         {
//             name: 'columns',
//             title: 'Колонки',
//             type: 'array',
//             of: [
//                 {
//                     name: 'statItem',
//                     type: 'object',
//                     fields: [
//                         { name: 'number', type: 'string', title: 'Digital (e.g. 6000+)' },
//                         { name: 'text', type: 'string', title: 'Signature (eg transactions)' }
//                     ]
//                 }
//             ]
//         }
//     ],
//     preview: {
//         prepare() {
//             return { title: 'Block: Columns with statistics' }
//         }
//     }
// };

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
            name: 'description',
            title: 'Короткий опис (Description - для картки)',
            type: 'object',
            fields: [
                { name: 'uk', type: 'text', title: 'Українська' },
                { name: 'en', type: 'text', title: 'English' }
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
                                    // {
                                    //     title: 'UPPERCASE',
                                    //     value: 'uppercase',
                                    //     icon: () => <CaseUpperIcon/>,
                                    //     component: (props:any) => (
                                    //         <span style={{ textTransform: 'uppercase' }}>{props.children}</span>)
                                    // },
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


// export const blog = {
//     name: 'blog',
//     title: 'Блог',
//     type: 'document',
//     fields: [
//         {
//             name: 'title',
//             title: 'Заголовок (Title)',
//             type: 'object',
//             fields: [
//                 { name: 'uk', type: 'string', title: 'Українська' },
//                 { name: 'en', type: 'string', title: 'English' }
//             ]
//         },
//         {
//             name: 'description',
//             title: 'Короткий опис (Description - для картки)',
//             type: 'object',
//             fields: [
//                 { name: 'uk', type: 'text', title: 'Українська' },
//                 { name: 'en', type: 'text', title: 'English' }
//             ]
//         },
//         {
//             name: 'content',
//             title: 'Повний текст статті з фото (Content)',
//             type: 'object',
//             fields: [
//                 {
//                     name: 'uk',
//                     type: 'array',
//                     title: 'Українська',
//                     of: [
//                         { type: 'block' },
//                         // 1. Улучшенный блок картинки с выбором позиционирования (Для Фото 1)
//                         {
//                             type: 'image',
//                             options: { hotspot: true },
//                             fields: [
//                                 {
//                                     name: 'layout',
//                                     title: 'Розташування та розмір (Layout)',
//                                     type: 'string',
//                                     options: {
//                                         list: [
//                                             { title: 'На всю ширину (Full width)', value: 'full' },
//                                             { title: 'Зменшена по центру (Center)', value: 'center' },
//                                             { title: 'Зправа (Текст обтікає зліва)', value: 'floatRight' },
//                                             { title: 'Зліва (Текст обтікає справа)', value: 'floatLeft' }
//                                         ],
//                                         layout: 'radio' // Будет отображаться как радио-кнопки
//                                     },
//                                     initialValue: 'full'
//                                 }
//                             ]
//                         },
//                         // 2. Новый блок для колонок / цифр (Для Фото 2)
//                         {
//                             name: 'statsColumns',
//                             title: 'Колонки зі статистикою (Stats Columns)',
//                             type: 'object',
//                             fields: [
//                                 {
//                                     name: 'columns',
//                                     title: 'Колонки',
//                                     type: 'array',
//                                     of: [
//                                         {
//                                             name: 'statItem',
//                                             type: 'object',
//                                             fields: [
//                                                 { name: 'number', type: 'string', title: 'Цифра (напр. 6000+)' },
//                                                 { name: 'text', type: 'string', title: 'Підпис (напр. операцій)' }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ],
//                             preview: {
//                                 prepare() {
//                                     return { title: 'Блок: Колонки зі статистикою' }
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 // Не забудьте скопировать то же самое для 'en', если нужно!
//                 {
//                     name: 'en',
//                     type: 'array',
//                     title: 'English',
//                     of: [
//                         { type: 'block' },
//                         {
//                             type: 'image',
//                             options: { hotspot: true },
//                             fields: [
//                                 {
//                                     name: 'layout',
//                                     title: 'Layout',
//                                     type: 'string',
//                                     options: {
//                                         list: [
//                                             { title: 'Full width', value: 'full' },
//                                             { title: 'Center', value: 'center' },
//                                             { title: 'Float Right', value: 'floatRight' },
//                                             { title: 'Float Left', value: 'floatLeft' }
//                                         ],
//                                         layout: 'radio' // Будет отображаться как радио-кнопки
//                                     },
//                                     initialValue: 'full'
//                                 }
//                             ]
//                         },
//                         // 2. Новый блок для колонок / цифр (Для Фото 2)
//                         {
//                             name: 'statsColumns',
//                             title: 'Columns with statistics',
//                             type: 'object',
//                             fields: [
//                                 {
//                                     name: 'columns',
//                                     title: 'Колонки',
//                                     type: 'array',
//                                     of: [
//                                         {
//                                             name: 'statItem',
//                                             type: 'object',
//                                             fields: [
//                                                 { name: 'number', type: 'string', title: 'Digital (e.g. 6000+)' },
//                                                 { name: 'text', type: 'string', title: 'Signature (eg transactions)' }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ],
//                             preview: {
//                                 prepare() {
//                                     return { title: 'Block: Columns with statistics' }
//                                 }
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//         // {
//         //     name: 'content',
//         //     title: 'Повний текст статті з фото (Content)',
//         //     type: 'object',
//         //     fields: [
//         //         {
//         //             name: 'uk',
//         //             type: 'array',
//         //             title: 'Українська',
//         //             of: [
//         //                 { type: 'block' }, // Включает жирный, курсив, заголовки, списки
//         //                 { type: 'image', options: { hotspot: true } } // Позволяет вставлять картинки прямо в текст
//         //             ]
//         //         },
//         //         {
//         //             name: 'en',
//         //             type: 'array',
//         //             title: 'English',
//         //             of: [
//         //                 { type: 'block' },
//         //                 { type: 'image', options: { hotspot: true } }
//         //             ]
//         //         }
//         //     ]
//         // }
//     ],
//     preview: {
//         select: {
//             title: 'title.uk',
//             subtitle: 'description.uk'
//         }
//     }
// }