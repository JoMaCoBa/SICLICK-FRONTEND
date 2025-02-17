# 🛍 Shopping Cart - Frontend

Este proyecto es el frontend de una tienda en línea, desarrollado con React y Tailwind CSS. Se maneja el estado global con el contexto `ShoppingCartContext`.

---

## 📂 Estructura del Proyecto

### 📁 Componentes Principales
- **Navbar.jsx** → Barra de navegación con acceso al carrito y páginas principales.
- **Home.jsx** → Muestra la lista de productos disponibles.
- **CheckoutSideMenu.jsx** → Panel lateral para revisar el carrito y realizar pedidos.
- **OrderCard.jsx** → Componente para mostrar cada producto en el carrito.
- **MyOrders.jsx** → Página donde se listan los pedidos realizados.

### 🔄 Contexto Global (`ShoppingCartContext.jsx`)
Gestiona:
- ✅ Estado del carrito (productos agregados, cantidad).
- ✅ Estado del menú lateral de checkout.
- ✅ Estado del formulario de pedidos.

### 📡 Conexión con la API
- `fetch` en **MyOrders.jsx** para obtener órdenes desde el backend.
- `fetch` en **CheckoutSideMenu.jsx** para enviar nuevos pedidos.
- `fetch` en **Home.jsx** para obtener la lista de productos.

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el Repositorio
```bash
 git clone https://github.com/JoMaCoBa/SICLICK-FRONTEND.git
 cd shopping-cart-frontend
```

### 2️⃣ Instalar Dependencias
```bash
npm install
```

### 3️⃣ Ejecutar el Proyecto
```bash
npm run dev
```
El proyecto estará disponible en `http://localhost:5173/` (o el puerto que indique Vite).

---

## 🛠 Tecnologías Utilizadas
- React
- Tailwind CSS
- Vite

---

## 📄 Licencia
Este proyecto está bajo la licencia **MIT**.

