# 🔄 Ceremonias Scrum

## Sistema de Gestión de Talleres

**Scrum Master:** Gabriel Alejandro Sánchez Alarcón  
**Product Owner:** Pablo Murillo Lemus  
**Periodo:** Octubre 2025

---

## 📋 ¿Qué son las Ceremonias Scrum?

Las ceremonias (o eventos) de Scrum son reuniones estructuradas que permiten la inspección, adaptación y transparencia del proceso de desarrollo. Son fundamentales para el éxito del framework.

---

## 🎯 Ceremonias Implementadas en el Proyecto

### **1. Sprint Planning Meeting** 📅

**Objetivo:** Planificar el trabajo que se realizará durante el Sprint

**Participantes:**

- Product Owner (Pablo Murillo Lemus)
- Scrum Master (Gabriel Alejandro Sánchez Alarcón)
- Development Team (Jader, Darío, Juan, Johan)

**Duración:** 2-4 horas (para Sprints de 1 semana)

**Actividades:**

1. **Part 1: ¿Qué se va a hacer?**

   - Product Owner presenta los items priorizados del Product Backlog
   - Equipo hace preguntas y clarifica requisitos
   - Se define el Sprint Goal (Objetivo del Sprint)
   - Equipo selecciona historias que puede completar en el Sprint

2. **Part 2: ¿Cómo se va a hacer?**
   - Equipo descompone las historias en tareas técnicas
   - Se asignan responsabilidades
   - Se estiman esfuerzos
   - Se crea el Sprint Backlog

**Resultado:**

- ✅ Sprint Goal definido
- ✅ Sprint Backlog creado con tareas asignadas
- ✅ Compromiso del equipo para el Sprint

**Ejemplo - Sprint Planning del Sprint 1:**

```
Sprint Goal: "Implementar sistema de autenticación y gestión básica de usuarios"

Historias seleccionadas:
- HU-001: Login y Registro (5 SP)
- HU-002: Roles y Permisos (8 SP)
- HU-003: Registro y Gestión de Clientes (5 SP)
- HU-004: Registro y Control de Mecánicos (5 SP)

Total comprometido: 36 SP
```

---

### **2. Daily Scrum (Stand-up)** 🌅

**Objetivo:** Sincronizar el trabajo del equipo y planificar las próximas 24 horas

**Participantes:**

- Development Team (obligatorio)
- Scrum Master (facilitador)
- Product Owner (opcional)

**Duración:** Máximo 15 minutos

**Formato:** Cada miembro responde 3 preguntas:

1. ¿Qué hice ayer?
2. ¿Qué haré hoy?
3. ¿Tengo algún impedimento?

**Horario:** Mismo lugar y hora todos los días (ej. 9:00 AM)

**Ejemplo - Daily Scrum típico:**

```
Jader (Frontend):
- Ayer: Diseñé el formulario de login
- Hoy: Implementaré validaciones y conectaré con la API
- Impedimentos: Ninguno

Darío (Backend):
- Ayer: Implementé endpoints de autenticación
- Hoy: Crearé tabla de roles en la BD
- Impedimentos: Necesito clarificación sobre permisos específicos

Juan (Arquitecto):
- Ayer: Definí estructura de BD para inventario
- Hoy: Trabajaré en integración de Cloudinary
- Impedimentos: Ninguno
```

**Notas:**

- ⏰ Timeboxing estricto (15 minutos)
- 🚫 No es reunión de reporte al Scrum Master
- 💬 Discusiones profundas se llevan fuera del Daily
- 📊 Se actualiza el tablero Kanban

---

### **3. Sprint Review** 🎬

**Objetivo:** Inspeccionar el incremento y adaptar el Product Backlog si es necesario

**Participantes:**

- Scrum Team completo
- Stakeholders invitados
- Product Owner (obligatorio)

**Duración:** 1-2 horas (para Sprints de 1 semana)

**Actividades:**

1. Product Owner explica qué se completó y qué no
2. Development Team demuestra el incremento funcionando
3. Stakeholders hacen preguntas y dan feedback
4. Product Owner presenta el Product Backlog actualizado
5. Se discuten próximos pasos y prioridades

**Resultado:**

- ✅ Incremento revisado y potencialmente entregable
- ✅ Feedback capturado
- ✅ Product Backlog actualizado

**Ejemplo - Sprint Review del Sprint 1:**

```
Demostración:
✅ Sistema de login funcionando
✅ Registro de nuevos usuarios
✅ Asignación de roles (Admin, Mecánico, Cliente)
✅ CRUD de clientes implementado
✅ CRUD de mecánicos implementado

Feedback del Product Owner:
- "Excelente trabajo, todas las funcionalidades core están listas"
- "Sugerencia: Agregar campo de foto de perfil en futuro sprint"
- "El diseño de la interfaz es intuitivo"

Métricas:
- Story Points comprometidos: 36 SP
- Story Points completados: 36 SP
- Velocidad: 100%
```

---

### **4. Sprint Retrospective** 🔍

**Objetivo:** Inspeccionar cómo fue el Sprint y crear un plan de mejoras

**Participantes:**

- Scrum Team (Development Team + Scrum Master + Product Owner)

**Duración:** 45 minutos - 1.5 horas (para Sprints de 1 semana)

**Formato:** Se discute:

1. ¿Qué salió bien en el Sprint?
2. ¿Qué podría mejorarse?
3. ¿Qué acciones tomaremos en el próximo Sprint?

**Técnicas utilizadas:**

- Start-Stop-Continue
- Mad-Sad-Glad
- Speedboat (anclas e islas)

**Resultado:**

- ✅ Lista de mejoras identificadas
- ✅ Acciones concretas para el siguiente Sprint
- ✅ Compromiso del equipo para implementar mejoras

**Ejemplo - Sprint Retrospective del Sprint 1:**

```
😊 ¿QUÉ SALIÓ BIEN?
- Comunicación diaria fue efectiva
- Asignación de tareas clara desde el inicio
- Pair programming ayudó mucho
- Todos cumplimos nuestros compromisos

⚠️ ¿QUÉ PODRÍA MEJORAR?
- Las estimaciones fueron muy justas, casi no hubo buffer
- Faltó tiempo para documentar código
- Algunas dependencias entre tareas no se identificaron temprano
- Code reviews al final del sprint fueron apresuradas

🎯 ACCIONES PARA EL PRÓXIMO SPRINT:
1. Agregar 20% de buffer en estimaciones
2. Documentar código al momento de escribirlo
3. Crear diagrama de dependencias en Planning
4. Code reviews diarias, no solo al final
5. Sesión de pair programming 2 veces por semana
```

---

## 📊 Resumen de Ceremonias por Sprint

### **Sprint 1:**

| Ceremonia       | Fecha    | Duración   | Participantes   | Notas                             |
| --------------- | -------- | ---------- | --------------- | --------------------------------- |
| Sprint Planning | Día 1    | 3 horas    | Equipo completo | Se definieron 4 historias (36 SP) |
| Daily Scrum     | Días 1-5 | 15 min/día | Dev Team        | 5 dailies realizadas              |
| Sprint Review   | Día 5    | 1.5 horas  | Equipo + PO     | Demo exitosa, 100% completado     |
| Retrospective   | Día 5    | 1 hora     | Scrum Team      | 5 mejoras identificadas           |

---

### **Sprint 2:**

| Ceremonia       | Fecha    | Duración   | Participantes   | Notas                                    |
| --------------- | -------- | ---------- | --------------- | ---------------------------------------- |
| Sprint Planning | Día 1    | 2 horas    | Equipo completo | 2 historias (13 SP)                      |
| Daily Scrum     | Días 1-5 | 15 min/día | Dev Team        | Identificado impedimento en día 3        |
| Sprint Review   | Día 5    | 1 hora     | Equipo + PO     | PO muy satisfecho con órdenes de trabajo |
| Retrospective   | Día 5    | 45 min     | Scrum Team      | Mejoró integración Frontend-Backend      |

---

### **Sprint 3:**

| Ceremonia       | Fecha    | Duración   | Participantes   | Notas                                     |
| --------------- | -------- | ---------- | --------------- | ----------------------------------------- |
| Sprint Planning | Día 1    | 2.5 horas  | Equipo completo | 3 historias (15 SP)                       |
| Daily Scrum     | Días 1-5 | 15 min/día | Dev Team        | Impedimento con Cloudinary resuelto día 2 |
| Sprint Review   | Día 5    | 1 hora     | Equipo + PO     | 1 historia quedó en progreso              |
| Retrospective   | Día 5    | 1 hora     | Scrum Team      | Acordado mejorar estimaciones             |

---

### **Sprint 4:**

| Ceremonia       | Fecha    | Duración   | Participantes              | Notas                                |
| --------------- | -------- | ---------- | -------------------------- | ------------------------------------ |
| Sprint Planning | Día 1    | 2 horas    | Equipo completo            | 2 historias (13 SP)                  |
| Daily Scrum     | Días 1-5 | 15 min/día | Dev Team                   | Complejidad en queries SQL           |
| Sprint Review   | Día 5    | 1.5 horas  | Equipo + PO + Stakeholders | Presentación final del proyecto      |
| Retrospective   | Día 5    | 1.5 horas  | Scrum Team                 | Retrospectiva de cierre del proyecto |

---

## 📈 Métricas de las Ceremonias

### **Cumplimiento de Ceremonias:**

- Sprint Plannings realizadas: 4/4 (100%)
- Daily Scrums realizadas: 20/20 (100%)
- Sprint Reviews realizadas: 4/4 (100%)
- Sprint Retrospectives realizadas: 4/4 (100%)

### **Duración Promedio:**

- Sprint Planning: 2.4 horas
- Daily Scrum: 15 minutos (dentro del timebox)
- Sprint Review: 1.25 horas
- Sprint Retrospective: 1 hora

### **Participación:**

- Asistencia promedio: 98%
- Puntualidad: 95%

---

## 💡 Buenas Prácticas Aplicadas

### **En Sprint Planning:**

- ✅ Product Backlog refinado antes de la reunión
- ✅ Historias de usuario con criterios de aceptación claros
- ✅ Estimaciones por consenso (Planning Poker conceptual)
- ✅ Sprint Goal inspirador y alcanzable

### **En Daily Scrum:**

- ✅ Mismo horario todos los días
- ✅ De pie (stand-up) para mantener energía
- ✅ Timeboxing estricto de 15 minutos
- ✅ Enfoque en coordinación, no reporte
- ✅ Impedimentos registrados y seguidos

### **En Sprint Review:**

- ✅ Demo en ambiente funcional (no slides)
- ✅ Feedback documentado
- ✅ Participación activa de stakeholders
- ✅ Celebración de logros del equipo

### **En Sprint Retrospective:**

- ✅ Ambiente seguro para expresar opiniones
- ✅ Enfoque en procesos, no personas
- ✅ Acciones concretas y medibles
- ✅ Seguimiento de acciones del sprint anterior
- ✅ Participación equitativa de todos

---

## 🎯 Impacto de las Ceremonias en el Proyecto

| Ceremonia       | Beneficio Principal             | Ejemplo Concreto                                     |
| --------------- | ------------------------------- | ---------------------------------------------------- |
| Sprint Planning | Alineación del equipo           | Todos entendieron que autenticación era prioridad #1 |
| Daily Scrum     | Detección temprana de problemas | Impedimento con Cloudinary resuelto en 24h           |
| Sprint Review   | Feedback valioso                | Sugerencia de foto de perfil agregada al backlog     |
| Retrospective   | Mejora continua                 | Implementación de code reviews diarias               |

---

## 📝 Lecciones Aprendidas sobre las Ceremonias

### **Lo que funcionó bien:**

- Las Daily Scrums mantuvieron al equipo sincronizado
- Sprint Reviews con demos reales generaron confianza
- Retrospectives crearon cultura de mejora continua
- Sprint Planning evitó malentendidos sobre requisitos

### **Lo que se puede mejorar:**

- Involucrar más stakeholders en Sprint Reviews
- Usar herramientas digitales para retrospectives remotas
- Grabar algunas ceremonias para referencia futura
- Crear plantillas para facilitar documentación

---

<div align="center">

**Proyecto Académico - Metodología Scrum**  
**Electiva Profesional 2 - 2025**

_"Las ceremonias de Scrum son el corazón del framework. Sin ellas, no hay Scrum."_

[Volver a Documentación](README.md)

</div>
