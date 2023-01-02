import{_ as a,o as s,c as e,a as l}from"./app.83889ac5.js";const b=JSON.parse('{"title":"Comandos para crear y usar stash","description":"","frontmatter":{},"headers":[{"level":2,"title":"Crear Stash","slug":"crear-stash","link":"#crear-stash","children":[]},{"level":2,"title":"Ver lista de stash","slug":"ver-lista-de-stash","link":"#ver-lista-de-stash","children":[]},{"level":2,"title":"Ver informaci\xF3n m\xE1s detallada del stash","slug":"ver-informacion-mas-detallada-del-stash","link":"#ver-informacion-mas-detallada-del-stash","children":[]},{"level":2,"title":"Hacer un merge de la rama falsa stash","slug":"hacer-un-merge-de-la-rama-falsa-stash","link":"#hacer-un-merge-de-la-rama-falsa-stash","children":[]},{"level":2,"title":"Borrar un stash","slug":"borrar-un-stash","link":"#borrar-un-stash","children":[]},{"level":2,"title":"Borrar los stash definitivamente","slug":"borrar-los-stash-definitivamente","link":"#borrar-los-stash-definitivamente","children":[]},{"level":2,"title":"Recuperar un stash espec\xEDfico de la lista de stash","slug":"recuperar-un-stash-especifico-de-la-lista-de-stash","link":"#recuperar-un-stash-especifico-de-la-lista-de-stash","children":[]},{"level":2,"title":"Ver qu\xE9 archivos fueron cambiados en el stash","slug":"ver-que-archivos-fueron-cambiados-en-el-stash","link":"#ver-que-archivos-fueron-cambiados-en-el-stash","children":[]},{"level":2,"title":"Renombrar el stash m\xE1s reciente","slug":"renombrar-el-stash-mas-reciente","link":"#renombrar-el-stash-mas-reciente","children":[]},{"level":2,"title":"Sacar los commit de una rama X, adelantarlos a los commits de master y unirlos a master","slug":"sacar-los-commit-de-una-rama-x-adelantarlos-a-los-commits-de-master-y-unirlos-a-master","link":"#sacar-los-commit-de-una-rama-x-adelantarlos-a-los-commits-de-master-y-unirlos-a-master","children":[]}],"relativePath":"git/stash.md"}'),n={name:"git/stash.md"},t=l(`<h1 id="comandos-para-crear-y-usar-stash" tabindex="-1">Comandos para crear y usar stash <a class="header-anchor" href="#comandos-para-crear-y-usar-stash" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Lugar (rama) donde se puede guardar informaci\xF3n de forma temporal, para despu\xE9s recuperarla.</p></div><h2 id="crear-stash" tabindex="-1">Crear Stash <a class="header-anchor" href="#crear-stash" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash</span></span>
<span class="line"></span></code></pre></div><h2 id="ver-lista-de-stash" tabindex="-1">Ver lista de stash <a class="header-anchor" href="#ver-lista-de-stash" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash list</span></span>
<span class="line"></span></code></pre></div><h2 id="ver-informacion-mas-detallada-del-stash" tabindex="-1">Ver informaci\xF3n m\xE1s detallada del stash <a class="header-anchor" href="#ver-informacion-mas-detallada-del-stash" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash list --stash</span></span>
<span class="line"></span></code></pre></div><h2 id="hacer-un-merge-de-la-rama-falsa-stash" tabindex="-1">Hacer un merge de la rama falsa stash <a class="header-anchor" href="#hacer-un-merge-de-la-rama-falsa-stash" aria-hidden="true">#</a></h2><p>Recupera los cambios m\xE1s recientes del stash y elimina el stash.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash pop</span></span>
<span class="line"></span></code></pre></div><h2 id="borrar-un-stash" tabindex="-1">Borrar un stash <a class="header-anchor" href="#borrar-un-stash" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash drop n\xB0Stash</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Borrar el stash m\xE1s reciente:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash drop</span></span>
<span class="line"></span></code></pre></div></div><h2 id="borrar-los-stash-definitivamente" tabindex="-1">Borrar los stash definitivamente <a class="header-anchor" href="#borrar-los-stash-definitivamente" aria-hidden="true">#</a></h2><p>Borra todos los stash, si es que no se borraron cuando hacemos el git stash pop y resolvemos conflictos.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash clear</span></span>
<span class="line"></span></code></pre></div><h2 id="recuperar-un-stash-especifico-de-la-lista-de-stash" tabindex="-1">Recuperar un stash espec\xEDfico de la lista de stash <a class="header-anchor" href="#recuperar-un-stash-especifico-de-la-lista-de-stash" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash apply n\xB0Stash</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Ejemplo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash apply 0</span></span>
<span class="line"><span style="color:#A6ACCD;">(el cero es el stash m\xE1s reciente)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></div><h2 id="ver-que-archivos-fueron-cambiados-en-el-stash" tabindex="-1">Ver qu\xE9 archivos fueron cambiados en el stash <a class="header-anchor" href="#ver-que-archivos-fueron-cambiados-en-el-stash" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash show n\xB0Stash</span></span>
<span class="line"></span></code></pre></div><h2 id="renombrar-el-stash-mas-reciente" tabindex="-1">Renombrar el stash m\xE1s reciente <a class="header-anchor" href="#renombrar-el-stash-mas-reciente" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git stash save </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mensaje para el stash</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="sacar-los-commit-de-una-rama-x-adelantarlos-a-los-commits-de-master-y-unirlos-a-master" tabindex="-1">Sacar los commit de una rama X, adelantarlos a los commits de master y unirlos a master <a class="header-anchor" href="#sacar-los-commit-de-una-rama-x-adelantarlos-a-los-commits-de-master-y-unirlos-a-master" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Tengo que estar en la rama X</p></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git rebase master</span></span>
<span class="line"></span></code></pre></div>`,27),r=[t];function i(o,c,d,p,h,u){return s(),e("div",null,r)}const g=a(n,[["render",i]]);export{b as __pageData,g as default};
