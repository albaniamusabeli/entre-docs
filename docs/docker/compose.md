# Comandos para Docker Compose

::: tip
El archivo debe llamarse *docker-compose.yml* obligatoriamente
:::


## Crear contenedores desde archivo docker-compose.yml
```
docker compose up
```

## Detener contenedores
```
docker compose stop
```

## Iniciar contenedores
```
docker compose start
```

## Detener y borrar contenedores desde archivo docker-compose.yml
::: info
Elimina networks, volúmenes, e imágenes creadas por docker compose
:::

```
docker compose down
```