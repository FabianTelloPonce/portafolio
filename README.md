# 🚀 Portfolio Profesional

Portfolio web profesional desarrollado con Astro, diseñado para mostrar habilidades, experiencia y proyectos de manera moderna y responsiva.

## ✨ Características

- **� Diseño Responsivo**: Se adapta perfectamente a dispositivos móviles y desktop
- **⚡ Rendimiento Optimizado**: Carga rápida con lazy loading de imágenes
- **♿ Accesibilidad**: Cumple con estándares WCAG para accesibilidad web
- **🎨 Diseño Moderno**: Interfaz limpia y profesional con animaciones sutiles
- **📧 Formulario de Contacto**: Formulario funcional con validación
- **🔍 SEO Optimizado**: Meta tags y estructura optimizada para buscadores

## 🚀 Inicio Rápido

### Instalación

1. **Instala las dependencias**
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

3. **Abre tu navegador**
   Visita `http://localhost:4321`

## ⚙️ Personalización

### 1. Información Personal

Edita el archivo `src/pages/index.astro` y actualiza la sección de datos personales:

```javascript
const personalInfo = {
  name: "Tu Nombre",
  title: "Tu Título Profesional", 
  description: "Tu descripción...",
  email: "tu.email@ejemplo.com",
  phone: "+34 123 456 789",
  location: "Tu Ciudad, País"
};
```

### 2. Imágenes

Reemplaza las imágenes en la carpeta `public/images/`:

- `profile.jpg` - Tu foto de perfil (400x400px recomendado)
- `project-*.jpg` - Screenshots de tus proyectos

### 3. Personalizar Datos

Actualiza los arrays en `src/pages/index.astro`:
- `experiences` - Tu experiencia profesional
- `projects` - Tus proyectos destacados  
- `skills` - Tus habilidades técnicas

## 🌐 Despliegue

```bash
npm run build    # Construir para producción
npm run preview  # Vista previa local
```

Despliega la carpeta `dist/` en tu servicio de hosting preferido (Netlify, Vercel, etc.)

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor de desarrollo                |
| `npm run build`           | Construye el sitio para producción              |
| `npm run preview`         | Vista previa local del build                    |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                   |

## � Licencia

MIT License - Úsalo libremente para tu portfolio personal.

---

**¡Hecho con ❤️ y Astro!**
