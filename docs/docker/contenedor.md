# Comandos para manejo de contenedores

::: info Ayuda
```
docker container --help
```
:::

## Crear un contenedor
::: info
* --name: nombre del contenedor
* -p (publish): puerto_pc:puerto_contendor
* -d (detach): correr el contenedor en modo background (para tener libre la terminal)
* --rm (Clean up): Al detener del contenedor este se borrará junto con los volúmenes que no tengan nombre.
:::
```
docker container run --name nombre_contenedor -p port_pc:port_image -d nombre_imagen/id
```

## Iniciar un contenedor existente
::: info
* Por defecto el comando start inicia un contenedor con -d (detach)
* -i: para iniciar un contener con la consola activada
:::
```
docker container start nombre_contenedor
```

## Ver contenedores activos
```
docker container ls
```

## Ver todos los contenedores
```
docker container ls -a
```

## Detener un contenedor
```
docker container stop nombre_contenedor
```

## Borrar un/varios contenedor
```
docker container rm nombre_contenedor nombre_contenedor2
```

## Borrar todos los contenedores detenidos
```
docker container prune
```

## Borrar todos los contenedores, imágenes y volúmenes
```
docker system prune -a
```