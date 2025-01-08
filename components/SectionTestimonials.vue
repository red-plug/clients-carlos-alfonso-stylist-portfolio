<template>
    <div class="relative h-64 md:h-auto" data-aos="fade-up">
        <img src="/images/testimonials.webp" class="hidden md:block" alt="Imagen de fondo de una mujer con estilo" />
        <div class="absolute  bg-surface-900 w-full md:w-6/12 h-full sm:h-2/3 md:h-full xl:h-1/2 left-0 md:left-1/3 -translate-y-1/2 md:translate-x-[5%] md:translate-x-1/4 top-1/2">
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
                        <div class="hidden md:block">
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
    description: string
    stars: number
}

const testimonials = ref<Testimonial[]>([
    {
        description: 'Super recomendable 👌 ✨️ Es muy hábil para identificar tonalidades en el estudio de colorimetria, te ayuda para tener más certeza de que ropa es apropiada para tu tipo de cuerpo y en general sentirte mejor con tu estilo 💖',
        stars: 5
    },
    {
        description: '!!Excelente servicio!! Es una persona muy profesional, con una excelente actitud de servicio y siempre enfocado a encontrar la mejor forma de explotar lo que tienes para lucir increíble. !Muy recomendado!',
        stars: 5
    },
    {
        description: 'Carlos se destaca por ser una excelente persona y un excelente asesor de imagen, tiene los conocimientos y la experiencia para recomendarte lo mejor tomando en cuenta: tu tono de piel, tamaño de ojos, labios, complexión, etc. Sin duda muy profesional en lo que hace! Si lo que buscas es un cambio de imagen y sentirte seguro con lo que vistes, contactalo!',
        stars: 5
    },
    {
        description: 'El mejor asesor de imagen, te orienta en todo momento, adapta tu look a tus gustos y necesidades diarias, abarca todos los temas colorimetria, como combinar y como salvar esas prendas que tanto te gustan. El portafolio que te entrega con tu análisis es muuuy completo tiene desde tipo de cuerpo y rostro hasta cortes de cabello, todo para una apariencia completa y si aún te quedan dudas con gusto te resuelve todas. El mejor que existe 👌🏻👌🏻👌🏻',
        stars: 5
    },
    {
        description: '¡Increíble experiencia! 🌈✨ Recientemente, tuve la suerte de someterme a un estudio de color con él y estoy encantada. Su habilidad para identificar las tonalidades que realzan mi piel es asombrosa. Ahora me siento más segura para elegir la ropa que realmente funciona para mi y hacer un cambio en mi guardarropa. ¡Recomendado al 100%! 👏🎨',
        stars: 5
    },
    {
        description: 'Me asesoró para el outfit de una boda y quedó increíble',
        stars: 5
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