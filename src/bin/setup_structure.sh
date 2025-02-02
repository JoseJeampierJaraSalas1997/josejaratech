mkdir -p app pages components styles public

touch app/favicon.ico
touch app/globals.css
touch app/layout.tsx
touch app/page.tsx

mkdir -p pages/about
mkdir -p pages/productos/[id]
mkdir -p pages/contacto

touch pages/index.tsx
touch pages/about/index.tsx
touch pages/productos/index.tsx
touch pages/productos/[id]/index.tsx
touch pages/contacto/index.tsx

touch components/Header.tsx
touch components/Footer.tsx
touch components/Card.tsx

touch styles/home.css
touch styles/about.css

touch public/logo.png

echo "Estructura de carpetas y archivos creada exitosamente."
