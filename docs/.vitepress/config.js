export default {
    title: 'Documentación',
    description: 'Documentación y apuntes',

    themeConfig: {

        nav: [
            { text: 'Frameworks', link: '/frameworks/' },
            { text: 'Docker', link: '/docker/' },
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
                        { text: 'Contenedores', link: '/docker/contenedor' }
                    ]
                }
            ],
        }
    }

}