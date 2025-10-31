<div align="center">

# Proyecto Gestión de Talleres

## **Fullstack | Proyecto Educativo | API REST + Interfaz Web**

Un **sistema integral** para **optimizar la administración** de talleres mecánicos, conectando clientes, mecánicos y administradores. ¡La eficiencia al alcance de tu mano!

---

![Estado](https://img.shields.io/badge/STATUS-En%20Desarrollo-00ffcc?style=for-the-badge&logo=github)
![Licencia](https://img.shields.io/badge/Licencia-MIT-8a2be2?style=for-the-badge)
![Stack Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express%20%7C%20MySQL-ff007f?style=for-the-badge)
![Stack Frontend](https://img.shields.io/badge/Frontend-React%20%7C%20TypeScript%20%7C%20TailwindCSS-61dafb?style=for-the-badge)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

</div>

---

<h2 align="center"> Resumen del Proyecto </h2>

El **Proyecto Gestión de Talleres** es una **aplicación web completa (Fullstack)** que combina una potente **API REST (Backend)** con una **interfaz moderna y responsive (Frontend)**. El sistema permite que los talleres mecánicos administren eficientemente todas sus operaciones: **clientes, mecánicos, vehículos, órdenes de trabajo, inventarios, notificaciones y pagos.**

La metodología ágil seleccionada fue **Scrum**, la cual nos permitió organizar el trabajo en ciclos cortos (**Sprints**), garantizar entregas funcionales continuas y mantener una comunicación directa con el **Product Owner**, asegurando que el producto final esté perfectamente alineado con los objetivos de negocio.

---

---

El Proyecto Gestión de Talleres tiene como objetivo desarrollar una aplicación web integral que permita a los talleres mecánicos optimizar la administración de sus procesos operativos. La solución gestionará de manera eficiente los módulos de clientes, mecánicos, motocicletas, órdenes de trabajo, inventarios, notificaciones y pagos, garantizando la trazabilidad y el control en tiempo real de cada operación.

Para el desarrollo del sistema se adoptó la metodología ágil Scrum, debido a su enfoque iterativo e incremental que facilita la entrega continua de funcionalidades y la mejora progresiva del producto. Este enfoque permite una comunicación constante con el Product Owner, asegurando que cada sprint genere entregables funcionales alineados con los requerimientos del negocio y los objetivos estratégicos del proyecto.

Scrum, además, proporciona una estructura flexible para gestionar cambios en los requerimientos, fomentar la colaboración entre los miembros del equipo de desarrollo y mantener una visión clara del avance del proyecto mediante reuniones periódicas de seguimiento (Daily Scrum, Sprint Review y Retrospective). De esta manera, se garantiza que la aplicación evolucione de forma controlada, priorizando las necesidades reales del taller y asegurando un producto final robusto, escalable y orientado a la mejora de la productividad.

---

<h3 align="center"> Objetivos Clave del Proyecto </h3>

- **Productividad Máxima:** Mejorar la eficiencia en los procesos internos del taller.
- **Trazabilidad Total:** Garantizar el seguimiento completo de clientes, servicios y repuestos.
- **Experiencia Premium:** Ofrecer seguimiento en tiempo real y notificaciones al cliente.
- **Decisiones Inteligentes:** Facilitar la toma de decisiones con reportes financieros y administrativos.

---

<h2 align="center"> Metodología Ágil: Scrum </h2>

El equipo aplicó **Scrum** para estructurar el desarrollo, logrando entregas funcionales, un control de avances preciso y una comunicación altamente efectiva.

### Roles Principales

| Rol                  | Función Principal                                            |
| :------------------- | :----------------------------------------------------------- |
| **Product Owner**    | Define y prioriza todos los requisitos (el _qué_).           |
| **Scrum Master**     | Guía el proceso, protege al equipo y elimina impedimentos.   |
| **Development Team** | Desarrolla las funcionalidades (Backend/Frontend/FullStack). |

### Artefactos Esenciales

- **Product Backlog (23 Requisitos):** Lista maestra y priorizada de las funcionalidades del sistema.
- **Sprint Backlog:** Tareas específicas y priorizadas para ser completadas en un Sprint.
- **Incremento:** La suma de todos los elementos completados en un Sprint, listos para ser entregados.

### Aplicación de Scrum en 6 Pasos

1. **Reunión inicial** con el Product Owner para levantar los 23 requisitos.
2. Construcción del **Product Backlog**.
3. **Sprint Planning:** Priorización por valor de negocio y definición del Sprint Goal.
4. Creación del **Sprint Backlog** con asignación de tareas por rol.
5. **Daily Scrum** (Daily Stand-up): 15 minutos de seguimiento diario de avances.
6. **Sprint Review** y **Retrospective:** Validación de resultados y mejora continua del proceso.

---

<h2 align="center"> Definiciones Clave para Entender el Proyecto </h2>

| Concepto                  | Definición Corta y Sencilla                                                                             |
| :------------------------ | :------------------------------------------------------------------------------------------------------ |
| **Cliente**               | Persona o empresa que solicita un servicio de reparación o mantenimiento.                               |
| **Mecánico**              | Usuario con el rol de ejecutar los servicios y actualizar el estado de las órdenes.                     |
| **Registro**              | Proceso de ingresar un nuevo dato (ej. nuevo cliente, nueva motocicleta) al sistema.                    |
| **Administración**        | Conjunto de funcionalidades para gestionar, editar y eliminar datos del sistema.                        |
| **Roles**                 | Permisos y funcionalidades específicas asignadas a cada tipo de usuario (ej. Admin, Mecánico, Cliente). |
| **Inventario**            | Control de existencias (stock) de repuestos, aceites y consumibles en el taller.                        |
| **Orden de Trabajo (OT)** | Documento que detalla el servicio solicitado, repuestos usados y el estado actual de la reparación.     |
| **Módulo Principal**      | Conjunto de funcionalidades relacionadas a un área clave del sistema (ej. Módulo Finanzas).             |

---

<h2 align="center"> Módulos Principales del Sistema </h2>

El sistema está diseñado modularmente para una gestión completa, integrando Backend (API) y Frontend (Interfaz):

### 🔧 Backend (API REST)

| Módulo                   | Descripción                                                                                    |
| :----------------------- | :--------------------------------------------------------------------------------------------- |
| **Clientes y Mecánicos** | **Registro, administración** de usuarios y definición de **roles** (acceso a funcionalidades). |
| **Motocicletas**         | Información detallada del vehículo y vinculación directa con el **cliente**.                   |
| **Órdenes de Trabajo**   | Creación, seguimiento y registro de servicios, repuestos y mano de obra.                       |
| **Inventario**           | Control de entradas/salidas, gestión de stock y **alertas** de bajo nivel.                     |
| **Notificaciones**       | Envío de cotizaciones, actualizaciones de estado y recordatorios al **cliente**.               |
| **Finanzas**             | Generación de reportes, facturación, planes de suscripción y pasarela de pagos.                |
| **Agenda de Citas**      | Módulo para la programación y gestión de servicios futuros con el **cliente**.                 |

### 🎨 Frontend (Interfaz Web)

| Módulo                         | Descripción                                                                                    |
| :----------------------------- | :--------------------------------------------------------------------------------------------- |
| **Dashboard del Taller**       | Panel de control con métricas, gráficos y resumen de operaciones en tiempo real.               |
| **Gestión de Órdenes**         | Interfaz para crear, editar y seguir órdenes de trabajo con subida de evidencias fotográficas. |
| **Panel de Inventario**        | Control visual de stock, alertas de bajo inventario y gestión de repuestos y consumibles.      |
| **Administración de Clientes** | Registro, edición y consulta de información de clientes y sus motocicletas asociadas.          |
| **Panel de Mecánicos**         | Gestión de mecánicos, asignación de tareas y seguimiento de desempeño.                         |
| **Sistema de Notificaciones**  | Centro de notificaciones en tiempo real para actualizaciones de órdenes y alertas del sistema. |
| **Reportes Financieros**       | Visualización de ventas, cotizaciones y reportes mensuales con filtros avanzados.              |
| **Sistema de Suscripciones**   | Gestión de planes (Básico, Premium, Profesional) con beneficios y publicidad destacada.        |
| **Editor de Contenido**        | Editor de texto enriquecido para descripciones detalladas y documentación de servicios.        |

---

<h2 align="center"> Evidencias de Scrum en Miro </h2>

La transparencia del proyecto se gestionó en Miro, donde se puede visualizar todo el proceso:

- Captura del **Product Backlog** con los 23 requisitos.
- Lista priorizada generada en la **Sprint Planning Meeting**.
- **Sprint Backlog** con la asignación de tareas por rol y su estado.

**[Ver tablero de Miro Completo Aquí](https://miro.com/welcomeonboard/cldmNXFrOTVuM291d09MUXlvT0drblZmeGpjTFVXTTJ0S3hzbXhKNEVaY3R1TFZReEp3NlZBSkM0WnZRbnFQSWtiTTR6eG1aL2RjL0xVem5UT1hGOVJsOWhRMlc0Z1lPWTlVR2M2WkZYbjdDRFl1QmhoZ3FtMHJJN2pCSWJrVUxNakdSWkpBejJWRjJhRnhhb1UwcS9BPT0hdjE=?share_link_id=391797611012)**

---

<h2 align="center"> Conclusiones del Proyecto </h2>

La adopción de **Scrum** fue crucial. Permitió organizar y **priorizar** los requisitos del sistema de acuerdo con el **valor de negocio**, asegurando que el equipo estuviera siempre enfocado en las tareas más importantes.

El uso de tableros visuales en **Miro** fortaleció la **trazabilidad**, facilitando la comprensión del avance desde el requisito inicial hasta la tarea completada.

**En resumen: Scrum es la metodología ideal** para el _Proyecto Gestión de Talleres_, garantizando entregas iterativas, comunicación constante y un producto perfectamente alineado con los objetivos del cliente.

---

<h2 align="center"> Características Técnicas de la API </h2>

| Característica   | Descripción                                                                                 |
| :--------------- | :------------------------------------------------------------------------------------------ |
| **Seguridad**    | Login y **Registro** con autenticación JWT (JSON Web Tokens).                               |
| **Usuarios**     | **Roles** y **administración** de **clientes** y **mecánicos** con permisos personalizados. |
| **Vehículos**    | **Registro** y gestión de **motocicletas** asociadas a cada **cliente**.                    |
| **Servicios**    | Creación de **órdenes de trabajo** detalladas y **adjuntar repuestos**.                     |
| **Seguimiento**  | **Notificaciones** instantáneas y seguimiento en tiempo real de la **orden de trabajo**.    |
| **Stock**        | **Inventario** dinámico con **alertas** automáticas de bajo stock.                          |
| **Evidencias**   | Funcionalidad para la subida de fotos y documentos.                                         |
| **Finanzas**     | Reportes, cotizaciones, visualización de ventas y pasarela de pagos.                        |
| **Integración**  | API pública diseñada para la conexión con futuras apps móviles.                             |
| **Organización** | **Agenda de citas** integrada para una mejor planificación del tiempo.                      |

---

<h2 align="center"> Stack Tecnológico </h2>

### 🔧 Backend (API REST)

Las tecnologías elegidas garantizan un backend robusto, escalable y de alto rendimiento.

| Categoría              | Tecnologías Clave               | Propósito                                                 |
| :--------------------- | :------------------------------ | :-------------------------------------------------------- |
| **Backend Core**       | Node.js · Express.js            | Entorno de ejecución y Framework minimalista para la API. |
| **Base de Datos**      | MySQL · Sequelize               | ORM robusto para almacenamiento relacional y migraciones. |
| **Autenticación**      | JWT · Bcrypt                    | Generación de tokens seguros y encriptación de passwords. |
| **Almacenamiento**     | Cloudinary                      | Almacenamiento escalable de imágenes (evidencias, logos). |
| **Notificaciones**     | Mailtrap · SendSMS              | Envío de emails transaccionales y mensajes SMS.           |
| **Tareas Programadas** | node-cron                       | Automatización de tareas (verificación de suscripciones). |
| **Validación**         | Express Validator               | Validación de datos en endpoints.                         |
| **Herramientas**       | Git · GitHub · Postman · VSCode | Gestión de código, pruebas y desarrollo.                  |

### 🎨 Frontend (Interfaz Web)

Interfaz moderna, responsive y optimizada para una experiencia de usuario excepcional.

| Categoría          | Tecnologías Clave                     | Propósito                                                    |
| :----------------- | :------------------------------------ | :----------------------------------------------------------- |
| **Framework**      | React 19 · TypeScript                 | Componentes tipados, reutilizables y desarrollo escalable.   |
| **Estilos**        | TailwindCSS 4                         | Sistema de diseño utility-first, completamente responsive.   |
| **Build Tool**     | Vite 7                                | Build ultrarrápido con Hot Module Replacement (HMR).         |
| **Routing**        | React Router 7                        | Navegación SPA con rutas dinámicas y protegidas.             |
| **HTTP Client**    | Axios                                 | Comunicación eficiente con la API REST del backend.          |
| **Estado Global**  | Context API · React Hooks             | Gestión de estado compartido entre componentes.              |
| **UI/UX**          | Framer Motion · Lucide Icons · Swiper | Animaciones fluidas, iconografía moderna y carruseles.       |
| **Editores**       | Tiptap · Quill                        | Editores de texto enriquecido para descripciones detalladas. |
| **Notificaciones** | React Hot Toast                       | Sistema de notificaciones toast estilizadas.                 |
| **Formularios**    | React Hook Form                       | Manejo eficiente de formularios con validación.              |
| **PDF**            | jsPDF · jsPDF AutoTable               | Generación de reportes y documentos PDF.                     |
| **Auth**           | jwt-decode                            | Decodificación de tokens JWT en el cliente.                  |
| **Herramientas**   | ESLint · TypeScript ESLint · Git      | Linting, análisis estático y control de versiones.           |

---

<h2 align="center"> Instalación y Ejecución Local </h2>

Sigue estos sencillos pasos para levantar el proyecto completo (Backend + Frontend) en tu entorno de desarrollo.

---

### 🔧 Backend (API REST)

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/MIPablosky/Metodologia_Scrum_Equipo2.git
cd Metodologia_Scrum_Equipo2/Proyectos/Backend

# 2️⃣ Instalar las dependencias de Node.js
npm install

# 3️⃣ Configurar variables de entorno
# IMPORTANTE: Crear el archivo .env y completar con tus credenciales
# Variables requeridas:
# DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT
# JWT_SECRET
# CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET
# TOKEN_MAILTRAP
cp .env.example .env

# 4️⃣ Ejecutar migraciones y seeders de la base de datos
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# 5️⃣ Iniciar el servidor en modo desarrollo
npm run server

# ✅ El servidor estará corriendo en http://localhost:8000
```

**Variables de entorno requeridas (Backend):**

```env
DB_NAME=system_workshop
DB_USER=root
DB_PASS=
DB_HOST=127.0.0.1
DB_PORT=3306
PORT=8000
JWT_SECRET=tu_clave_secreta_segura
CLOUDINARY_NAME=tu_cloudinary_name
CLOUDINARY_KEY=tu_cloudinary_key
CLOUDINARY_SECRET=tu_cloudinary_secret
TOKEN_MAILTRAP=tu_token_mailtrap
```

---

### 🎨 Frontend (Interfaz Web)

```bash
# 1️⃣ Navegar a la carpeta del Frontend
cd Metodologia_Scrum_Equipo2/Proyectos/Frontend

# 2️⃣ Instalar las dependencias
npm install

# 3️⃣ Configurar variables de entorno
# Crear archivo .env en la raíz del frontend
# Variable requerida:
echo "VITE_API_URL=http://localhost:8000/api/v1" > .env

# 4️⃣ Iniciar el servidor de desarrollo con Vite
npm run dev

# ✅ La aplicación estará disponible en http://localhost:5173
```

**Variables de entorno (Frontend):**

```env
VITE_API_URL=http://localhost:8000/api/v1
```

---

### 📦 Comandos Disponibles

#### Backend:

```bash
npm run server    # Inicia el servidor con nodemon (hot reload)
npm start         # Inicia el servidor en modo producción
```

#### Frontend:

```bash
npm run dev       # Inicia servidor de desarrollo con Vite
npm run build     # Compila para producción (TypeScript + Vite)
npm run preview   # Preview de la build de producción
npm run lint      # Ejecuta ESLint para análisis de código
```

---

### 🚀 Despliegue en Producción

**Backend:** El backend está desplegado y puede ser accedido en producción.

**Frontend:** El frontend está configurado con Vercel para despliegue automático desde el repositorio.

---

---

<h2 align="center"> 👥 Equipo de Desarrollo </h2>

| Nombre              | Rol                    | Responsabilidad Principal                                     |
| :------------------ | :--------------------- | :------------------------------------------------------------ |
| Pablo Murillo Lemus | Product Owner          | Definición de requisitos y priorización del Product Backlog   |
| Gabriel Sánchez     | Scrum Master           | Facilitación del proceso Scrum y eliminación de impedimentos  |
| Juan Román Cuero    | Arquitecto de Software | Diseño de arquitectura del sistema y decisiones técnicas      |
| Jader Riascos       | Desarrollador Frontend | Desarrollo de interfaz React, UX/UI y componentes             |
| Darío Restrepo      | Desarrollador Backend  | Desarrollo de API REST, base de datos y lógica de negocio     |
| Jhoan Murillo       | Tester                 | Pruebas de calidad, testing funcional y documentación de bugs |

---

<div align="center">

### 🌟 **¡Gracias por visitar nuestro proyecto!**

Si te gusta este proyecto, no olvides darle una ⭐ en GitHub

**Desarrollado con ❤️ usando Metodología Scrum**

</div>
