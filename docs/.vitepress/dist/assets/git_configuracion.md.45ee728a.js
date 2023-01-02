import{_ as a,o as e,c as n,a as s}from"./app.c260e2ae.js";const b=JSON.parse('{"title":"Configuraci\xF3n de Git","description":"","frontmatter":{},"headers":[{"level":2,"title":"Establecer nombre de usuario","slug":"establecer-nombre-de-usuario","link":"#establecer-nombre-de-usuario","children":[]},{"level":2,"title":"Establecer correo de usuario","slug":"establecer-correo-de-usuario","link":"#establecer-correo-de-usuario","children":[]},{"level":2,"title":"Configurar VSC para Git en Ubuntu","slug":"configurar-vsc-para-git-en-ubuntu","link":"#configurar-vsc-para-git-en-ubuntu","children":[]},{"level":2,"title":"Ver informaci\xF3n, configuraci\xF3n y editar informaci\xF3n del usuario","slug":"ver-informacion-configuracion-y-editar-informacion-del-usuario","link":"#ver-informacion-configuracion-y-editar-informacion-del-usuario","children":[]}],"relativePath":"git/configuracion.md"}'),o={name:"git/configuracion.md"},r=s(`<h1 id="configuracion-de-git" tabindex="-1">Configuraci\xF3n de Git <a class="header-anchor" href="#configuracion-de-git" aria-hidden="true">#</a></h1><h2 id="establecer-nombre-de-usuario" tabindex="-1">Establecer nombre de usuario <a class="header-anchor" href="#establecer-nombre-de-usuario" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git config --global user.name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Nombre Usuario</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="establecer-correo-de-usuario" tabindex="-1">Establecer correo de usuario <a class="header-anchor" href="#establecer-correo-de-usuario" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git config --global user.email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">correo@correo.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="configurar-vsc-para-git-en-ubuntu" tabindex="-1">Configurar VSC para Git en Ubuntu <a class="header-anchor" href="#configurar-vsc-para-git-en-ubuntu" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git config --global core.editor &quot;code --wait&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="ver-informacion-configuracion-y-editar-informacion-del-usuario" tabindex="-1">Ver informaci\xF3n, configuraci\xF3n y editar informaci\xF3n del usuario <a class="header-anchor" href="#ver-informacion-configuracion-y-editar-informacion-del-usuario" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git config --global -e</span></span>
<span class="line"></span></code></pre></div>`,9),i=[r];function c(t,l,u,d,p,g){return e(),n("div",null,i)}const f=a(o,[["render",c]]);export{b as __pageData,f as default};
