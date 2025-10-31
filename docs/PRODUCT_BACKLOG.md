# 📋 Product Backlog

## Sistema de Gestión de Talleres

**Product Owner:** Pablo Murillo Lemus  
**Scrum Master:** Gabriel Alejandro Sánchez Alarcón  
**Fecha de creación:** Octubre 2025

---

## 🎯 Objetivo del Producto

Desarrollar un sistema web completo (Fullstack) que permita a los talleres mecánicos optimizar la administración de sus procesos operativos, gestionando de manera eficiente clientes, mecánicos, motocicletas, órdenes de trabajo, inventarios, notificaciones y pagos.

---

## 📊 Lista de Requisitos Priorizados

El Product Backlog contiene **23 requisitos funcionales** ordenados por prioridad de valor de negocio. La priorización se realizó en conjunto con el Product Owner durante la reunión de Sprint Planning inicial.

### **Prioridad Alta - Funcionalidades Core (MVP)**

| #   | Requisito                                                 | Descripción                                                        | Prioridad | Estimación |
| --- | --------------------------------------------------------- | ------------------------------------------------------------------ | --------- | ---------- |
| 1   | **Login y registro**                                      | Sistema de autenticación para acceso seguro al sistema             | Alta      | 5 SP       |
| 2   | **Roles y permisos por usuario (admin)**                  | Control de acceso según tipo de usuario (admin, mecánico, cliente) | Alta      | 8 SP       |
| 3   | **Registro y gestión de clientes**                        | CRUD completo para administrar información de clientes             | Alta      | 5 SP       |
| 4   | **Registro y control de mecánicos**                       | CRUD para gestionar mecánicos del taller                           | Alta      | 5 SP       |
| 5   | **Registro y administración de motocicletas de clientes** | Asociar vehículos a clientes con información detallada             | Alta      | 5 SP       |
| 6   | **Registro de órdenes de trabajo para clientes**          | Crear y gestionar órdenes de servicio                              | Alta      | 8 SP       |

### **Prioridad Media-Alta - Funcionalidades Operativas**

| #   | Requisito                                                   | Descripción                                           | Prioridad  | Estimación |
| --- | ----------------------------------------------------------- | ----------------------------------------------------- | ---------- | ---------- |
| 7   | **Descripción detallada de servicios**                      | Permitir al mecánico documentar el trabajo realizado  | Media-Alta | 3 SP       |
| 8   | **Adjuntar repuestos y consumibles en la orden**            | Vincular productos utilizados a cada orden de trabajo | Media-Alta | 5 SP       |
| 9   | **Seguimiento en tiempo real del estado de la motocicleta** | Dashboard para que el cliente vea el progreso         | Media-Alta | 8 SP       |
| 10  | **Notificaciones instantáneas para clientes**               | Alertas automáticas sobre cambios en la orden         | Media-Alta | 5 SP       |
| 11  | **Control de inventario con alertas de bajo stock**         | Sistema de gestión de repuestos con notificaciones    | Media-Alta | 8 SP       |
| 12  | **Gestión de repuestos vinculados a órdenes**               | Asociar y controlar productos usados en servicios     | Media      | 5 SP       |
| 13  | **Registro de entradas y salidas de productos**             | Control de movimientos de inventario                  | Media      | 5 SP       |
| 14  | **Subida de evidencias (imágenes, documentos, etc.)**       | Permitir adjuntar fotos del trabajo realizado         | Media      | 5 SP       |

### **Prioridad Media - Funcionalidades de Gestión**

| #   | Requisito                                                          | Descripción                                            | Prioridad | Estimación |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------ | --------- | ---------- |
| 15  | **Generación de cotizaciones**                                     | Crear presupuestos antes de realizar el servicio       | Media     | 5 SP       |
| 16  | **Visualización de ventas mensuales**                              | Dashboard con métricas de ventas                       | Media     | 5 SP       |
| 17  | **Filtros y reportes por fechas, clientes o servicios**            | Sistema de reportes personalizables                    | Media     | 8 SP       |
| 18  | **Planes de suscripción (Básico, Premium, Avanzado)**              | Sistema de membresías para talleres                    | Media     | 8 SP       |
| 19  | **Beneficios según plan (funciones, publicidad, recomendaciones)** | Funcionalidades diferenciadas por nivel de suscripción | Media     | 5 SP       |

### **Prioridad Baja - Funcionalidades Avanzadas**

| #   | Requisito                                | Descripción                                  | Prioridad | Estimación |
| --- | ---------------------------------------- | -------------------------------------------- | --------- | ---------- |
| 20  | **Reportes financieros avanzados**       | Análisis detallado de ingresos y egresos     | Baja      | 8 SP       |
| 21  | **Pasarela de pagos para suscripciones** | Integración con Stripe/PayPal                | Baja      | 13 SP      |
| 22  | **API pública para apps móviles**        | Endpoints REST documentados para integración | Baja      | 13 SP      |
| 23  | **Agenda de citas para clientes**        | Sistema de programación de servicios         | Baja      | 8 SP       |

---

## 📈 Métricas del Product Backlog

| Métrica                            | Valor        |
| ---------------------------------- | ------------ |
| **Total de requisitos**            | 23           |
| **Prioridad Alta**                 | 6 requisitos |
| **Prioridad Media-Alta**           | 8 requisitos |
| **Prioridad Media**                | 5 requisitos |
| **Prioridad Baja**                 | 4 requisitos |
| **Story Points totales estimados** | ~145 SP      |

---

## 🔄 Criterios de Priorización

Los requisitos fueron priorizados considerando:

1. **Valor de Negocio:** Impacto directo en la funcionalidad core del sistema
2. **Dependencias Técnicas:** Requisitos base necesarios para otros
3. **Complejidad:** Estimación de esfuerzo y riesgo
4. **Feedback del Product Owner:** Necesidades reales de los talleres

---

## 📝 Notas del Product Owner

> "El enfoque inicial debe estar en el MVP (Minimum Viable Product) que permita a un taller gestionar clientes, mecánicos, motocicletas y órdenes de trabajo. Las funcionalidades de inventario y notificaciones son críticas para la operación diaria. Las features de suscripciones y pagos pueden implementarse en fases posteriores."
>
> — **Pablo Murillo Lemus**, Product Owner

---

## 🔄 Refinamiento del Backlog

Este Product Backlog es un documento vivo que se actualiza constantemente:

- **Backlog Refinement:** Sesiones semanales para ajustar prioridades
- **Estimaciones:** Revisadas en cada Sprint Planning
- **Nuevos requisitos:** Pueden agregarse según necesidades del negocio
- **Requisitos obsoletos:** Se marcan y documentan si pierden relevancia

---

## 📅 Historial de Cambios

| Fecha    | Cambio                                   | Responsable                       |
| -------- | ---------------------------------------- | --------------------------------- |
| Oct 2025 | Creación inicial del Product Backlog     | Pablo Murillo Lemus               |
| Oct 2025 | Priorización con el equipo de desarrollo | Gabriel Alejandro Sánchez Alarcón |
| Oct 2025 | Estimaciones finalizadas                 | Equipo Scrum                      |

---

<div align="center">

**Proyecto Académico - Metodología Scrum**  
**Electiva Profesional 2 - 2025**

[Ver Historias de Usuario](USER_STORIES.md) | [Ver Sprint Backlog](SPRINT_BACKLOG.md)

</div>
