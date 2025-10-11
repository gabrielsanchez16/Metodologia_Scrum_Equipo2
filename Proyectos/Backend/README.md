# ✅ Roadmap de desarrollo backend: Sistema de Taller de Motos

Este documento resume los **siguientes pasos a seguir** ahora que ya tienes configurado:

- ✅ Diagrama de base de datos (ERD)
- ✅ Modelos Sequelize
- ✅ Entorno de desarrollo (Express, JWT, Cloudinary, Multer)
- ✅ Registro de taller
- ✅ Inicio de sesión con token JWT

---
<img width="1087" height="1233" alt="sistema taller" src="https://github.com/user-attachments/assets/e61b55e7-39b2-4721-b1fc-1c64a929fb92" />


## 🔒 Seguridad global

- [x] Autenticación JWT funcionando
- [x] Middleware de autenticación (`authenticate.js`) aplicado a todas las rutas privadas

> 📌 Todas las rutas siguientes deben requerir token para acceder.

## 📝 Estado del trabajo en el proyecto

### 🚧 Progreso del proyecto

🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩 100%

- ✅ Auth
- ✅ Brand
- ✅ Motorcycle
- ✅ Owner
- ✅ Workshop
- ✅ Type
- ✅ Service
- ✅  WorkOrder
- ✅ Mechanic
- ✅ Photo
- ✅ ServiceByWork

## 🚀 Instalación y configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

---

### 1. 📁 Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/gabrielsanchez16/Backend-Sistema-Gestion-Talleres-Motocicletas.git
cd "Repo cloneado"
```

### 2. 📁 Instalar dependencias

Instala las dependencias:

```bash
npm install
```
### 3. 📁 Configura tu .env

Coloca las credenciales de tu maquina local:

```bash
DB_NAME=system_workshop
DB_USER=root
DB_PASS=
DB_HOST=127.0.0.1
DB_PORT=3306
PORT=8000
JWT_SECRET=clave_secreta
CLOUDINARY_NAME=nombre de cloudinary
CLOUDINARY_KEY=llave de cloudinary
CLOUDINARY_SECRET=clave secreta de cloudinary
```

### 4. 📁 Corre migraciones y Seeders

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

Para crear migraciones

```bash
npx sequelize-cli migration:generate --name nombre de la migracion
```

Para crear seeders

```bash
npx sequelize-cli seed:generate --name nombre-del-seeder
```



### 5. 📁 Corre el servidor

Ya puedes correr el servidor y probarlo:

```bash
npm run server
```