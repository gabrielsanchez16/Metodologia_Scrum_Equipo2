# 🔒 NOTAS IMPORTANTES DE SEGURIDAD - config.json

**Desarrollador Backend:** Darío Restrepo  
**Fecha:** 30 de octubre de 2025  
**Contexto:** Proyecto Académico - Metodología Scrum - Electiva Profesional 2

---

## ⚠️ ADVERTENCIA DE SEGURIDAD CRÍTICA

El archivo `config.json` actualmente contiene **credenciales de base de datos en texto plano**. En un escenario de producción real, esto representa un **RIESGO CRÍTICO** de seguridad.

---

## 📋 RECOMENDACIONES PARA IMPLEMENTACIÓN FUTURA

### 1️⃣ **ELIMINAR CREDENCIALES DE ESTE ARCHIVO**
- ❌ Este archivo **NO debe contener passwords** ni información sensible
- ✅ Debe estar en `.gitignore` para evitar subirlo al repositorio
- ✅ Solo debe contener la estructura de configuración, no valores reales

**Problema actual:**
```json
"password": "Sistemataller2025."  // ❌ EXPUESTO EN REPOSITORIO
```

---

### 2️⃣ **USAR VARIABLES DE ENTORNO (.env)**

Migrar todas las credenciales a un archivo `.env` en la raíz del proyecto:

```env
# .env (Este archivo NUNCA debe subirse al repositorio)
DB_HOST=srv1894.hstgr.io
DB_USER=u706568429_gabodev2
DB_PASS=Sistemataller2025.
DB_NAME=u706568429_SistemaTaller
DB_PORT=3306
DB_DIALECT=mysql
```

**Agregar al .gitignore:**
```
.env
.env.local
.env.production
config/config.json
```

---

### 3️⃣ **MODIFICAR config.js PARA LEER DEL .env**

Reemplazar `config.json` por `config.js` que lea de variables de entorno:

```javascript
// config/config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql'
  },
  test: {
    username: process.env.DB_USER_TEST || 'root',
    password: process.env.DB_PASS_TEST || null,
    database: process.env.DB_NAME_TEST || 'test_db',
    host: process.env.DB_HOST_TEST || '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
    pool: {
      max: 10,
      min: 2,
      acquire: 30000,
      idle: 10000
    }
  }
};
```

---

### 4️⃣ **CONFIGURAR .sequelizerc**

Crear archivo `.sequelizerc` en la raíz para que Sequelize CLI use el nuevo config.js:

```javascript
// .sequelizerc
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js'),
  'models-path': path.resolve('models'),
  'seeders-path': path.resolve('seeders'),
  'migrations-path': path.resolve('migrations')
};
```

---

### 5️⃣ **GESTIÓN DE SECRETOS EN PRODUCCIÓN**

Para ambientes de producción empresarial, considerar:

- **AWS Secrets Manager** (para proyectos en AWS)
- **Azure Key Vault** (para proyectos en Azure)
- **Google Cloud Secret Manager** (para proyectos en GCP)
- **HashiCorp Vault** (solución agnóstica de cloud)
- **Variables de entorno del servidor** (configuración directa en el hosting)

**Ventajas:**
- Rotación automática de credenciales
- Auditoría de accesos
- Encriptación en reposo y en tránsito
- Control de permisos granular

---

### 6️⃣ **DIFERENTES CREDENCIALES POR AMBIENTE**

| Ambiente | Configuración Recomendada |
|----------|---------------------------|
| **Development** | Base de datos local (localhost) con datos de prueba |
| **Test** | BD temporal o en memoria (SQLite) para tests automatizados |
| **Staging** | Copia de producción con datos anonimizados |
| **Production** | Credenciales rotadas, acceso restringido, backups automáticos |

**Problema actual:** Todos los ambientes apuntan a la misma BD de producción ⚠️

---

### 7️⃣ **VALIDACIÓN DE VARIABLES DE ENTORNO**

Agregar validación al inicio de la aplicación:

```javascript
// utils/validateEnv.js
const requiredEnvVars = [
  'DB_HOST',
  'DB_USER',
  'DB_PASS',
  'DB_NAME',
  'JWT_SECRET',
  'CLOUDINARY_NAME',
  'CLOUDINARY_KEY',
  'CLOUDINARY_SECRET'
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`❌ Variable de entorno requerida no encontrada: ${envVar}`);
  }
});

console.log('✅ Todas las variables de entorno están configuradas');
```

Llamar en `index.js`:
```javascript
require('./utils/validateEnv'); // Validar antes de iniciar la app
```

---

## 🎯 IMPACTO EN PROYECTO ACADÉMICO

### Contexto Metodología Scrum:

Para propósitos de **evaluación académica** con metodología Scrum, este archivo permanece **sin cambios** para facilitar la revisión y permitir que el equipo pueda ejecutar el proyecto sin configuraciones complejas.

Sin embargo, en un sprint futuro, esta sería una tarea de **PRIORIDAD ALTA** en el Product Backlog bajo la categoría "Seguridad y DevOps".

---

## 📊 TAREA SUGERIDA PARA SPRINT FUTURO

### Historia de Usuario:
```
Como desarrollador backend,
Necesito asegurar las credenciales de base de datos
Para proteger el sistema de accesos no autorizados y cumplir con estándares de seguridad
```

### Criterios de Aceptación:
- ✅ Todas las credenciales migradas a variables de entorno
- ✅ Archivo config.json eliminado del repositorio
- ✅ .env agregado al .gitignore
- ✅ Documentación actualizada con instrucciones de configuración
- ✅ Variables de entorno validadas al inicio de la aplicación
- ✅ Diferentes configuraciones por ambiente (dev, test, prod)
- ✅ README actualizado con sección de variables de entorno

### Estimación:
**3 Story Points** (aproximadamente 1 día de trabajo)

### Prioridad:
**ALTA** - Seguridad crítica

### Sprint Sugerido:
Sprint de "Refactorización y Seguridad" (posterior a funcionalidades principales)

---

## 🔍 ANÁLISIS DE RIESGOS ACTUALES

| Riesgo | Impacto | Probabilidad | Mitigación |
|--------|---------|--------------|------------|
| Exposición de credenciales en repositorio público | CRÍTICO | ALTA | Migrar a .env inmediatamente |
| Acceso no autorizado a base de datos | CRÍTICO | MEDIA | Implementar IP whitelisting + credenciales seguras |
| Pérdida de datos en desarrollo | ALTO | MEDIA | Separar BD de desarrollo y producción |
| Rotación de passwords imposible | MEDIO | BAJA | Usar gestores de secretos |

---

## 📚 RECURSOS ADICIONALES

### Documentación Oficial:
- [Sequelize CLI Configuration](https://sequelize.org/docs/v6/other-topics/migrations/#the-sequelizerc-file)
- [dotenv - Node.js](https://www.npmjs.com/package/dotenv)
- [OWASP - Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure)

### Best Practices:
- [12 Factor App - Config](https://12factor.net/config)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

Cuando se decida implementar estas mejoras:

- [ ] Crear archivo `.env.example` con variables sin valores reales
- [ ] Crear archivo `.env` con credenciales reales (no versionado)
- [ ] Convertir `config.json` a `config.js`
- [ ] Crear archivo `.sequelizerc`
- [ ] Actualizar `.gitignore` para excluir archivos sensibles
- [ ] Implementar validación de variables de entorno
- [ ] Actualizar documentación del README
- [ ] Crear diferentes configuraciones por ambiente
- [ ] Probar migraciones con nueva configuración
- [ ] Probar seeders con nueva configuración
- [ ] Verificar que la aplicación funciona correctamente
- [ ] Comunicar cambios al equipo de desarrollo
- [ ] Actualizar variables de entorno en servidor de producción

---

## 📝 NOTAS FINALES

Este documento fue creado como parte del ejercicio académico de la materia **Electiva Profesional 2**, donde se simuló el desarrollo del proyecto utilizando la **metodología Scrum**.

El proyecto ya está elaborado y en producción, por lo que estas recomendaciones son **puramente educativas** y demuestran el conocimiento de buenas prácticas de seguridad en el desarrollo backend.

**Rol:** Desarrollador Backend  
**Responsable:** Darío Restrepo  
**Equipo:** Metodología Scrum - Equipo 2  
**Fecha:** 30 de octubre de 2025

---

> **"La seguridad no es un producto, es un proceso."** - Bruce Schneier

