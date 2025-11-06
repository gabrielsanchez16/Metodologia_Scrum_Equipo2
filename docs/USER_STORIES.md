# 👥 Historias de Usuario

## Sistema de Gestión de Talleres

**Product Owner:** Pablo Murillo Lemus  
**Fecha:** Octubre 2025

---

## 📖 ¿Qué es una Historia de Usuario?

Una historia de usuario es una descripción breve y simple de una funcionalidad contada desde la perspectiva del usuario final. Sigue el formato:

> **Como** [tipo de usuario]  
> **Quiero** [realizar una acción]  
> **Para** [obtener un beneficio]

---

## 🎯 Historias de Usuario del Proyecto (23 Historias)

### **Módulo: Autenticación y Seguridad**

#### **HU-001: Login y Registro**

**Como** usuario del sistema  
**Quiero** registrarme e iniciar sesión  
**Para** poder acceder a las funcionalidades del sistema de manera segura

**Criterios de Aceptación:**

- ✅ Formulario de registro con validación de campos
- ✅ Formulario de login con email y contraseña
- ✅ Encriptación de contraseñas
- ✅ Generación de token JWT al autenticarse
- ✅ Redirección al dashboard después del login exitoso

**Prioridad:** Alta | **Estimación:** 5 SP

---

#### **HU-002: Roles y Permisos**

**Como** administrador del sistema  
**Necesito** definir roles y permisos  
**Para** controlar el acceso según el tipo de usuario

**Criterios de Aceptación:**

- ✅ Tabla de roles en la base de datos
- ✅ Asignación de roles al crear usuario (Admin, Mecánico, Cliente)
- ✅ Middleware de autorización por rol
- ✅ Restricción de acceso a rutas según permisos

**Prioridad:** Alta | **Estimación:** 8 SP

---

### **Módulo: Gestión de Usuarios**

#### **HU-003: Registro y Gestión de Clientes**

**Como** administrador  
**Quiero** registrar y gestionar clientes  
**Para** tener su información organizada

**Criterios de Aceptación:**

- ✅ Formulario de registro de cliente (nombre, identificación, teléfono, email)
- ✅ Listado de clientes con búsqueda y filtros
- ✅ Edición de información del cliente
- ✅ Eliminación lógica de clientes
- ✅ Visualización de motocicletas asociadas

**Prioridad:** Alta | **Estimación:** 5 SP

---

#### **HU-004: Registro y Control de Mecánicos**

**Como** administrador  
**Quiero** registrar y controlar mecánicos  
**Para** asignarles órdenes de trabajo

**Criterios de Aceptación:**

- ✅ Formulario de registro de mecánico
- ✅ Listado de mecánicos activos
- ✅ Asignación de mecánicos a órdenes
- ✅ Visualización de órdenes asignadas por mecánico

**Prioridad:** Alta | **Estimación:** 5 SP

---

### **Módulo: Gestión de Vehículos**

#### **HU-005: Administración de Motocicletas**

**Como** cliente  
**Quiero** registrar mis motocicletas  
**Para** que queden asociadas a mi perfil

**Criterios de Aceptación:**

- ✅ Formulario con marca, modelo, año, placa, color
- ✅ Asociación automática al cliente
- ✅ Listado de motocicletas del cliente
- ✅ Edición y eliminación de motocicletas
- ✅ Historial de órdenes por motocicleta

**Prioridad:** Alta | **Estimación:** 5 SP

---

### **Módulo: Órdenes de Trabajo**

#### **HU-006: Registro de Órdenes de Trabajo**

**Como** administrador  
**Debo** registrar órdenes de trabajo  
**Para** dar seguimiento a los servicios solicitados

**Criterios de Aceptación:**

- ✅ Formulario con título, descripción, fecha, cliente, motocicleta, mecánico
- ✅ Campos dinámicos para agregar servicios
- ✅ Cálculo automático de total
- ✅ Estados de orden (creada, en proceso, completada)
- ✅ Notificación al cliente al crear orden

**Prioridad:** Alta | **Estimación:** 8 SP

---

#### **HU-007: Descripción Detallada de Servicios**

**Como** mecánico  
**Quiero** agregar descripciones detalladas de los servicios  
**Para** informar al cliente del trabajo realizado

**Criterios de Aceptación:**

- ✅ Editor de texto enriquecido para descripciones
- ✅ Campo de recomendaciones adicionales
- ✅ Guardado automático de cambios
- ✅ Visualización formateada para el cliente

**Prioridad:** Media-Alta | **Estimación:** 3 SP

---

#### **HU-008: Adjuntar Repuestos y Consumibles**

**Como** mecánico  
**Quiero** adjuntar repuestos y consumibles en la orden  
**Para** llevar un control del material usado

**Criterios de Aceptación:**

- ✅ Selección de repuestos desde inventario
- ✅ Cantidad y precio unitario editable
- ✅ Cálculo automático de subtotales
- ✅ Actualización automática del inventario
- ✅ Descuento opcional por repuesto

**Prioridad:** Media-Alta | **Estimación:** 5 SP

---

#### **HU-009: Seguimiento en Tiempo Real**

**Como** cliente  
**Quiero** ver el estado en tiempo real de mi motocicleta  
**Para** conocer el progreso del servicio

**Criterios de Aceptación:**

- ✅ Dashboard del cliente con órdenes activas
- ✅ Indicador visual del estado (creada, en proceso, completada)
- ✅ Actualización en tiempo real
- ✅ Historial de cambios de estado
- ✅ Enlace público para compartir estado

**Prioridad:** Media-Alta | **Estimación:** 8 SP

---

#### **HU-010: Notificaciones Instantáneas**

**Como** cliente  
**Quiero** recibir notificaciones instantáneas sobre mi orden  
**Para** estar informado

**Criterios de Aceptación:**

- ✅ SMS al crear orden
- ✅ SMS al actualizar estado
- ✅ Email con detalles de la orden
- ✅ Notificaciones en la interfaz web
- ✅ Configuración de preferencias de notificación

**Prioridad:** Media-Alta | **Estimación:** 5 SP

---

### **Módulo: Inventario**

#### **HU-011: Control de Inventario con Alertas**

**Como** administrador  
**Quiero** controlar el inventario con alertas de bajo stock  
**Para** evitar faltantes

**Criterios de Aceptación:**

- ✅ CRUD de productos (repuestos y consumibles)
- ✅ Campo de cantidad mínima por producto
- ✅ Alerta automática cuando stock <= cantidad mínima
- ✅ Email al administrador con productos bajos
- ✅ Dashboard con indicadores de stock crítico

**Prioridad:** Media-Alta | **Estimación:** 8 SP

---

#### **HU-012: Gestión de Repuestos Vinculados**

**Como** mecánico  
**Quiero** gestionar repuestos vinculados a las órdenes  
**Para** facilitar su uso

**Criterios de Aceptación:**

- ✅ Búsqueda rápida de repuestos
- ✅ Filtros por categoría, marca
- ✅ Visualización de stock disponible
- ✅ Histórico de uso por repuesto
- ✅ Repuestos más usados

**Prioridad:** Media | **Estimación:** 5 SP

---

#### **HU-013: Registro de Entradas y Salidas**

**Como** administrador  
**Debo** registrar entradas y salidas de productos  
**Para** mantener actualizado el inventario

**Criterios de Aceptación:**

- ✅ Formulario de entrada (proveedor, fecha, productos, cantidad)
- ✅ Registro automático de salida al usar en orden
- ✅ Historial completo de movimientos
- ✅ Reporte de movimientos por fecha
- ✅ Cálculo de valor de inventario

**Prioridad:** Media | **Estimación:** 5 SP

---

### **Módulo: Evidencias y Documentación**

#### **HU-014: Subida de Evidencias**

**Como** mecánico  
**Quiero** subir evidencias (imágenes, documentos)  
**Para** justificar el trabajo realizado

**Criterios de Aceptación:**

- ✅ Upload múltiple de imágenes
- ✅ Almacenamiento en Cloudinary
- ✅ Galería de evidencias en la orden
- ✅ Eliminación de imágenes
- ✅ Límite de tamaño por archivo (5MB)

**Prioridad:** Media | **Estimación:** 5 SP

---

### **Módulo: Finanzas**

#### **HU-015: Generación de Cotizaciones**

**Como** administrador  
**Quiero** generar cotizaciones  
**Para** ofrecer precios al cliente antes del servicio

**Criterios de Aceptación:**

- ✅ Formulario con servicios y precios
- ✅ Cálculo automático de subtotal, IVA, total
- ✅ Generación de PDF con cotización
- ✅ Envío por email al cliente
- ✅ Conversión de cotización a orden

**Prioridad:** Media | **Estimación:** 5 SP

---

#### **HU-016: Visualización de Ventas Mensuales**

**Como** administrador  
**Quiero** visualizar ventas mensuales  
**Para** analizar el rendimiento

**Criterios de Aceptación:**

- ✅ Dashboard con gráficos de ventas
- ✅ Filtro por mes/año
- ✅ Comparación con mes anterior
- ✅ Top servicios más vendidos
- ✅ Exportación a Excel

**Prioridad:** Media | **Estimación:** 5 SP

---

#### **HU-017: Filtros y Reportes Avanzados**

**Como** administrador  
**Quiero** aplicar filtros y reportes por fechas, clientes o servicios  
**Para** obtener información detallada

**Criterios de Aceptación:**

- ✅ Filtros combinables (fecha, cliente, servicio, mecánico)
- ✅ Exportación a PDF
- ✅ Exportación a Excel
- ✅ Guardado de filtros favoritos
- ✅ Gráficos dinámicos

**Prioridad:** Media | **Estimación:** 8 SP

---

### **Módulo: Suscripciones**

#### **HU-018: Planes de Suscripción**

**Como** cliente (taller)  
**Quiero** tener planes de suscripción  
**Para** acceder a beneficios adicionales

**Criterios de Aceptación:**

- ✅ 3 planes: Básico, Premium, Avanzado
- ✅ Diferentes precios y características
- ✅ Fecha de vencimiento de suscripción
- ✅ Desactivación automática al vencer
- ✅ Renovación manual/automática

**Prioridad:** Media | **Estimación:** 8 SP

---

#### **HU-019: Beneficios según Plan**

**Como** cliente (taller) suscrito  
**Debo** recibir beneficios según mi plan  
**Para** obtener mayor valor

**Criterios de Aceptación:**

- ✅ Restricción de funciones por plan
- ✅ Publicidad destacada para plan Avanzado
- ✅ Recomendaciones en página principal
- ✅ Badge de plan en perfil del taller
- ✅ Límites según plan (órdenes, clientes, etc.)

**Prioridad:** Media | **Estimación:** 5 SP

---

#### **HU-020: Reportes Financieros Avanzados**

**Como** administrador  
**Quiero** generar reportes financieros avanzados  
**Para** analizar ingresos y egresos

**Criterios de Aceptación:**

- ✅ Reporte de ingresos por periodo
- ✅ Reporte de egresos (compra de repuestos)
- ✅ Balance general
- ✅ Proyección de ganancias
- ✅ Comparación anual

**Prioridad:** Baja | **Estimación:** 8 SP

---

#### **HU-021: Pasarela de Pagos**

**Como** cliente (taller)  
**Quiero** pagar suscripciones en línea mediante una pasarela de pagos  
**Para** mayor comodidad

**Criterios de Aceptación:**

- ✅ Integración con Stripe o PayPal
- ✅ Procesamiento seguro de pagos
- ✅ Confirmación por email
- ✅ Historial de pagos
- ✅ Factura electrónica

**Prioridad:** Baja | **Estimación:** 13 SP

---

### **Módulo: Integraciones**

#### **HU-022: API Pública**

**Como** desarrollador  
**Quiero** que exista una API pública  
**Para** conectar apps móviles

**Criterios de Aceptación:**

- ✅ Documentación Swagger/OpenAPI
- ✅ Autenticación con API Key
- ✅ Rate limiting
- ✅ Endpoints versionados
- ✅ Webhooks para eventos

**Prioridad:** Baja | **Estimación:** 13 SP

---

#### **HU-023: Agenda de Citas**

**Como** cliente  
**Quiero** agendar citas  
**Para** organizar mejor mis visitas al taller

**Criterios de Aceptación:**

- ✅ Calendario interactivo
- ✅ Selección de fecha/hora disponible
- ✅ Confirmación de cita
- ✅ Recordatorio 24h antes
- ✅ Cancelación de cita

**Prioridad:** Baja | **Estimación:** 8 SP

---

## 📊 Resumen de Historias de Usuario

| Módulo                    | Cantidad de Historias | Story Points |
| ------------------------- | --------------------- | ------------ |
| Autenticación y Seguridad | 2                     | 13 SP        |
| Gestión de Usuarios       | 2                     | 10 SP        |
| Gestión de Vehículos      | 1                     | 5 SP         |
| Órdenes de Trabajo        | 5                     | 29 SP        |
| Inventario                | 3                     | 18 SP        |
| Evidencias                | 1                     | 5 SP         |
| Finanzas                  | 4                     | 26 SP        |
| Suscripciones             | 2                     | 13 SP        |
| Integraciones             | 2                     | 21 SP        |
| **TOTAL**                 | **23**                | **~145 SP**  |

---

<div align="center">

**Proyecto Académico - Metodología Scrum**  
**Electiva Profesional 2 - 2025**

[Ver Product Backlog](PRODUCT_BACKLOG.md) | [Ver Sprint Backlog](SPRINT_BACKLOG.md)

</div>
