# 📝 Sprint Backlog

## Sistema de Gestión de Talleres

**Scrum Master:** Gabriel Alejandro Sánchez Alarcón  
**Periodo:** 4 Sprints de 1 semana cada uno  
**Fecha:** Octubre 2025

---

## 🎯 ¿Qué es el Sprint Backlog?

El Sprint Backlog es el conjunto de elementos del Product Backlog seleccionados para el Sprint, más un plan para entregar el incremento y conseguir el objetivo del Sprint.

---

## 👥 Asignación de Tareas por Rol

### **Jader Riascos - Desarrollador Frontend**

**Responsabilidad:** Interfaz de usuario, UX/UI, componentes React

**Tareas asignadas:**

- HU-001: Login y Registro (Frontend)
- HU-003: Registro y Gestión de Clientes (Frontend)
- HU-004: Registro y Control de Mecánicos (Frontend)
- HU-005: Administración de Motocicletas (Frontend)
- HU-006: Registro de Órdenes de Trabajo (Frontend)

---

### **Darío Restrepo - Desarrollador Backend**

**Responsabilidad:** API REST, base de datos, lógica de negocio

**Tareas asignadas:**

- HU-001: Login y Registro (Backend)
- HU-002: Roles y Permisos
- HU-003: Registro y Gestión de Clientes (Backend)
- HU-004: Registro y Control de Mecánicos (Backend)
- HU-005: Administración de Motocicletas (Backend)
- HU-006: Registro de Órdenes de Trabajo (Backend)

---

### **Juan Román Cuero - Arquitecto de Software**

**Responsabilidad:** Arquitectura, base de datos, integraciones

**Tareas asignadas:**

- HU-012: Registro de Entradas y Salidas de Productos
- HU-013: Subida de Evidencias
- HU-014: Generación de Cotizaciones
- HU-015: Visualización de Ventas Mensuales
- HU-017: Planes de Suscripción

---

## 📅 Distribución de Sprints

### **SPRINT 1 - Semana 1**

**Objetivo del Sprint:** Implementar sistema de autenticación, roles y gestión básica de usuarios

**Duración:** 1 semana  
**Story Points comprometidos:** 36 SP

| ID     | Historia de Usuario             | Responsable   | Tareas                                                                                                                      | Estado        |
| ------ | ------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------- |
| HU-001 | Login y Registro                | Jader + Darío | • Diseñar formulario de inicio de sesión y registro (Frontend)<br>• Implementar lógica de autenticación con MySQL (Backend) | ✅ COMPLETADO |
| HU-002 | Roles y Permisos                | Darío         | • Crear tabla de roles y permisos en la BD<br>• Implementar middleware de autorización                                      | ✅ COMPLETADO |
| HU-003 | Registro y Gestión de Clientes  | Jader + Darío | • Crear interfaz de registro y visualización de clientes (Frontend)<br>• Programar endpoints CRUD para clientes (Backend)   | ✅ COMPLETADO |
| HU-004 | Registro y Control de Mecánicos | Jader + Darío | • Diseñar formulario de mecánicos (Frontend)<br>• Crear controladores para CRUD de mecánicos (Backend)                      | ✅ COMPLETADO |

**Reuniones:**

- 📅 Sprint Planning: Definición de historias y asignación de tareas
- 📅 Daily Scrum: 15 minutos diarios para sincronización
- 📅 Sprint Review: Demostración de funcionalidades completadas
- 📅 Sprint Retrospective: Lecciones aprendidas y mejoras

---

### **SPRINT 2 - Semana 2**

**Objetivo del Sprint:** Implementar gestión de motocicletas y órdenes de trabajo

**Duración:** 1 semana  
**Story Points comprometidos:** 13 SP

| ID     | Historia de Usuario            | Responsable   | Tareas                                                                                                                                                                     | Estado        |
| ------ | ------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| HU-005 | Administración de Motocicletas | Jader + Darío | • Crear interfaz de registro de motocicletas y visualización asociada al cliente (Frontend)<br>• Crear tabla y relaciones entre clientes y motocicletas en la BD (Backend) | ✅ COMPLETADO |
| HU-006 | Registro de Órdenes de Trabajo | Jader + Darío | • Diseñar formulario de creación de órdenes con campos dinámicos (Frontend)<br>• Implementar lógica de creación y actualización de órdenes (Backend)                       | ✅ COMPLETADO |

**Reuniones:**

- 📅 Sprint Planning: Refinamiento y planificación
- 📅 Daily Scrum: Revisión de avances diarios
- 📅 Sprint Review: Validación con Product Owner
- 📅 Sprint Retrospective: Análisis de velocidad del equipo

---

### **SPRINT 3 - Semana 3**

**Objetivo del Sprint:** Implementar funcionalidades de inventario, evidencias y cotizaciones

**Duración:** 1 semana  
**Story Points comprometidos:** 15 SP

| ID     | Historia de Usuario            | Responsable | Tareas                                                                                                               | Estado         |
| ------ | ------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------- | -------------- |
| HU-012 | Registro de Entradas y Salidas | Juan        | • Definir estructura de BD para movimientos de inventario<br>• Crear endpoints para registro de movimientos          | ✅ COMPLETADO  |
| HU-013 | Subida de Evidencias           | Juan        | • Establecer flujo de carga y almacenamiento seguro de archivos en Cloudinary<br>• Implementar controlador de upload | ✅ COMPLETADO  |
| HU-014 | Generación de Cotizaciones     | Juan        | • Crear lógica de cálculo automático de precios y formato de cotización<br>• Implementar generación de PDF           | 🔄 EN PROGRESO |

**Reuniones:**

- 📅 Sprint Planning: Priorización de funcionalidades críticas
- 📅 Daily Scrum: Identificación de impedimentos
- 📅 Sprint Review: Demostración de evidencias y cotizaciones
- 📅 Sprint Retrospective: Mejoras en la comunicación

---

### **SPRINT 4 - Semana 4**

**Objetivo del Sprint:** Implementar reportes financieros y sistema de suscripciones

**Duración:** 1 semana  
**Story Points comprometidos:** 13 SP

| ID     | Historia de Usuario               | Responsable | Tareas                                                                                                        | Estado         |
| ------ | --------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- | -------------- |
| HU-015 | Visualización de Ventas Mensuales | Juan        | • Diseñar consultas SQL y endpoints para estadísticas de ventas<br>• Implementar dashboard con gráficos       | 🔄 EN PROGRESO |
| HU-017 | Planes de Suscripción             | Juan        | • Diseñar estructura de planes y condiciones asociadas<br>• Implementar lógica de validación de suscripciones | 📋 POR HACER   |

**Reuniones:**

- 📅 Sprint Planning: Refinamiento de historias complejas
- 📅 Daily Scrum: Coordinación entre frontend y backend
- 📅 Sprint Review: Presentación al Product Owner
- 📅 Sprint Retrospective: Celebración de logros y cierre del proyecto

---

## 📊 Tablero Kanban - Vista General

```
┌─────────────┬──────────────┬──────────────┬─────────────┐
│  POR HACER  │ EN PROGRESO  │ EN REVISIÓN  │ COMPLETADO  │
├─────────────┼──────────────┼──────────────┼─────────────┤
│  HU-017     │   HU-014     │              │   HU-001    │
│             │   HU-015     │              │   HU-002    │
│             │              │              │   HU-003    │
│             │              │              │   HU-004    │
│             │              │              │   HU-005    │
│             │              │              │   HU-006    │
│             │              │              │   HU-012    │
│             │              │              │   HU-013    │
└─────────────┴──────────────┴──────────────┴─────────────┘
```

---

## 🎯 Definition of Done (DoD)

Una historia de usuario se considera **COMPLETADA** cuando:

### **Criterios Técnicos:**

- ✅ Código implementado y funcional
- ✅ Código revisado por al menos un compañero
- ✅ Sin errores de compilación o linting
- ✅ Documentación técnica actualizada
- ✅ Comentarios en código complejo

### **Criterios de Calidad:**

- ✅ Todos los criterios de aceptación cumplidos
- ✅ Pruebas manuales realizadas
- ✅ Funciona en diferentes navegadores (si es Frontend)
- ✅ Responsive design implementado (si es Frontend)
- ✅ Validaciones de seguridad implementadas

### **Criterios de Integración:**

- ✅ Código mergeado a la rama principal
- ✅ Sin conflictos con otras funcionalidades
- ✅ Base de datos actualizada (migraciones ejecutadas)
- ✅ Variables de entorno documentadas

### **Criterios de Presentación:**

- ✅ Demostrado en Sprint Review
- ✅ Aprobado por Product Owner
- ✅ Feedback del equipo incorporado

---

## 📈 Métricas del Sprint

### **Velocidad del Equipo:**

| Sprint       | Story Points Comprometidos | Story Points Completados | Velocidad      |
| ------------ | -------------------------- | ------------------------ | -------------- |
| Sprint 1     | 36 SP                      | 36 SP                    | 100%           |
| Sprint 2     | 13 SP                      | 13 SP                    | 100%           |
| Sprint 3     | 15 SP                      | 10 SP                    | 67%            |
| Sprint 4     | 13 SP                      | 8 SP (estimado)          | 62% (estimado) |
| **Promedio** | **19.25 SP**               | **16.75 SP**             | **82%**        |

### **Burndown Chart (Conceptual):**

```
Story Points
│
│ ╲
│   ╲
│     ╲
│       ╲___
│           ╲___
│               ╲___
└────────────────────────► Días del Sprint
```

---

## 🔄 Impedimentos y Resoluciones

| Sprint   | Impedimento                    | Solución                          | Responsable   |
| -------- | ------------------------------ | --------------------------------- | ------------- |
| Sprint 1 | Configuración inicial de la BD | Sesión de pair programming        | Darío + Juan  |
| Sprint 2 | Integración Frontend-Backend   | Definir contratos de API claros   | Jader + Darío |
| Sprint 3 | Implementación de Cloudinary   | Revisión de documentación oficial | Juan          |
| Sprint 4 | Complejidad en reportes SQL    | Consulta con mentor/profesor      | Juan          |

---

## 💡 Lecciones Aprendidas

### **¿Qué salió bien?**

- ✅ Comunicación diaria efectiva
- ✅ Asignación clara de responsabilidades
- ✅ Uso de Git para control de versiones
- ✅ Documentación continua del proceso

### **¿Qué se puede mejorar?**

- ⚠️ Estimaciones más precisas (fueron optimistas)
- ⚠️ Más tiempo para testing
- ⚠️ Mejor definición de criterios de aceptación desde el inicio
- ⚠️ Considerar tiempo para refactorización

### **Acciones para el próximo proyecto:**

- 📝 Buffer de 20% en las estimaciones
- 📝 Tests automatizados desde el inicio
- 📝 Code reviews obligatorios antes de merge
- 📝 Retrospectivas más frecuentes (mid-sprint)

---

<div align="center">

**Proyecto Académico - Metodología Scrum**  
**Electiva Profesional 2 - 2025**

[Ver Product Backlog](PRODUCT_BACKLOG.md) | [Ver Historias de Usuario](USER_STORIES.md) | [Ver Sprints Detallados](SPRINTS.md)

</div>
