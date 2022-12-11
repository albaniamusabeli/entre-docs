# Comandos para crear tags

## Crear tag

```bash
git tag nombre-tag
```

## Ver los tags

```bash
git tag
```

## Borrar tags

```bash
git tag -d nombre-tag
```

## Agregar versiones al tag

```bash
git tag -a v.1.0.0 -m "Version 1.0.0"
```

## Agregar tag con el número de commit

```bash
git tag -a v.0.1.0 n°HASH -m "Version Alpha"
```

## Mostrar información adicional del tag

```bash
git show n°VersionHASH
```

::: tip Ejemplo:
git show v0.1.0
:::

## Subir los tags a GitHub

```bash
git push --tags
```