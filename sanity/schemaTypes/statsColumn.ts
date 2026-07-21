export const statsColumns = {
    name: 'statsColumns',
    title: 'Колонки зі статистикою (Stats Columns)',
    type: 'object',
    fields: [
        {
            name: 'columns',
            title: 'Колонки',
            type: 'array',
            of: [
                {
                    name: 'statItem',
                    type: 'object',
                    fields: [
                        { name: 'number', type: 'string', title: 'Цифра (напр. 6000+)' },
                        { name: 'text', type: 'string', title: 'Підпис (напр. операцій)' }
                    ]
                }
            ]
        }
    ],
    preview: {
        prepare() {
            return { title: 'Блок: Колонки зі статистикою' }
        }
    }
};