<template>
    <SidebarLeft />
    <main class="px-20 md:px-24 pt-10">
        <div>
            <slot />
        </div>
        <Footer />
    </main>
    <SidebarRight />
    <ScrollTop :pt="scrollTopOptions" />
</template>
<script setup lang="ts">

import type { ScrollTopPassThroughOptions } from 'primevue/scrolltop';
const scrollTopOptions = {
    root: {
        class: 'text-white'
    }
} as ScrollTopPassThroughOptions
</script>