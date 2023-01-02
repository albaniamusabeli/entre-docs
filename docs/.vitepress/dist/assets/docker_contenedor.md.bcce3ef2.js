import{_ as e,o as n,c as o,a as s}from"./app.83889ac5.js";const m=JSON.parse('{"title":"Comandos para manejo de contenedores","description":"","frontmatter":{},"headers":[{"level":2,"title":"Crear un contenedor","slug":"crear-un-contenedor","link":"#crear-un-contenedor","children":[]},{"level":2,"title":"Activar contenedor","slug":"activar-contenedor","link":"#activar-contenedor","children":[]},{"level":2,"title":"Ver contenedores activos","slug":"ver-contenedores-activos","link":"#ver-contenedores-activos","children":[]},{"level":2,"title":"Ver todos los contenedores","slug":"ver-todos-los-contenedores","link":"#ver-todos-los-contenedores","children":[]},{"level":2,"title":"Detener un contenedor","slug":"detener-un-contenedor","link":"#detener-un-contenedor","children":[]},{"level":2,"title":"Borrar un/varios contenedor","slug":"borrar-un-varios-contenedor","link":"#borrar-un-varios-contenedor","children":[]},{"level":2,"title":"Borrar todos los contenedores, im\xE1genes y vol\xFAmenes","slug":"borrar-todos-los-contenedores-imagenes-y-volumenes","link":"#borrar-todos-los-contenedores-imagenes-y-volumenes","children":[]}],"relativePath":"docker/contenedor.md"}'),a={name:"docker/contenedor.md"},r=s(`<h1 id="comandos-para-manejo-de-contenedores" tabindex="-1">Comandos para manejo de contenedores <a class="header-anchor" href="#comandos-para-manejo-de-contenedores" aria-hidden="true">#</a></h1><h2 id="crear-un-contenedor" tabindex="-1">Crear un contenedor <a class="header-anchor" href="#crear-un-contenedor" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>--name: nombre del contenedor</li><li>-p (publish): puerto_pc:puerto_contendor</li><li>-d (detach): correr el contenedor en modo background (para tener libre la terminal)</li><li>--rm (Clean up): Al detener del contenedor este se borrar\xE1 junto con los vol\xFAmenes que no tengan nombre.</li></ul></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker run --name nombre_contenedor -p port_pc:port_image -d nombre_imagen/id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="activar-contenedor" tabindex="-1">Activar contenedor <a class="header-anchor" href="#activar-contenedor" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li>Por defecto el comando start inicia un contenedor con -d (detach)</li><li>-i: para iniciar un contener con la consola activada</li></ul></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker start nombre_contenedor</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="ver-contenedores-activos" tabindex="-1">Ver contenedores activos <a class="header-anchor" href="#ver-contenedores-activos" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker ps</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="ver-todos-los-contenedores" tabindex="-1">Ver todos los contenedores <a class="header-anchor" href="#ver-todos-los-contenedores" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker ps -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="detener-un-contenedor" tabindex="-1">Detener un contenedor <a class="header-anchor" href="#detener-un-contenedor" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker stop nombre_contenedor</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="borrar-un-varios-contenedor" tabindex="-1">Borrar un/varios contenedor <a class="header-anchor" href="#borrar-un-varios-contenedor" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker rm nombre_contenedor *nombre_contenedor</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="borrar-todos-los-contenedores-imagenes-y-volumenes" tabindex="-1">Borrar todos los contenedores, im\xE1genes y vol\xFAmenes <a class="header-anchor" href="#borrar-todos-los-contenedores-imagenes-y-volumenes" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker system prune -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),t=[r];function c(l,d,i,p,u,h){return n(),o("div",null,t)}const C=e(a,[["render",c]]);export{m as __pageData,C as default};