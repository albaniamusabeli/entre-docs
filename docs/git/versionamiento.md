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

```
git log
```

## Historial de Commits resumido

```
git log --one line
```

## Cambiar el título del último commit

```
git commit --amend
```

```
git commit --amend -m "Nuevo título del commit"
```

## Eliminar el último commit (manteniendo los cambios)

```
git reset --soft HEAD^
```