<template>
    <div class="relative h-64 md:h-auto" data-aos="fade-up">
        <img src="/images/testimonials.webp" class="hidden md:block" alt="Imagen de fondo de una mujer con estilo" />
        <div class="absolute  bg-surface-900 w-full md:w-6/12 h-full sm:h-2/3 md:h-full xl:h-1/2 left-0 md:left-1/3 -translate-y-1/2 translate-x-[5%] md:translate-x-1/4 top-1/2">
            <Carousel :value="testimonials" circular :autoplayInterval="6000" :showIndicators="false" :showNavigators="false" :pt="psCarousel">
                <template #item="slotProps">
                    <div class="h-full flex flex-col justify-between py-6 md:py-8 px-2 md:px-4">
                        <div>
                            <div class="flex justify-between">
                                <div class="flex gap-x-1 md:gap-x-2 text-primary items-end pb-4">
                                    <Icon name="heroicons:star-solid" v-for="number in slotProps.data.stars"/>
                                </div>
                                <div class="text-xl md:text-4xl lg:text-7xl text-surface-400">
                                    <Icon name="fa6-solid:quote-right" />
                                </div>
                            </div>
                            <div class="mt-0 sm:mt-2 md:mt-4 md:h-14 lg:h-24">
                                <p v-text="slotProps.data.description" class=" text-base md:text-lg lg:text-xl">
                                </p>
                            </div>
                        </div>
                        <div>
                            <hr class="border-primary" />
                            <div class="mt-2">
                                <h4 class="text-xl font-bold" v-text="slotProps.data.name"> 
                                </h4>
                                <p class="text-lg" v-text="slotProps.data.location ?? 'None'" :class="{'opacity-0': !slotProps.data.location}">     
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
</template>
<script setup lang="ts">

import type { CarouselPassThroughOptions } from 'primevue/carousel'


interface Testimonial {
    name: string
    description: string
    stars: number
    location: string | null
}

const testimonials = ref<Testimonial[]>([
    {
        name: 'María González',
        description: '“La sesión de estilismo transformó por completo mi look. Me sentí segura y hermosa, ¡y el estilista cuidó cada detalle! Lo recomiendo totalmente.”',
        stars: 5,
        location: 'Ciudad de México, México'
    },
    {
        name: 'Carlos Mendoza',
        description: '“Muy contento con el servicio. El estilista fue profesional y amable, y el resultado superó mis expectativas. ¡Definitivamente volveré!”',
        stars: 5,
        location: 'Guadalajara, Jalisco'
    },
    {
        name: 'Sofía Ramírez',
        description: '“El estilista entendió perfectamente lo que quería y logró un resultado increíble. Me sentí en las mejores manos. ¡Gracias!”',
        stars: 5,
        location: 'Monterrey, Nuevo León'
    },
    {
        name: 'Juan Pérez',
        description: '“Gran experiencia. Me dieron consejos personalizados y quedé muy satisfecho con mi nuevo estilo. ¡Lo recomiendo sin duda!”',
        stars: 4,
        location: 'Puebla, Puebla'
    },
    {
        name: 'Ana López',
        description: '“Me encantó el ambiente relajado y profesional. Salí con un look completamente renovado y lleno de confianza. ¡Mil gracias!”',
        stars: 5,
        location: 'Mérida, Yucatán'
    },
    {
        name: 'Luis Fernández',
        description: '“El servicio fue excelente. El estilista fue muy atento y me explicó todo el proceso. ¡Definitivamente volveré!”',
        stars: 5,
        location: 'León, Guanajuato'
    },
    {
        name: 'Clara Sánchez',
        description: '“Me encantó la atención al detalle. Personalizaron todo según mis gustos y me hicieron sentir única. ¡Muy recomendado!”',
        stars: 5,
        location: 'Querétaro, Querétaro'
    },
    {
        name: 'Pedro Martínez',
        description: '“El resultado fue bueno, aunque tuve que esperar un poco. A pesar de eso, quedé satisfecho con el resultado final.”',
        stars: 3,
        location: 'Cancún, Quintana Roo'
    },
    {
        name: 'Lucía Torres',
        description: '“¡Una experiencia increíble! El estilista fue muy profesional y entendió perfectamente lo que necesitaba. Lo recomendaré a mis amigos.”',
        stars: 5,
        location: 'San Luis Potosí, San Luis Potosí'
    },
    {
        name: 'Javier García',
        description: '“Una experiencia única. El estilista es un verdadero artista y logró un resultado que superó mis expectativas. ¡Gracias infinitas!”',
        stars: 5,
        location: 'Tijuana, Baja California'
    }
])

const psCarousel = {
    root: {
        class: 'h-full'
    },
    contentContainer: {
        class: 'h-full'
    },
    content: {
        class: 'h-full'
    },
    itemList: {
        class: 'h-full'
    }
} as CarouselPassThroughOptions

</script>