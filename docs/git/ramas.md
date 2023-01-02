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