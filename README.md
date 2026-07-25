# 🚀 Mini Reto Técnico - Frontend

Este es el frontend del Mini Reto Técnico, construido con **Next.js** y **React**. Su propósito principal es consumir la API construida en nuestro Backend (NestJS) para mostrar información de un perfil de GitHub de manera elegante y minimalista.

## 🛠 Tecnologías Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework de React (usando App Router).
- **CSS Puro (Vanilla)** - Diseño responsivo y moderno sin frameworks externos para mayor control.
- **PNPM** - Gestor de paquetes ultrarrápido.

## 📦 Instalación y Uso Local

1. Asegúrate de tener el Backend corriendo en tu máquina (por defecto en el puerto `3000`).
2. Instala las dependencias del frontend:
   ```bash
   pnpm install
   ```
3. Configura tus variables de entorno creando un archivo `.env` en la raíz (si no lo tienes) y apunta a la API de tu backend:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   pnpm run dev
   ```
5. Abre [http://localhost:3001](http://localhost:3001) en tu navegador para ver la interfaz en funcionamiento.

