# Comandos para manejo de contenedores

## Crear un contenedor
::: info
* --name: nombre del contenedor
* -p (publish): puerto_pc:puerto_contendor
* -d (detach): correr el contenedor en modo background (para tener libre la terminal)
* --rm (Clean up): Al detener del contenedor este se borrará junto con los volúmenes que no tengan nombre.
:::
```
docker run --name nombre_contenedor -p port_pc:port_image -d nombre_imagen/id
```

## Activar contenedor
::: info
* Por defecto el comando start inicia un contenedor con -d (detach)
* -i: para iniciar un contener con la consola activada
:::
```
docker start nombre_contenedor
```

## Ver contenedores activos
```
docker ps
```

## Ver todos los contenedores
```
docker ps -a
```

## Detener un contenedor
```
docker stop nombre_contenedor
```

## Borrar un/varios contenedor
```
docker rm nombre_contenedor *nombre_contenedor
```

## Borrar todos los contenedores, imágenes y volúmenes
```
docker system prune -a
```