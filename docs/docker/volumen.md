# Comandos para manejo de volúmenes

::: tip Ayuda
Volumen: persistencia de datos del contenedor
:::

## Crear volumen (con nombre)

```bash
docker volume create nombre-volumen
```

## Ver volúmenes creados

```bash
docker volume ls
```

## Ver la configuración/detalles de un volumen

```bash
docker volume inspect nombre-volumen
```

## Bind volumes (Windows)

::: tip Ayuda
Crear volumenes desde una carpeta local (de mi pc) al directorio del contenedor

* Path Actual powershell: ```${PWD}```
* Path Actual CMD: ```%cd%```
* Path Actual Linux: ```$(pwd)```
:::

```bash
docker container run --name nest-app -w /app -p 3000:3000 -v ${PWD}:/app node:16-alpine3.16 sh -c "yarn install && yarn start:dev"
```