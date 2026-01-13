# Tic Tac Toe - Projecte de programació

Aquest repositori conté una versió senzilla del joc Tic Tac Toe (Tres en ratlla) creada com a projecte de programació.

## Descripció

Petita aplicació web (HTML/CSS/JS) que implementa el joc Tic Tac Toe.

## Estructura del projecte

- `html/` - Pàgina principal (`index.html`).
- `css/` - Estils (`style.css`).
- `js/`  - Lògica de l'aplicació (`script.js`).

## Com executar (localment)

La manera més simple és obrir `html/index.html` al teu navegador. Per servir el projecte mitjançant un servidor local (recomanat per evitar possibles restriccions de CORS):

```bash
# Des de la carpeta arrel del projecte
python3 -m http.server 8000
# o, si fas servir Node.js i tens http-server instal·lat:
npx http-server -p 8000

# Després obre al navegador:
# http://localhost:8000/html/