---
name: Taiwan 2026 Vision
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3d494a'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6d797b'
  outline-variant: '#bcc9cb'
  surface-tint: '#006971'
  primary: '#006971'
  on-primary: '#ffffff'
  primary-container: '#00a8b5'
  on-primary-container: '#00363b'
  inverse-primary: '#59d8e5'
  secondary: '#ac332a'
  on-secondary: '#ffffff'
  secondary-container: '#fd6e60'
  on-secondary-container: '#6d0005'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#87f3ff'
  primary-fixed-dim: '#59d8e5'
  on-primary-fixed: '#001f23'
  on-primary-fixed-variant: '#004f55'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#8b1a16'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  deep-ink: '#0F1419'
  slate-blue: '#1A222D'
  mist-gray: '#E8EEF4'
  sky-active: '#3D9AED'
  cloud-shadow: '#9FB0C3'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 120px
---

## Brand & Style

The design system is crafted to evoke the spirit of "Modern Heritage"—a fusion of Taiwan's high-tech efficiency and its warm, island hospitality. The aesthetic shifts away from heavy, tech-focused dark modes toward a "Light & Airy" experience that feels premium and welcoming. 

The style utilizes **Minimalism** as a foundation to ensure clarity and breathability, layered with subtle **Glassmorphism** to represent the modern architecture of Taipei. The interface should feel like a breath of fresh air: expansive, organized, and vibrantly accented. The target audience includes global travelers, digital nomads, and cultural explorers who value both seamless utility and aesthetic inspiration.

## Colors

The palette is anchored in **Soft White** and **Mist Gray** to create an open, high-end editorial feel. 

*   **Primary (Teal):** Represents the lush mountains and surrounding seas; used for main actions and branding.
*   **Secondary (Coral):** Inspired by night markets and festive lanterns; used for highlights and high-energy call-outs.
*   **Tertiary (Gold):** Represents temple craftsmanship and luxury; used for premium badges and subtle dividers.
*   **Deep Ink:** This dark accent is used strictly for typography and structural borders to provide high-contrast grounding without overwhelming the "light" aesthetic.

## Typography

This design system utilizes **Plus Jakarta Sans** across all levels to maintain a contemporary, approachable, and highly readable look. 

The type scale is intentionally dramatic. Headlines are extra-bold and tightly tracked to create "impact zones" on the landing page. Body text maintains generous line heights (1.5x - 1.6x) to facilitate scanning and readability, especially on mobile devices where the "airy" feel must be preserved through vertical rhythm rather than just horizontal white space.

## Layout & Spacing

The layout follows a **Fixed Grid** approach for desktop (12 columns) to ensure content remains centered and premium, transitioning to a fluid single-column layout for mobile.

*   **Vertical Rhythm:** We use a generous `section-gap` of 120px to separate major narrative blocks, ensuring the user never feels crowded.
*   **Gutters:** Fixed at 24px to provide clear separation between imagery and text blocks.
*   **Mobile Scaling:** Margins are reduced to 24px, but padding within cards and buttons remains high to ensure touch targets are accessible and the interface feels "plush."

## Elevation & Depth

To achieve the "premium airy" feel, this design system avoids heavy shadows. Instead, it uses:

1.  **Tonal layering:** Placing white cards on `mist-gray` (#E8EEF4) backgrounds to create natural depth.
2.  **Backdrop Blurs:** Navigation bars and modal overlays should use a 20px Gaussian blur with a 70% opaque white tint.
3.  **Soft Ambient Shadows:** For interactive cards, use a very diffused shadow: `0px 12px 32px rgba(15, 20, 25, 0.04)`. The low opacity ensures the shadow feels like a soft glow rather than a heavy lift.

## Shapes

The shape language is **Rounded (0.5rem base)**. This softens the bold typography and creates a friendly, modern atmosphere.

*   **Buttons & Inputs:** Use the standard 0.5rem radius.
*   **Featured Imagery:** Use `rounded-xl` (1.5rem) to frame beautiful travel photography, giving the images a "window-like" quality.
*   **Decorative Elements:** Occasional use of "Pill-shaped" capsules for category tags and status indicators to contrast against the more structured grid elements.

## Components

### Buttons
Primary buttons use a solid Teal (#00A8B5) fill with white text. Secondary buttons should use a "Ghost" style with a 1.5px Deep Ink border and bold text. All buttons require a `min-height` of 48px for mobile accessibility.

### Cards
Travel destination cards use a "Floating" style: an image with a 1.5rem border radius, a subtle ambient shadow, and a white content area below. Labels (like "Culture" or "Nature") are placed as absolute-positioned glass capsules in the top-right corner of the image.

### Input Fields
Fields use the `mist-gray` fill with no border by default, transitioning to a Teal 2px border on focus. Placeholders should use `cloud-shadow` to ensure they are visible but subordinate.

### Chips/Tags
Small, pill-shaped elements using low-saturation versions of the accent colors (e.g., a light coral background with dark coral text) to categorize travel interests without visual clutter.

### Navigation
A sticky header with a backdrop blur and a thin `mist-gray` bottom border. The logo should be high-contrast "Deep Ink."