import{_ as a,o as e,c as s,a as n}from"./app.c260e2ae.js";const u=JSON.parse('{"title":"Comandos para manejo de imagenes","description":"","frontmatter":{},"headers":[{"level":2,"title":"Bajar una imagen desde Docker Hub","slug":"bajar-una-imagen-desde-docker-hub","link":"#bajar-una-imagen-desde-docker-hub","children":[]},{"level":2,"title":"Crear imagen desde un archivo Dockerfile*","slug":"crear-imagen-desde-un-archivo-dockerfile","link":"#crear-imagen-desde-un-archivo-dockerfile","children":[]},{"level":2,"title":"Ver im\xE1genes instaladas","slug":"ver-imagenes-instaladas","link":"#ver-imagenes-instaladas","children":[]},{"level":2,"title":"Eliminar imagen","slug":"eliminar-imagen","link":"#eliminar-imagen","children":[]}],"relativePath":"docker/imagen.md"}'),i={name:"docker/imagen.md"},l=n(`<h1 id="comandos-para-manejo-de-imagenes" tabindex="-1">Comandos para manejo de imagenes <a class="header-anchor" href="#comandos-para-manejo-de-imagenes" aria-hidden="true">#</a></h1><h2 id="bajar-una-imagen-desde-docker-hub" tabindex="-1">Bajar una imagen desde Docker Hub <a class="header-anchor" href="#bajar-una-imagen-desde-docker-hub" aria-hidden="true">#</a></h2><ul><li>Default tag: latest (autom\xE1tico)</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker pull nombre_imagen</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker pull nombre_imagen:tag</span></span>
<span class="line"></span></code></pre></div><h2 id="crear-imagen-desde-un-archivo-dockerfile" tabindex="-1">Crear imagen desde un archivo Dockerfile* <a class="header-anchor" href="#crear-imagen-desde-un-archivo-dockerfile" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>*Terminal en la ruta donde est\xE1 el archivo Dockerfile</p><ul><li><strong>-t</strong> : Para dar un nombre a la imagen</li><li><strong>.</strong> : Ruta relativa del directorio donde se encuentra el archivo dockerfile</li></ul></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker build -t nombre_imagen:v1 </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span></code></pre></div><h2 id="ver-imagenes-instaladas" tabindex="-1">Ver im\xE1genes instaladas <a class="header-anchor" href="#ver-imagenes-instaladas" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"></span></code></pre></div><h2 id="eliminar-imagen" tabindex="-1">Eliminar imagen <a class="header-anchor" href="#eliminar-imagen" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker image rm nombre_imagen/id</span></span>
<span class="line"></span></code></pre></div>`,12),r=[l];function o(d,c,t,p,m,h){return e(),s("div",null,r)}const b=a(i,[["render",o]]);export{u as __pageData,b as default};