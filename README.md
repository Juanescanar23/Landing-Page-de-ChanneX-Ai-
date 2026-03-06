# ChanneX AI — Landing Page

**Sitio web oficial de ChanneX AI**
Plataforma de automatización comercial con inteligencia artificial para empresas B2B latinoamericanas.

---

## Descripcion

Landing page institucional de ChanneX AI. Presenta la propuesta de valor, plataforma de 9 aplicaciones, benchmarks de mercado, plan de implementacion y estructura de precios.

Construida como un archivo HTML unico, autocontenido, sin dependencias externas de frameworks — optimizado para velocidad de carga, compatibilidad cross-browser y experiencia responsive en todos los dispositivos.

---

## Caracteristicas tecnicas

- **HTML/CSS/JS puro** — sin frameworks, sin dependencias NPM
- **Autocontenido** — imagenes en base64, fuentes via Google Fonts CDN
- **Responsive** — adaptado para mobile, tablet y desktop (breakpoints: 400px / 600px / 860px / 1100px)
- **Cross-browser** — compatible con Chrome, Safari, Firefox, Edge (incluye prefijos `-webkit-`)
- **Rendimiento** — IntersectionObserver para animaciones, sin GSAP ni librerias pesadas
- **Accesibilidad** — semantica HTML correcta, contraste accesible, navegacion por teclado
- **Diseno** — Glass morphism, gradientes, orbs animados, tipografia Bricolage Grotesque + Geist

---

## Estructura del proyecto

```
Landing Page de ChanneX Ai/
├── channexai-v3.html      # Archivo principal (unico archivo necesario)
├── channexai/             # Assets y recursos adicionales
├── README.md              # Este archivo
```

---

## Secciones de la landing page

| Seccion | Descripcion |
|---|---|
| **Hero** | Propuesta de valor principal con mockup interactivo |
| **Metricas** | Indicadores clave de la plataforma |
| **El Problema** | Los 4 puntos de dolor del mercado B2B |
| **Datos / Benchmarks** | Estadisticas verificadas del costo de operar sin automatizacion |
| **Plataforma** | Las 9 aplicaciones del ecosistema ChanneX AI |
| **Implementacion** | Plan de integracion en 3-4 semanas |
| **Precios** | Estructura de implementacion + planes de suscripcion |
| **CTA** | Llamado a la accion — agenda diagnostico gratuito |

---

## Uso local

Abrir directamente en el navegador o levantar un servidor local:

```bash
python3 -m http.server 8080
# Luego ir a: http://localhost:8080/channexai-v3.html
```

---

## Propiedad intelectual

**Copyright (c) 2025 ChanneX AI**

Todo el contenido, diseno, codigo fuente, textos, imagenes, marca, logotipo y arquitectura visual de este proyecto son propiedad intelectual exclusiva de **ChanneX AI**, startup tecnologica.

Queda prohibida la reproduccion, distribucion, modificacion o uso comercial de cualquier parte de este proyecto sin autorizacion expresa y por escrito de ChanneX AI.

- **Empresa:** ChanneX AI
- **Sitio:** [channexai.com](https://channexai.com)
- **Instagram:** [@channexai](https://www.instagram.com/channexai/)
- **LinkedIn:** [ChanneX AI](https://linkedin.com/company/channexai)

---

## Tecnologias utilizadas

- HTML5 / CSS3 / JavaScript ES6+
- [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) — tipografia de titulos
- [Geist](https://vercel.com/font) — tipografia de cuerpo
- IntersectionObserver API — animaciones de entrada
- CSS Custom Properties — sistema de tokens de diseno
- CSS Grid + Flexbox — sistema de layout

---

*Desarrollado, disenado y ejecutado por el equipo de ChanneX AI.*
