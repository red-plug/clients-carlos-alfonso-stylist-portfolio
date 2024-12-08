<template>
    <footer class="w-20 md:w-24 fixed right-0 top-0 h-screen flex flex-col justify-center items-center gap-y-4">
        <Button v-tooltip.left="facebook" as="a" target="_blank" rel="noopener noreferer" aria-label="Facebook" href="https://www.facebook.com/CarlosAlfonsoFashionStylist" size="small" severity="secondary" class="hover:text-primary hover:border-primary transition ease-in-out hover:scale-110">
            <Icon name="fa6-brands:facebook" />
        </Button>
        <Button v-tooltip.left="tiktok" as="a" target="_blank" rel="noopener noreferer" aria-label="Tiktok" href="https://www.tiktok.com/@carlosalfonso.stylist" size="small" severity="secondary" class="hover:text-primary hover:border-primary transition ease-in-out hover:scale-110">
            <Icon name="fa6-brands:tiktok" />
        </Button>
        <Button v-tooltip.left="instagram" as="a" target="_blank" rel="noopener noreferer" aria-label="Instagram" href="https://www.instagram.com/carlosalfonso_stylist" size="small" severity="secondary" class="hover:text-primary hover:border-primary transition ease-in-out hover:scale-110">
            <Icon name="fa6-brands:instagram" />
        </Button>
        <Button v-tooltip.left="whatsapp" as="a" target="_blank" rel="noopener noreferer" aria-label="Whatsapp" href="https://wa.me/523331272308" size="small" severity="secondary" class="hover:text-primary hover:border-primary transition ease-in-out hover:scale-110">
            <Icon name="fa6-brands:whatsapp" />
        </Button>
    </footer>
</template>
<script setup lang="ts">
import type { TooltipOptions } from 'primevue/tooltip';

const root = {
    style: {
        marginLeft: '-5px'
    }
}

const facebook = {
    value: 'Facebook',
    pt: {
        root,
        arrow: {
            style: {
                borderLeftColor: 'rgb(var(--color-facebook))'
            }
        },
        text: {
            style: {
                background: 'rgb(var(--color-facebook))'
            }
        }
    },
} as TooltipOptions

const tiktok = {
    value: 'TikTok',
    pt: {
        root,
        arrow: {
            style: {
                borderLeftColor: 'rgb(var(--color-tiktok))'
            }
        },
        text: {
            style: {
                background: 'rgb(var(--color-tiktok))',
            }
        }
    },
} as TooltipOptions

const instagram = {
    value: 'Instagram',
    pt: {
        root,
        arrow: {
            style: {
                borderLeftColor: 'rgb(var(--color-instagram))'
            }
        },
        text: {
            style: {
                background: 'rgb(var(--color-instagram))'
            }
        }
    },
} as TooltipOptions

const whatsapp = {
    value: 'WhatsApp',
    pt: {
        root,
        arrow: {
            style: {
                borderLeftColor: 'rgb(var(--color-whatsapp))'
            }
        },
        text: {
            style: {
                background: 'rgb(var(--color-whatsapp))'
            }
        }
    },
} as TooltipOptions
</script>