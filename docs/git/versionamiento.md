# Comandos para versionamiento de Repositorios

::: tip
* Ayuda para comandos:
```bash
git help
```

* Ver el estado de los archivos:
```bash
git status
```
:::

## Iniciar proyecto

```bash
git init
```

## Agregar archivo a etapa de seguimiento (stage)

```bash
git add .
```

## Agregar todos los archivos a etapa de seguimiento (stage)

```bash
git add -A
```

## Agregar archivos con una determinada extensión

```bash
git add *.html
```

```bash
git add *.js
```

## Agregar archivos con una extensión que se encuentran dentro de una carpeta

```bash
git add js/*.js
```

## Quitar un archivo del registro de Git (no le hace seguimiento)

```bash
git reset nombreArchivo
```

## Commit con título

```bash
git commit -m "Primer commit"
```

## Agregar y hacer commit al mismo tiempo (en archivos que ya están en seguimiento)

```bash
git commit -am "Mensaje del commit"
```

## Regresar los archivos al estado del último commit (deshacer cambios)

```bash
# Archivo actual
git checkout -- .
```

```bash
# A un archivo específico (Ejemplo: README.md)
git checkout -- README.md
```

## Historial de Commits

::: tip
q : para cerrar el historial
:::

```bash
git log
```

## Historial de Commits resumido

```bash
git log --one line
```

## Editar el título del último commit

```bash
git commit --amend
```

```bash
git commit --amend -m "Nuevo título del commit"
```

## Eliminar el último commit (manteniendo los cambios)

```bash
git reset --soft HEAD^
```

## Regresar al commit borrando los cambios realizados

```bash
git reset --mixed n°hash
```

## Regresar al commit y dejar los archivos como estaban en ese punto (del hash)

```bash
git reset --hard n°hash
```

## Ver el historial completo en orden cronológico

```bash
git reflog
```

## Renombrar archivo mediante git

::: tip
El archivo vuelve a su estado inicial para hacer add o commit
:::

```bash
git mv nombre-archivo nuevo-nombre
```

## Eliminar un archivo mediante git

::: tip
Hacer un commit para registrar la eliminacion
:::

```bash
git rm nombre-archivo
```

