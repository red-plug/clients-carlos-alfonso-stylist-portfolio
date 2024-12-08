<template>
    <div class="w-full flex justify-center">
        <Button rounded class="w-12 h-12 md:w-14 md:h-14 text-4xl group relative text-white" outlined @click="showMenu = !showMenu" aria-label="Abrir menú">
            <div class="flex absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <Icon name="heroicons:bars-3" />
            </div>
            <div class="group-hover:hidden flex absolute">
                <Icon name="heroicons:bars-3-bottom-right" />
            </div>
        </Button>
        <Drawer v-model:visible="showMenu" class="!w-full md:!w-[50vw] bg-transparent backdrop-blur-md"  position="right">
            <template #header>
                <h3 class="text-6xl font-serif">
                    CARLOS ALFONSO STYLIST
                </h3>
            </template>
            <div class="w-full flex h-full pb-8">
                <div class="w-full md:w-1/2">
                    <ul class="h-full flex flex-col justify-center gap-y-8 md:gap-y-16 ps-18 md:ps-16">
                        <li v-for="item in items" @click="showMenu = false" class="text-4xl md:text-5xl font-bold hover:text-primary">
                            <a :href="item.ref" v-text="item.display">
                            </a>
                        </li>
                    </ul>
                </div>
                <Divider layout="vertical" class="hidden md:flex before:border-primary" />
                <div class="w-1/2 hidden md:flex flex-col justify-center px-16 gap-y-8">
                    <p>
                        <span class="text-primary font-serif text-3xl">CA</span> | Contáctame
                    </p>
                    <h4 class="text-4xl">
                        ¿Estás preparado para dar el paso a tu verdadero yo?
                    </h4>
                    <div>
                        <Button class="text-white" as="a" href="https://wa.me/523331272308?text=Hola, estoy interesado en tus asesorías" target="_blank" rel="noopener noreferer" outlined>
                            Mandame un <Icon name="fa6-brands:whatsapp" /> WhatsApp
                        </Button>
                    </div>
                </div>
            </div>
        </Drawer>
    </div>
</template>

<script setup lang="ts">
const showMenu = ref(false)
const items = [
    {
        display: "Inicio",
        ref: "/#gallery-styles"
    },
    {
        display: "Sobre mí",
        ref: "/#about-me"
    },
    {
        display: "Testimonios",
        ref: "/#testimonials"
    },
    {
        display: "Contacto",
        ref: "/#contact"
    }
]
</script>