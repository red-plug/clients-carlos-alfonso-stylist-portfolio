<template>
    <div class="h-screen grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <div class="col-span-1 flex flex-col justify-center px-4  sm:px-0 lg:px-16">
            <div class="mb-2" data-aos="fade-down">
                <Button rounded severity="secondary" size="small" class="px-8 text-primary" aria-label="Botón de adorno">
                    Contacto
                </Button>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold leading-tight" data-aos="fade-right">
                ¿Estás listo para cambiar tu guardarropa?
                <span class="text-primary">
                    Contáctame
                </span>
            </h2>
            <div class="hidden md:flex justify-end" data-aos="zoom-in">
                <NuxtImg src="/images/contact.webp" alt="Imagen de contacto" class="transition-all duration-500 w-1/3 rounded-full hover:rounded-3xl border-2 border-primary border-dashed"/>
            </div>
        </div>
        <div class="col-span-1 flex flex-col justify-center" data-aos="flip-left">
            <form @submit.prevent="submitMessage">
                <Fluid>
                    <FloatLabel>
                        <Textarea id="message" v-model="message" rows="8" cols="30" class="resize-none" required />
                        <label for="message">Mensaje</label>
                    </FloatLabel>
                </Fluid>
                <div class="flex md:justify-end mt-2">
                    <div class="w-full md:w-auto">
                        <Button type="submit" class="text-white w-full" aria-label="Enviar mensaje de contacto">
                            Enviar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const { message } = useMessage()

const submitMessage = () => {
    window.open(`https://wa.me/523331272308?text=${message.value}`, '_blank')
}
</script>