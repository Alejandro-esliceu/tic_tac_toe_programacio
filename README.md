Tic Tac Toe - Proyecto de programación

Este repositorio contiene una versión sencilla del juego Tic Tac Toe (Tres en raya) creada como proyecto de programación.

## Descripción

Pequeña aplicación web (HTML/CSS/JS) que implementa el juego Tic Tac Toe.

## Estructura del proyecto

- `html/` - Página principal (`index.html`).
- `css/` - Estilos (`style.css`).
- `js/`  - Lógica de la aplicación (`script.js`).

## Cómo ejecutar (localmente)

La forma más simple es abrir `html/index.html` en tu navegador. Para servir el proyecto mediante un servidor local (recomendado para evitar restricciones de CORS si las hubiera):

```bash
# Desde la raíz del proyecto
python3 -m http.server 8000
# o, si usas Node.js y tienes http-server instalado:
npx http-server -p 8000

# Luego abre en el navegador:
# http://localhost:8000/html/