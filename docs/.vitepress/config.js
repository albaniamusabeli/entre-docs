export default {
    title: 'Documentación',
    description: 'Documentación y apuntes',

    themeConfig: {

        nav: [
            { text: 'Frameworks', link: '/frameworks/'},
            { text: 'Nosotros', link: '/team'},
        ],

        sidebar: {
            '/frameworks/': [
                {
                    text: 'Angular',
                    collapsible: true,
                    items: [
                        {text: 'Angular CLI', link: '/frameworks/angular-cli' }
                    ]
                }
            ]
        }
    }



}