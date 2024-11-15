import Aura from "@primevue/themes/aura"
import Lara from "@primevue/themes/lara"
import Nora from "@primevue/themes/nora"
import Material from "@primevue/themes/material"

import { definePreset } from '@primevue/themes'


export default definePreset(Lara, {
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