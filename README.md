# Hosting de Occidente

## Proyecto II — Universidad de Guadalajara

Sitio web corporativo desarrollado para la asignatura Proyecto II de la Licenciatura en Desarrollo de Sistemas Web de la Universidad de Guadalajara.

## Objetivo

Presentar los servicios de Hosting de Occidente mediante una navegación clara, diseño adaptable y medios de contacto para clientes potenciales.

## Tecnologías

- React 19
- JavaScript
- Vite
- HTML5 y CSS3
- Git y GitHub

## Funcionalidades documentadas

- Página de inicio y presentación de servicios.
- Secciones de soluciones y nosotros.
- Navegación entre secciones.
- Formulario de contacto que prepara un mensaje mediante `mailto:`.
- Buscador de dominios en modo demostración.

> El formulario no transmite datos a un servidor. Depende de que el visitante tenga configurada una aplicación de correo. El buscador de dominios no consulta un registrador ni confirma disponibilidad real.

## Historias de usuario y backlog

| ID | Historia / funcionalidad | Iteración documentada |
|---|---|---|
| HU-01 | Página de inicio | Sprint 1 |
| HU-02 | Consulta de servicios | Sprint 1 |
| HU-03 | Sección de soluciones | Sprint 2 |
| HU-04 | Sección nosotros | Sprint 2 |
| HU-05 | Contacto | Sprint 1; mejora U4 |
| HU-06 | Diseño responsive | Sprint 2 |
| HU-07 | Acceso rápido al contacto | Sprint 2 |
| HU-08 | Navegación | Sprint 1; mejora U4 |
| HU-09 | Identidad corporativa | Sprint 2 |
| HU-10 | Experiencia de usuario e interfaz | Sprint 2; mejora U4 |

## Unidad 4 — Iteración de mejoras

A partir de las propuestas de mejora registradas en la actividad anterior y de la retroalimentación general de la asesora (incorporar evidencia de pantallas, conclusiones y fuentes), se trabajó una iteración enfocada en accesibilidad y claridad del contacto.

### Cambios realizados en esta rama

1. Se agregó un enlace para saltar al contenido principal.
2. Se incorporaron estilos de foco visibles para enlaces, botones, campos y el contenido principal.
3. Se ajustó el desplazamiento de las secciones para considerar el encabezado fijo.
4. Se reforzó la validación del formulario: nombre, correo y mensaje obligatorios; formato de correo; mensajes específicos por campo.
5. Se añadieron atributos `aria-invalid`, `aria-describedby` y regiones de estado para comunicar errores y resultados.
6. Se aclaró que el formulario abre el cliente de correo mediante `mailto:`; no realiza un envío desde el sitio.
7. Se conserva el aviso de que el buscador de dominios presenta resultados de demostración.

### Alcance y limitaciones

No se integró un proveedor de dominios, una API de disponibilidad ni un backend de contacto. Tampoco se atribuyen reuniones o intervenciones a integrantes de un equipo, ya que el proyecto se desarrolla de manera individual. La actividad se adapta a esa modalidad: la planeación, implementación, revisión y documentación corresponden al estudiante.

## Bitácora técnica de la iteración

| Actividad | Resultado / evidencia verificable |
|---|---|
| Revisión del código base | Se revisaron `src/App.jsx`, `src/App.css`, `src/index.css` y `package.json`. |
| Accesibilidad de navegación | Enlace de salto, foco visible y márgenes de desplazamiento agregados en esta rama. |
| Formulario | Validación por campo y explicación de `mailto:` agregadas en `src/App.jsx`. |
| Estilos | Reglas específicas agregadas al final de `src/App.css`. |
| Control de versiones | Cambios organizados en la rama `u4-mejoras-accesibilidad-contacto`; `main` se mantiene separada. |
| Pruebas de compilación | Pendientes de ejecución en un entorno con dependencias instaladas. No se declara compilación exitosa. |
| Evidencia visual | No se adjuntaron capturas; la revisión visual en navegador queda pendiente. |

## Reporte de roles — modalidad individual

| Función | Responsable |
|---|---|
| Análisis de requerimientos y backlog | Estudiante |
| Planeación de la iteración | Estudiante |
| Desarrollo e implementación | Estudiante |
| Revisión de accesibilidad y validaciones | Estudiante |
| Control de versiones y documentación | Estudiante |

La distribución anterior describe funciones asumidas por una sola persona; no representa un equipo ficticio ni reuniones que no se hayan realizado.

## Ejecución local

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Generar compilación:

```bash
npm run build
```

Ejecutar revisión estática:

```bash
npm run lint
```

## Fuentes de consulta de la actividad

- Miro. (2025). *Sprint planning y review*.
- Lucid. (2025). *Tipos de reuniones Scrum*.

Las referencias se conservan conforme a los materiales indicados en las instrucciones de la actividad; deben completarse con sus URL o datos bibliográficos exactos si la plataforma los solicita.
