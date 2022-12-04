export default {
    title: 'Documentación',
    description: 'Documentación y apuntes',

    themeConfig: {

        nav: [
            { text: 'Docker', link: '/docker/' },
            { text: 'Frameworks', link: '/frameworks/' },
            { text: 'Git/Github', link: '/git/'},
            { text: 'Nosotros', link: '/team' },
        ],

        sidebar: {

            '/frameworks/': [
                {
                    text: 'Angular',
                    collapsible: true,
                    items: [
                        { text: 'Instalación', link: '/frameworks/instalacion-angular' },
                        { text: 'Angular CLI', link: '/frameworks/angular-cli' }
                    ]
                }
            ],
            
            '/docker/': [
                {
                    text: 'Docker',
                    collapsible: true,
                    items: [
                        { text: 'Instalación', link: '/docker/instalacion-docker' },
                        { text: 'Imágenes', link: '/docker/imagen' },
                        { text: 'Contenedores', link: '/docker/contenedor' },
                        { text: 'Compose', link: '/docker/compose' }

                    ]
                }
            ],

            '/git/': [
                {
                    text: 'Git',
                    collapsible: true,
                    items: [
                        { text: 'Configuración', link: '/git/configuracion'},
                        { text: 'Versionamiento', link: '/git/versionamiento'},

                    ]
                }
            ]
        }
    }

}