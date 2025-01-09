import Lara from "@primevue/themes/lara"

import { definePreset } from '@primevue/themes'

const usedComponents = [
    'button',
    'carousel',
    'dialog',
    'floatlabel',
    'divider',
    'drawer',
    'textarea',   
]

const theme = definePreset(Lara, {
    semantic: {
        primary: {
            50: 'rgb(var(--color-stylist-50))',
            100: 'rgb(var(--color-stylist-100))',
            200: 'rgb(var(--color-stylist-200))',
            300: 'rgb(var(--color-stylist-300))',
            400: 'rgb(var(--color-stylist-400))',
            500: 'rgb(var(--color-stylist-500))',
            600: 'rgb(var(--color-stylist-600))',
            700: 'rgb(var(--color-stylist-700))',
            800: 'rgb(var(--color-stylist-800))',
            900: 'rgb(var(--color-stylist-900))',
            950: 'rgb(var(--color-stylist-950))'
        }
    }
})

// filter the components for the only used
theme.components = Object.fromEntries(
    Object.entries(theme.components).filter(([key]) => usedComponents.includes(key))
);

theme.primitive = {
    borderRadius: theme.primitive.borderRadius,
    zinc: theme.primitive.zinc,
}

export default theme