# Instalación NVM Ubuntu

[Node Version Manager - POSIX-](https://github.com/nvm-sh/nvm)

* curl
```bash
sudo apt install curl
```

* nvm
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

* Troubleshooting on Linux
```bash
source ~/.bashrc
```

## Comandos NVM

* Ver lista de versiones
```bash
nvm list-remote
```

* Instalar un version de node
```bash
nvm install 18.12.1
```

* Usar una versión de node
```bash
nvm use node 16.16.0
```
