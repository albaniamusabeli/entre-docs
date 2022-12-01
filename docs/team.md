---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/albaniamusabeli.png',
    name: 'Albania Musabeli',
    title: 'Creador',
    links: [
      { icon: 'github', link: 'https://github.com/albaniamusabeli' }
    ]
  },
  {
    avatar: 'https://www.github.com/willknight27.png',
    name: 'Williams Caballero',
    title: 'Creador',
    links: [
      { icon: 'github', link: 'https://github.com/willknight27' }
    ]
  }
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Desarrolladores
    </template>
    <template #lead>
      Sitio desarrollado para registrar apuntes de Frameworks y tecnologías web
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
