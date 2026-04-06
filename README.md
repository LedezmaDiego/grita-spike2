# Lista de Compras (App Mobile)

Esta es una aplicación simple para crear y gestionar una lista de compras.

Funcionalidades principales:

- Agregar productos
- Marcar productos como completados
- Eliminar productos

---

## Requisitos previos

Antes de comenzar, es necesario instalar los siguientes programas:

### 1. Node.js

Descargar desde: https://nodejs.org  
Instalar la versión recomendada (LTS).

Node.js incluye npm, pero en este proyecto se utiliza Bun como gestor de paquetes.

### 2. Bun

Instalar Bun desde: https://bun.sh

### 3. Git

Descargar desde: https://git-scm.com/

### 4. Expo Go (opcional, para usar en celular)

- Android: disponible en Play Store
- iOS: disponible en App Store

---

## Descargar el proyecto

1. Abrir una terminal (cmd, PowerShell o Terminal).
2. Ejecutar el siguiente comando:

```bash
git clone https://github.com/LedezmaDiego/grita-spike2.git
```

3. Ingresar a la carpeta del proyecto:

```bash
cd grita-spike2
```

---

## Instalación

Dentro de la carpeta del proyecto, ejecutar:

```bash
bun install
```

Este proceso instalará todas las dependencias necesarias.

---

## Ejecución

Para iniciar la aplicación, ejecutar:

```bash
bun start
```

En la terminal aparecerá un código QR y opciones para abrir la aplicación.

---

## Formas de abrir la aplicación

### Opción 1: Dispositivo móvil

1. Abrir la aplicación Expo Go.
2. Escanear el código QR que aparece en la terminal.

### Opción 2: Navegador web

Abrir la dirección que aparece en la terminal, por ejemplo:

```
http://localhost:8081
```

---

## Uso de la aplicación

- Escribir el nombre de un producto en el campo de texto.
- Presionar el botón "Agregar" para añadirlo a la lista.
- Presionar sobre un producto para marcarlo como completado.
- Mantener presionado un producto para eliminarlo.

---

## Solución de problemas

### Problemas al instalar dependencias

Ejecutar:

```bash
bun install --force
```

### Problemas al abrir en el celular

- Verificar que el dispositivo y la computadora estén en la misma red WiFi.
- Reiniciar el servidor con:

```bash
bunx expo start -c
```

---

## Tecnologías utilizadas

- React Native
- Expo

---

## Notas finales

Este proyecto está pensado como una aplicación de ejemplo para prácticas de desarrollo con React Native y Expo.
