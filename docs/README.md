# 📚 Documentación de Metodología Scrum

## Sistema de Gestión de Talleres - Equipo 2

Esta carpeta contiene toda la documentación del proceso de aplicación de la metodología Scrum en el proyecto.

---

## 📋 Índice de Documentos

### **🎯 Artefactos de Scrum**

| Documento           | Descripción                                              | Enlace                              |
| ------------------- | -------------------------------------------------------- | ----------------------------------- |
| **Product Backlog** | Lista completa de 23 requisitos priorizados del sistema  | [Ver documento](PRODUCT_BACKLOG.md) |
| **User Stories**    | 23 historias de usuario con criterios de aceptación      | [Ver documento](USER_STORIES.md)    |
| **Sprint Backlog**  | Asignación de tareas por rol y distribución en 4 sprints | [Ver documento](SPRINT_BACKLOG.md)  |

### **🔄 Ceremonias de Scrum**

| Documento            | Descripción                                                            | Enlace                               |
| -------------------- | ---------------------------------------------------------------------- | ------------------------------------ |
| **Scrum Ceremonies** | Detalle de Sprint Planning, Daily Scrum, Sprint Review y Retrospective | [Ver documento](SCRUM_CEREMONIES.md) |

---

## 👥 Equipo Scrum

| Nombre                                 | Rol                    | Responsabilidad                                    |
| -------------------------------------- | ---------------------- | -------------------------------------------------- |
| **Pablo Murillo Lemus**                | Product Owner          | Definir requisitos y priorizar el Product Backlog  |
| **Gabriel Alejandro Sánchez Alarcón**  | Scrum Master           | Facilitar el proceso Scrum y eliminar impedimentos |
| **Juan Román Cuero Ordoñez**           | Arquitecto de Software | Diseño de arquitectura y decisiones técnicas       |
| **Jhon Jader Riascos Angulo**          | Desarrollador Frontend | Desarrollo de interfaz React y componentes         |
| **Darío Restrepo Landazury**           | Desarrollador Backend  | Desarrollo de API REST y lógica de negocio         |
| **Johan Alexander Murillo Sinisterra** | Tester                 | Testing funcional y documentación de bugs          |

---

## 🎯 Resumen del Proyecto

### **Objetivo:**

Desarrollar un sistema web completo (Fullstack) para la gestión integral de talleres mecánicos, optimizando procesos operativos de clientes, mecánicos, motocicletas, órdenes de trabajo, inventarios y pagos.

### **Metodología:**

**Scrum** - Framework ágil con sprints de 1 semana

### **Duración:**

4 Sprints (4 semanas)

### **Story Points:**

~145 SP totales comprometidos

---

## 📊 Métricas del Proyecto

| Métrica                      | Valor           |
| ---------------------------- | --------------- |
| **Total de Requisitos**      | 23              |
| **Historias de Usuario**     | 23              |
| **Sprints Ejecutados**       | 4               |
| **Story Points Completados** | ~67 SP          |
| **Velocidad Promedio**       | 16.75 SP/Sprint |
| **Tasa de Completitud**      | 82%             |

---

## 🏆 Logros del Equipo

### **Sprint 1:**

- ✅ Sistema de autenticación completo
- ✅ Gestión de roles y permisos
- ✅ CRUD de clientes y mecánicos
- **Velocidad:** 100%

### **Sprint 2:**

- ✅ Gestión de motocicletas
- ✅ Sistema de órdenes de trabajo
- **Velocidad:** 100%

### **Sprint 3:**

- ✅ Control de inventario
- ✅ Sistema de evidencias con Cloudinary
- ⚠️ Generación de cotizaciones (parcial)
- **Velocidad:** 67%

### **Sprint 4:**

- ✅ Reportes de ventas (parcial)
- ⚠️ Sistema de suscripciones (en progreso)
- **Velocidad:** 62%

---

## 📈 Diagrama de Proceso Scrum Aplicado

```
┌─────────────────────────────────────────────────────────────┐
│                     PRODUCT BACKLOG                         │
│  (23 Requisitos Priorizados por Product Owner)             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              SPRINT PLANNING MEETING                        │
│  • Selección de historias para el Sprint                   │
│  • Definición del Sprint Goal                              │
│  • Creación del Sprint Backlog                             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    SPRINT (1 semana)                        │
│                                                             │
│  ┌─────────────────────────────────────────────┐           │
│  │     DAILY SCRUM (15 min todos los días)     │           │
│  │  • ¿Qué hice ayer?                          │           │
│  │  • ¿Qué haré hoy?                           │           │
│  │  • ¿Tengo impedimentos?                     │           │
│  └─────────────────────────────────────────────┘           │
│                                                             │
│  Desarrollo → Testing → Integración → Demo Ready           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   SPRINT REVIEW                             │
│  • Demostración del incremento                             │
│  • Feedback de stakeholders                                │
│  • Actualización del Product Backlog                       │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│               SPRINT RETROSPECTIVE                          │
│  • ¿Qué salió bien?                                        │
│  • ¿Qué se puede mejorar?                                  │
│  • Acciones de mejora para el próximo Sprint              │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
               [Siguiente Sprint]
```

---

## 💡 Lecciones Aprendidas

### **Fortalezas de Scrum aplicadas:**

1. ✅ **Transparencia:** Todos sabían qué, quién y cuándo
2. ✅ **Inspección:** Daily Scrums detectaron problemas temprano
3. ✅ **Adaptación:** Retrospectives mejoraron el proceso continuamente
4. ✅ **Enfoque:** Sprint Goals mantuvieron al equipo alineado
5. ✅ **Entregas incrementales:** Valor entregado cada semana

### **Desafíos enfrentados:**

1. ⚠️ Estimaciones iniciales optimistas
2. ⚠️ Dependencias técnicas no identificadas temprano
3. ⚠️ Tiempo limitado para refactorización
4. ⚠️ Complejidad de algunas historias subestimada

### **Mejoras implementadas:**

1. 📈 Buffer del 20% en estimaciones (Sprint 2 en adelante)
2. 📈 Code reviews diarias en lugar de al final
3. 📈 Pair programming 2 veces por semana
4. 📈 Diagrama de dependencias en Sprint Planning

---

## 📖 Referencias y Recursos

### **Scrum Guide:**

- [Scrum Guide Oficial (español)](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Spanish-Latin-South-American.pdf)

### **Herramientas utilizadas:**

- **Tablero Kanban:** Miro
- **Gestión de código:** GitHub
- **Comunicación:** WhatsApp/Discord
- **Documentación:** Markdown

### **Plantillas:**

- [Plantilla de User Story](templates/user_story_template.md)
- [Plantilla de Sprint Planning](templates/sprint_planning_template.md)
- [Plantilla de Retrospective](templates/retrospective_template.md)

---

## 🎓 Contexto Académico

Este proyecto fue desarrollado como parte de la materia **Electiva Profesional 2** con el objetivo de aplicar la metodología Scrum en un proyecto de software real.

**Institución:** [Nombre de la Universidad/Institución]  
**Periodo:** Octubre 2025  
**Profesor/Mentor:** [Nombre del profesor]

---

## 📞 Contacto

Para preguntas sobre la documentación o el proceso Scrum aplicado:

- **Scrum Master:** Gabriel Alejandro Sánchez Alarcón
- **Email:** gsanchezalarcon52@gmail.com
- **Repositorio:** [GitHub](https://github.com/gabrielsanchez16/Metodologia_Scrum_Equipo2)

---

<div align="center">

### 🌟 **¡Gracias por revisar nuestra documentación!**

**Desarrollado con ❤️ usando Metodología Scrum**

[⬆️ Volver arriba](#-documentación-de-metodología-scrum)

</div>
