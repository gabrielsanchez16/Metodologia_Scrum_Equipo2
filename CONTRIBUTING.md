# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al **Sistema de Gestión de Talleres**!

Este documento proporciona las pautas y mejores prácticas para contribuir al proyecto de manera efectiva.

---

## 📋 Tabla de Contenidos

1. [Código de Conducta](#código-de-conducta)
2. [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
3. [Proceso de Desarrollo](#proceso-de-desarrollo)
4. [Estándares de Código](#estándares-de-código)
5. [Commits y Mensajes](#commits-y-mensajes)
6. [Pull Requests](#pull-requests)
7. [Reporte de Bugs](#reporte-de-bugs)
8. [Sugerencia de Features](#sugerencia-de-features)

---

## 📜 Código de Conducta

Este proyecto sigue un código de conducta para asegurar un ambiente inclusivo y respetuoso. Al participar, te comprometes a mantener este estándar.

### Comportamiento Esperado:

- ✅ Ser respetuoso con todos los colaboradores
- ✅ Aceptar críticas constructivas
- ✅ Enfocarse en lo que es mejor para la comunidad
- ✅ Mostrar empatía hacia otros miembros

### Comportamiento Inaceptable:

- ❌ Lenguaje o imágenes ofensivas
- ❌ Ataques personales o políticos
- ❌ Acoso público o privado
- ❌ Publicar información privada de otros sin permiso

---

## 🚀 ¿Cómo puedo contribuir?

Hay muchas formas de contribuir a este proyecto:

### 1. **Reportar Bugs**

Si encuentras un error, por favor repórtalo siguiendo nuestra [plantilla de issues](#reporte-de-bugs).

### 2. **Sugerir Mejoras**

¿Tienes una idea para mejorar el sistema? Compártela en un issue con la etiqueta `enhancement`.

### 3. **Mejorar la Documentación**

La documentación nunca es suficiente. Puedes:

- Corregir errores tipográficos
- Agregar ejemplos
- Mejorar explicaciones
- Traducir documentación

### 4. **Contribuir con Código**

- Solucionar bugs existentes
- Implementar nuevas funcionalidades
- Mejorar el rendimiento
- Refactorizar código

### 5. **Revisar Pull Requests**

Ayuda revisando PRs de otros colaboradores.

---

## 🔄 Proceso de Desarrollo

### Configuración del Entorno

#### Backend

```bash
# 1. Fork del repositorio
# 2. Clonar tu fork
git clone https://github.com/TU_USUARIO/Metodologia_Scrum_Equipo2.git
cd Metodologia_Scrum_Equipo2/Proyectos/Backend

# 3. Agregar remote upstream
git remote add upstream https://github.com/gabrielsanchez16/Metodologia_Scrum_Equipo2.git

# 4. Instalar dependencias
npm install

# 5. Configurar .env
cp .env.example .env
# Editar .env con tus credenciales

# 6. Ejecutar migraciones
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# 7. Iniciar servidor de desarrollo
npm run server
```

#### Frontend

```bash
cd Proyectos/Frontend

# Instalar dependencias
npm install

# Configurar variables de entorno
echo "VITE_API_URL=http://localhost:8000/api/v1" > .env

# Iniciar servidor de desarrollo
npm run dev
```

### Flujo de Trabajo (Git Flow)

```bash
# 1. Actualizar tu fork con los últimos cambios
git checkout main
git pull upstream main

# 2. Crear una nueva rama para tu feature/fix
git checkout -b feature/nombre-descriptivo
# o
git checkout -b fix/descripcion-del-bug

# 3. Hacer tus cambios y commits
git add .
git commit -m "tipo: descripción corta"

# 4. Push a tu fork
git push origin feature/nombre-descriptivo

# 5. Crear Pull Request desde GitHub
```

### Nomenclatura de Ramas

| Tipo                  | Prefijo     | Ejemplo                              |
| --------------------- | ----------- | ------------------------------------ |
| Nueva funcionalidad   | `feature/`  | `feature/agregar-sistema-reportes`   |
| Corrección de bug     | `fix/`      | `fix/error-validacion-email`         |
| Mejora de rendimiento | `perf/`     | `perf/optimizar-consultas-db`        |
| Refactorización       | `refactor/` | `refactor/reorganizar-controladores` |
| Documentación         | `docs/`     | `docs/actualizar-readme`             |
| Estilos (frontend)    | `style/`    | `style/mejorar-responsive-dashboard` |
| Testing               | `test/`     | `test/agregar-tests-unitarios`       |

---

## 📝 Estándares de Código

### Backend (Node.js/Express)

#### Estructura de Archivos

```
Backend/
├── config/         # Configuraciones (DB, Cloudinary, etc.)
├── controllers/    # Lógica de negocio
├── models/         # Modelos Sequelize
├── routes/         # Definición de rutas
├── middlewares/    # Validaciones y autenticación
├── utils/          # Funciones auxiliares
├── migrations/     # Migraciones de BD
└── seeders/        # Datos iniciales
```

#### Convenciones de Código

**Nombres de Variables y Funciones:**

```javascript
// ✅ Correcto - camelCase
const userName = "Juan";
const getUserById = async (id) => { ... }

// ❌ Incorrecto
const user_name = "Juan";
const GetUserById = async (id) => { ... }
```

**Nombres de Archivos:**

```javascript
// ✅ Correcto
user.controller.js;
auth.middleware.js;
motorcycle.model.js;

// ❌ Incorrecto
UserController.js;
Auth_Middleware.js;
motorcycleModel.js;
```

**Estructura de Controladores:**

```javascript
// ✅ Estructura recomendada
const createUser = async (name, email, password) => {
  try {
    // Validaciones
    if (!name || !email) {
      throw new Error("Campos requeridos faltantes");
    }

    // Lógica de negocio
    const user = await User.create({ name, email, password });

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser };
```

**Async/Await en lugar de Promises:**

```javascript
// ✅ Correcto
const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

// ❌ Evitar
const getUsers = () => {
  return User.findAll().then((users) => users);
};
```

### Frontend (React/TypeScript)

#### Estructura de Componentes

```
Frontend/src/
├── Components/     # Componentes reutilizables
├── Views/          # Páginas/Vistas
├── Context/        # Context API para estado global
├── hooks/          # Custom hooks
├── Utils/          # Funciones auxiliares
└── Interface/      # TypeScript interfaces y types
```

#### Convenciones de Código

**Componentes:**

```typescript
// ✅ Correcto - PascalCase para componentes
export const UserCard = ({ user }: UserCardProps) => {
    return <div>{user.name}</div>;
};

// ❌ Incorrecto
export const userCard = ({ user }) => { ... }
```

**Hooks Personalizados:**

```typescript
// ✅ Correcto - prefijo "use"
export const useAuth = () => {
    // lógica del hook
};

// ❌ Incorrecto
export const authHook = () => { ... }
```

**Props e Interfaces:**

```typescript
// ✅ Correcto - Definir interfaces
interface UserCardProps {
  user: User;
  onEdit: (id: string) => void;
}

export const UserCard = ({ user, onEdit }: UserCardProps) => {
  // componente
};
```

### Formato de Código

- **Indentación:** 2 espacios (no tabs)
- **Punto y coma:** Obligatorio al final de cada statement
- **Comillas:** Simples (`'`) para JavaScript, dobles (`"`) para JSX/TSX
- **Longitud de línea:** Máximo 100 caracteres

---

## 💬 Commits y Mensajes

Seguimos la convención de [Conventional Commits](https://www.conventionalcommits.org/).

### Formato

```
<tipo>(<alcance>): <descripción corta>

[cuerpo opcional]

[footer opcional]
```

### Tipos de Commit

| Tipo       | Descripción             | Ejemplo                                             |
| ---------- | ----------------------- | --------------------------------------------------- |
| `feat`     | Nueva funcionalidad     | `feat(auth): agregar login con Google`              |
| `fix`      | Corrección de bug       | `fix(inventory): corregir cálculo de stock`         |
| `docs`     | Documentación           | `docs(readme): actualizar guía de instalación`      |
| `style`    | Cambios de formato      | `style(dashboard): mejorar responsive mobile`       |
| `refactor` | Refactorización         | `refactor(controllers): simplificar lógica de auth` |
| `perf`     | Mejora de rendimiento   | `perf(api): optimizar consultas a BD`               |
| `test`     | Tests                   | `test(user): agregar tests unitarios`               |
| `chore`    | Tareas de mantenimiento | `chore(deps): actualizar dependencias`              |
| `build`    | Cambios en build        | `build(vite): configurar alias de rutas`            |
| `ci`       | Integración continua    | `ci: agregar GitHub Actions`                        |

### Ejemplos de Buenos Commits

```bash
# ✅ Buenos ejemplos
git commit -m "feat(orders): implementar exportación a PDF"
git commit -m "fix(auth): resolver error de token expirado"
git commit -m "docs(api): documentar endpoints de inventario"
git commit -m "refactor(models): mejorar relaciones Sequelize"
git commit -m "perf(frontend): lazy loading de componentes"

# ❌ Malos ejemplos
git commit -m "cambios"
git commit -m "fix bug"
git commit -m "Update file.js"
git commit -m "trabajo del día"
```

---

## 🔀 Pull Requests

### Antes de Crear un PR

1. ✅ Asegúrate de que tu código compile sin errores
2. ✅ Ejecuta los linters (ESLint)
3. ✅ Prueba manualmente tu funcionalidad
4. ✅ Actualiza la documentación si es necesario
5. ✅ Revisa que no haya conflictos con `main`

### Plantilla de PR

```markdown
## 📋 Descripción

Breve descripción de los cambios realizados

## 🎯 Tipo de Cambio

- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Mejora de documentación

## ✅ Checklist

- [ ] Mi código sigue los estándares del proyecto
- [ ] He revisado mi propio código
- [ ] He comentado áreas complejas
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan nuevos warnings
- [ ] He probado manualmente los cambios

## 🧪 ¿Cómo se ha probado?

Describe las pruebas realizadas

## 📸 Screenshots (si aplica)

Agrega capturas de pantalla si hay cambios visuales

## 🔗 Issues Relacionados

Closes #123
```

### Proceso de Revisión

1. Un miembro del equipo revisará tu PR
2. Pueden solicitar cambios
3. Realiza los cambios solicitados
4. Una vez aprobado, será merged a `main`

### Criterios para Aprobar un PR

- ✅ El código sigue los estándares establecidos
- ✅ No introduce bugs o errores
- ✅ La funcionalidad está bien implementada
- ✅ Incluye comentarios en código complejo
- ✅ La documentación está actualizada

---

## 🐛 Reporte de Bugs

### Antes de Reportar

1. ✅ Verifica que el bug no haya sido reportado antes
2. ✅ Asegúrate de usar la última versión del código
3. ✅ Intenta reproducir el bug consistentemente

### Plantilla de Issue (Bug)

```markdown
**Descripción del Bug**
Descripción clara y concisa del problema

**Pasos para Reproducir**

1. Ir a '...'
2. Hacer click en '...'
3. Scrollear hasta '...'
4. Ver el error

**Comportamiento Esperado**
Lo que debería suceder

**Comportamiento Actual**
Lo que realmente sucede

**Screenshots**
Si aplica, agrega capturas de pantalla

**Entorno:**

- OS: [ej. Windows 10, Ubuntu 22.04]
- Navegador: [ej. Chrome 120, Firefox 121]
- Versión Node.js: [ej. 18.17.0]

**Información Adicional**
Cualquier otro contexto sobre el problema
```

---

## 💡 Sugerencia de Features

### Plantilla de Issue (Feature Request)

```markdown
**¿Tu feature request está relacionado con un problema?**
Descripción clara del problema. Ej. "Siempre es frustrante cuando..."

**Describe la solución que te gustaría**
Descripción clara de lo que quieres que suceda

**Describe alternativas que has considerado**
Otras soluciones o features que consideraste

**Contexto Adicional**
Cualquier otro contexto, screenshots o mockups sobre la feature
```

---

## 📞 Contacto

Si tienes preguntas sobre cómo contribuir:

- 📧 **Email del equipo:** gsanchezalarcon52@gmail.com
- 💬 **Discussions:** [GitHub Discussions](https://github.com/gabrielsanchez16/Metodologia_Scrum_Equipo2/discussions)
- 🐛 **Issues:** [GitHub Issues](https://github.com/gabrielsanchez16/Metodologia_Scrum_Equipo2/issues)

---

## 🙏 Agradecimientos

Gracias por tomarte el tiempo de contribuir al **Sistema de Gestión de Talleres**.

Cada contribución, sin importar su tamaño, es valiosa y apreciada.

**¡Feliz coding!** 🚀

---

<div align="center">

**Desarrollado con metodología Scrum por el Equipo 2**

[⬆️ Volver arriba](#-guía-de-contribución)

</div>
