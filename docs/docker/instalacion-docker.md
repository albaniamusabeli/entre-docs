# Instalación de Docker

## Instalación de Docker Engine | Ubuntu

### Desinstalar version anterior del engine
```
sudo apt-get remove docker docker-engine docker.io containerd runc
```

### Configurar repositorio
```bash
sudo apt-get update

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```
### LLave GPG oficial de Docker
```bash 
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

### Configurar repositorio
```bash 
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Actualizar apt
```bash 
sudo apt-get update
``` 

### Instalar última versión de Docker Engine + Docker Compose
```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

## Windows 10+

