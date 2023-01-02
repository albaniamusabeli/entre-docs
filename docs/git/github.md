# Comandos para el uso de Github

## Agregar el repositorio remoto (GitHub) al local

```bash
git remote add origin direccion_http_repositorio.git
```

## Subir archivos del local a GitHub

```bash
git push origin master
```

::: tip Para después hacer sólo "git push"
git push -u origin master   
:::

## Traer cambios del repositorio remoto al local

```bash
git pull origin master
```

## Ver donde está el remoto (GitHub) asociado al repositorio local

```bash
git remote -v
```

## Clonar un repositorio de GitHub

```bash
git clone link-repositorio-de-github
```

## Ver los cambios que están en el remoto (sin unirlos al local)

```bash
git fetch
```

## Traer ramas remotas de Github al repositorio local

```bash
git branch -a
```

## Borrar una rama que está en Github

::: tip
Hacerlo desde la rama Master
:::

```bash
git push origin :nombre-rama-remota
```

## Borrar remotos

```bash
git remote rm nombre_rama_remota
```

## Borrar el registro de ramas remotas (que fueron borradas desde Github)

```bash
git remote prune origin
```