<template>
    <div class="cursor-pointer" @click="showModal = true" data-aos="zoom-in">
        <div class="relative group sm:h-full overflow-hidden">
            <div class="absolute h-full w-full flex justify-center items-center transition-opacity ease-in-out delay-150 opacity-0 group-hover:opacity-75 duration-200 bg-black z-[1]">
                <h3 class="text-3xl font-medium hover:text-primary absolute">
                    {{ props.label }}
                </h3>
            </div>
            <img :src="props.photo" :alt="props.label" class="w-full transition-all duration-300 group-hover:scale-125 group-hover:grayscale-0" :class="{'grayscale': applyGrayscale}"/>
        </div>
        <Dialog v-model:visible="showModal" modal :header="props.label" class="w-full md:w-3/4">
            <div class="w-full h-full flex gap-x-4 lg:gap-x-8 py-4">
                <div class="w-3/5 lg:w-2/5 hidden md:block">
                    <img :src="props.photo" :alt="props.label" class="rounded transition-transform duration-300 ease-out hover:-rotate-1 hover:scale-105" />
                </div>
                <div class="w-full md:w-2/5 lg:w-3/5 flex flex-col">
                    <slot />

                    <div class="flex justify-center mt-16">
                        <Button as="a" href="/#contact" @click="makeContact" class="text-white">
                            Enseñame más
                        </Button>
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script setup lang="ts">

import { useIntervalFn } from '@vueuse/core';
const props = defineProps({
    label: String,
    photo: String,
    interval: Number
})

const applyGrayscale = ref(true)

const { setMessage } = useMessage()

const showModal = ref(false)
const makeContact = () => {
    const message = `Enseñame más del estilo ${props.label}`
    showModal.value = false
    setMessage(message)
}

useIntervalFn(() => {
    applyGrayscale.value = !applyGrayscale.value
}, props.interval)
</script>
