
# Harry Potter Characters App

Bienvenido/a a Harry Potter Characters App, una aplicación web interactiva para explorar y filtrar personajes del *universo de Harry Potter*. Desarrollada en **React**, esta herramienta permite visualizar información detallada de cada personaje y gestionar filtros avanzados.

## ✨ Funcionalidades principales

1. Exploración de personajes: Muestra una lista de personajes con su imagen, nombre y especie.

2. Filtro por nombre: Permite buscar personajes escribiendo su nombre parcial o completo.

3. Filtro por casa: Filtra los personajes según la casa de Hogwarts a la que pertenecen.

4. Detalle del personaje: Visualización ampliada con información como estado (vivo/muerto), género o nombres alternativos, entre otros.

5. Manejo de rutas: Utiliza React Router DOM para una navegación fluida entre secciones.

## Extras visuales:

- Lista ordenada alfabéticamente.
- Ficha del personaje con estilo según la casa.


## 🛠️ Tecnologías utilizadas

- React: Desarrollo de la interfaz.

- React Router DOM: Navegación entre vistas.

- HTML5 y CSS3: Estructura y estilos.

- JavaScript (ES6+): Lógica e interactividad.

- Fetch API: Consumo de datos desde [HP API](https://hp-api.onrender.com/).

## 🚀 Guía de inicio rápido

### Requisitos previos
- Node.js (versión 14 o superior): [Descargar Node.js.](https://nodejs.org/)
- Un editor de código, como [VS Code](https://code.visualstudio.com/).

### Pasos para arrancar el proyecto:

1. **Clona el repositorio.**

```bash
git clone <URL-del-repositorio>
cd <nombre-del-repositorio>
```

2. **Instala las dependencias.**

```bash
npm install
```

3. **Arranca el servidor local.**

```bash
npm run dev
```
Esto abrirá tu navegador predeterminado y cargará la aplicación.

### 📢 Publicación en GitHub Pages:

1. Genera la versión de producción con:

```bash
npm run build
```

2. Genera la rama `gh-pages` que llevará la versión de producción con:

```bash
npm run deploy
```

3. Publica la carpeta `dist/` en GitHub Pages:

- Ve a la pestaña "Settings" de tu repositorio.
- Entra en **Pages**, en el menú de la izquierda.
- Seleccionando la rama **gh-pages** y la carpeta **/root**.

## 📂 Estructura del proyecto

Harry Potter Characters App
├── src
│   ├── components
│   ├── services
│   ├── styles
│   └── assets
├── public
└── dist

src/: Código fuente del proyecto.

public/: Archivos estáticos.

dist/: Carpeta generada para el despliegue en GitHub Pages.

## 📌 Notas adicionales

Se utiliza una imagen placeholder para los personajes sin imagen disponible.

Al volver atrás desde la ficha del personaje se mantiene el estado de la búsqueda.

## ✍️ Autor/a

[Idoia Belloso Elola]

