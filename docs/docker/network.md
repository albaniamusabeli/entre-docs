# Comandos para manejo de redes/networks

::: tip Ayuda
Network: para unir/conectar contenedores dentro de una red
:::

## Ver comandos

```bash
docker network
```

## Crear red

```bash
docker network create nombre-red
```

## Ver todas las redes

```bash
docker network ls
```

## Ver detalles/configuraciones de la red

```bash
docker network inspect nombre-red
```

## Borrar una red

```bash
docker network rm nombre-red
```

## Borrar todas las redes

```bash
docker network prune
```

## Conectar un contenedor a una red

```bash
docker network connect nombre-red nombre-contenedor
```