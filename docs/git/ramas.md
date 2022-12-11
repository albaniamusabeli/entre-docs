# Comandos para crear y usar ramas

## Crear nueva rama

```bash
git branch nombreRama
```

## Moverse a otra rama

```bash
git checkout otraRama
```

## Crear rama y moverse automáticamente

```bash
git checkout -b ramaNueva
```

## Ver las ramas existentes

```bash
git branch
```

## Renombrar una rama

```bash
git branch -m nombreActual nuevoNombre
```

## Renombrar rama principal en configuración global

```bash
git config --global init.defaultBranch nuevoNombreRama
```

## Unir cambios con otra rama

```bash
git merge nuevaRama
```

## Borrar una rama (localmente)

```bash
git branch -d nombreRama
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

## Borrar el registro de ramas remotas (que fueron borradas desde Github)

```bash
git remote prune origin
```