# Comandos para crear y usar stash

::: tip
Lugar (rama) donde se puede guardar información de forma temporal, para después recuperarla.
:::

## Crear Stash

```bash
git stash
```

## Ver lista de stash

```bash
git stash list
```

## Ver información más detallada del stash

```bash
git stash list --stat
```

## Hacer un merge de la rama falsa stash

Recupera los cambios más recientes del stash y elimina el stash.

```bash
git stash pop
```

## Borrar un stash

```bash
git stash drop n°Stash
```

## Borrar el stash más reciente

```bash
git stash drop
```

## Borrar los stash definitivamente

Borra todos los stash, si es que no se borraron cuando hacemos el git stash pop y resolvemos conflictos.

```bash
git stash clear
```

## Recuperar un stash específico de la lista de stash

```bash
git stash apply n°Stash
```

::: tip Ejemplo
```
git stash apply 0
(el cero es el stash más reciente)
```
:::

## Ver archivos cambiados en el stash

```bash
git stash show n°Stash
```

## Renombrar el stash más reciente

```bash
git stash save "Mensaje para el stash"
```

## Sacar los commit de una rama X, adelantarlos a los commits de master y unirlos a master

::: tip
Tengo que estar en la rama X
:::

```bash
git rebase master
```