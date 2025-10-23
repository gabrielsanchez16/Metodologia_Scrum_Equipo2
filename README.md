<div align="center">

#  Proyecto Gestión de Talleres 
## **Backend | Proyecto Educativo | API REST**

Un **sistema integral** para **optimizar la administración** de talleres mecánicos, conectando clientes, mecánicos y administradores. ¡La eficiencia al alcance de tu mano!

---

![Estado](https://img.shields.io/badge/STATUS-En%20Desarrollo-00ffcc?style=for-the-badge&logo=github)
![Licencia](https://img.shields.io/badge/Licencia-MIT-8a2be2?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-Node.js%20%7C%20Express%20%7C%20PostgreSQL-ff007f?style=for-the-badge)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

</div>

---

<h2 align="center"> Resumen del Proyecto </h2>

El **Proyecto Gestión de Talleres** es una potente **API REST** diseñada para que los talleres mecánicos administren eficientemente todas sus operaciones: **clientes, mecánicos, vehículos, órdenes de trabajo, inventarios, notificaciones y pagos.**

La metodología ágil seleccionada fue ** Scrum**, la cual nos permitió organizar el trabajo en ciclos cortos (**Sprints**), garantizar entregas funcionales continuas y mantener una comunicación directa con el **Product Owner**, asegurando que el producto final esté perfectamente alineado con los objetivos de negocio.

---
-------

El Proyecto Gestión de Talleres tiene como objetivo desarrollar una aplicación web integral que permita a los talleres mecánicos optimizar la administración de sus procesos operativos. La solución gestionará de manera eficiente los módulos de clientes, mecánicos, motocicletas, órdenes de trabajo, inventarios, notificaciones y pagos, garantizando la trazabilidad y el control en tiempo real de cada operación.

Para el desarrollo del sistema se adoptó la metodología ágil Scrum, debido a su enfoque iterativo e incremental que facilita la entrega continua de funcionalidades y la mejora progresiva del producto. Este enfoque permite una comunicación constante con el Product Owner, asegurando que cada sprint genere entregables funcionales alineados con los requerimientos del negocio y los objetivos estratégicos del proyecto.

Scrum, además, proporciona una estructura flexible para gestionar cambios en los requerimientos, fomentar la colaboración entre los miembros del equipo de desarrollo y mantener una visión clara del avance del proyecto mediante reuniones periódicas de seguimiento (Daily Scrum, Sprint Review y Retrospective). De esta manera, se garantiza que la aplicación evolucione de forma controlada, priorizando las necesidades reales del taller y asegurando un producto final robusto, escalable y orientado a la mejora de la productividad.


-------

<h3 align="center"> Objetivos Clave del Proyecto </h3>

- **Productividad Máxima:** Mejorar la eficiencia en los procesos internos del taller.
- **Trazabilidad Total:** Garantizar el seguimiento completo de clientes, servicios y repuestos.
- **Experiencia Premium:** Ofrecer seguimiento en tiempo real y notificaciones al cliente.
- **Decisiones Inteligentes:** Facilitar la toma de decisiones con reportes financieros y administrativos.

---

<h2 align="center"> Metodología Ágil: Scrum </h2>

El equipo aplicó **Scrum** para estructurar el desarrollo, logrando entregas funcionales, un control de avances preciso y una comunicación altamente efectiva.

### Roles Principales 

| Rol | Función Principal |
| :--- | :--- |
| **Product Owner** | Define y prioriza todos los requisitos (el *qué*). |
| **Scrum Master** | Guía el proceso, protege al equipo y elimina impedimentos. |
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

| Concepto | Definición Corta y Sencilla |
| :--- | :--- |
| **Cliente** | Persona o empresa que solicita un servicio de reparación o mantenimiento. |
| **Mecánico** | Usuario con el rol de ejecutar los servicios y actualizar el estado de las órdenes. |
| **Registro** | Proceso de ingresar un nuevo dato (ej. nuevo cliente, nueva motocicleta) al sistema. |
| **Administración** | Conjunto de funcionalidades para gestionar, editar y eliminar datos del sistema. |
| **Roles** | Permisos y funcionalidades específicas asignadas a cada tipo de usuario (ej. Admin, Mecánico, Cliente). |
| **Inventario** | Control de existencias (stock) de repuestos, aceites y consumibles en el taller. |
| **Orden de Trabajo (OT)** | Documento que detalla el servicio solicitado, repuestos usados y el estado actual de la reparación. |
| **Módulo Principal** | Conjunto de funcionalidades relacionadas a un área clave del sistema (ej. Módulo Finanzas). |

---

<h2 align="center"> Módulos Principales del Sistema (Backend) </h2>

El sistema está diseñado modularmente para una gestión completa:

| Módulo | Descripción |
| :--- | :--- |
| **Clientes y Mecánicos** | **Registro, administración** de usuarios y definición de **roles** (acceso a funcionalidades). |
| **Motocicletas** | Información detallada del vehículo y vinculación directa con el **cliente**. |
| **Órdenes de Trabajo** | Creación, seguimiento y registro de servicios, repuestos y mano de obra. |
| **Inventario** | Control de entradas/salidas, gestión de stock y **alertas** de bajo nivel. |
| **Notificaciones** | Envío de cotizaciones, actualizaciones de estado y recordatorios al **cliente**. |
| **Finanzas** | Generación de reportes, facturación, planes de suscripción y pasarela de pagos. |
| **Agenda de Citas** | Módulo para la programación y gestión de servicios futuros con el **cliente**. |

---

<h2 align="center"> Evidencias de Scrum en Miro </h2>

La transparencia del proyecto se gestionó en Miro, donde se puede visualizar todo el proceso:

- Captura del **Product Backlog** con los 23 requisitos.
- Lista priorizada generada en la **Sprint Planning Meeting**.
- **Sprint Backlog** con la asignación de tareas por rol y su estado.

**[Ver tablero de Miro Completo Aquí](https://miro.com/welcomeonboard/ZjdTYUVVR1JMbnJaeTJ3RjhlVGFVR2cyYzEvaEVqOFArT2dhZjlSSVBxZWJmbjVwTlkrUnJ3UzVyalBhWlkyT3BZNkxLTkEvSmRyQ1B0YUFWa2JkKzMzQllpbGtERjAyS29ZMjBjZjRmcEE1YUVnQmdTVGJWMGFYVnZQZ1VNRDhQdGo1ZEV3bUdPQWRZUHQzSGl6V2NBPT0hdjE=?share_link_id=835847404985)** 

---

<h2 align="center"> Conclusiones del Proyecto </h2>

La adopción de **Scrum** fue crucial. Permitió organizar y **priorizar** los requisitos del sistema de acuerdo con el **valor de negocio**, asegurando que el equipo estuviera siempre enfocado en las tareas más importantes.

El uso de tableros visuales en **Miro** fortaleció la **trazabilidad**, facilitando la comprensión del avance desde el requisito inicial hasta la tarea completada.

**En resumen: Scrum es la metodología ideal** para el *Proyecto Gestión de Talleres*, garantizando entregas iterativas, comunicación constante y un producto perfectamente alineado con los objetivos del cliente.

---

<h2 align="center"> Características Técnicas de la API </h2>



| Característica | Descripción |
| :--- | :--- |
| **Seguridad** | Login y **Registro** con autenticación JWT (JSON Web Tokens). |
| **Usuarios** | **Roles** y **administración** de **clientes** y **mecánicos** con permisos personalizados. |
| **Vehículos** | **Registro** y gestión de **motocicletas** asociadas a cada **cliente**. |
| **Servicios** | Creación de **órdenes de trabajo** detalladas y **adjuntar repuestos**. |
| **Seguimiento** | **Notificaciones** instantáneas y seguimiento en tiempo real de la **orden de trabajo**. |
| **Stock** | **Inventario** dinámico con **alertas** automáticas de bajo stock. |
| **Evidencias** | Funcionalidad para la subida de fotos y documentos. |
| **Finanzas** | Reportes, cotizaciones, visualización de ventas y pasarela de pagos. |
| **Integración** | API pública diseñada para la conexión con futuras apps móviles. |
| **Organización** | **Agenda de citas** integrada para una mejor planificación del tiempo. |

---

<h2 align="center"> Stack Tecnológico (Backend) </h2>

Las tecnologías elegidas garantizan un backend robusto, escalable y de alto rendimiento.

| Categoría | Tecnologías Clave | Propósito |
| :--- | :--- | :--- |
| **Backend Core** | Node.js · Express.js | Entorno de ejecución y Framework minimalista para la API. |
| **Base de Datos** | PostgreSQL / MySQL | Almacenamiento relacional, robusto y confiable. |
| **Autenticación** | JWT | Generación de tokens seguros para **registro** y login. |
| **Almacenamiento** | AWS S3 / Cloudinary | Almacenamiento escalable de imágenes (evidencias). |
| **Tiempo Real** | Socket.IO | Manejo de **notificaciones** y seguimiento instantáneo. |
| **Pagos** | Stripe / PayPal | Integración de **pasarela de pagos**. |
| **Herramientas** | Git · GitHub · Postman · VSCode | Gestión de código, pruebas y desarrollo. |

---

<h2 align="center"> Instalación y Ejecución Local </h2>

Sigue estos sencillos pasos para levantar el servidor en tu entorno de desarrollo.

```bash
# 1️⃣ Clonar el repositorio del Backend
git clone [https://github.com/MIPablosky/Metodologia_Scrum_Equipo2.git](https://github.com/MIPablosky/Metodologia_Scrum_Equipo2.git)
cd Metodologia_Scrum_Equipo2

# 2️⃣ Instalar las dependencias de Node.js
npm install

# 3️⃣ Configurar variables de entorno
# IMPORTANTE: Crear el archivo .env a partir del ejemplo y completar los datos
cp .env.example .env 

# 4️⃣ Iniciar el servidor en modo desarrollo
npm run dev

# ¡Listo! El servidor estará corriendo en el puerto configurado (ej. http://localhost:3000)

```
| Nombre              | Rol                    |
| :------------------ | :--------------------- |
| Pablo Murillo Lemus | Product Owner          |
| Gabriel Zanches     | Scrum Master           |
| Juan Román Cuero    | Arquitecto de Software |
| Jader Riascos       | Desarrollador Frontend |
| Darío Restrepo      | Desarrollador Backend  |
| Jhoan Murillo       | Tester                 |

