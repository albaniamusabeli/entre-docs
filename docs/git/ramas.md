# Comandos para crear y usar ramas

## Crear nueva rama

```bash
git branch nombreRama
```

## Moverse a otra rama

```
git checkout otraRama
```

## Crear rama y moverse automáticamente

```
git checkout -b ramaNueva
```

## Ver las ramas existentes

```
git branch
```

## Renombrar una rama

```
git branch -m nombreActual nuevoNombre
```

## Renombrar rama principal en configuración global

```
git config --global init.defaultBranch nuevoNombreRama
```

## Unir cambios con otra rama

```
git merge nuevaRama
```

## Borrar una rama (localmente)

```
git branch -d nombreRama
```

## Traer ramas remotas de Github al repositorio local

```
git branch -a
```

## Borrar una rama que está en Github

:::TIP
Hacerlo desde la rama Master
:::

```
git push origin :nombre-rama-remota
```

## Limpiar el registro de ramas remotas (que fueron borradas desde Github)

```
git remote prune origin
```