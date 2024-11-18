<template>
    <section id="gallery-styles">
       <SectionGallery />
    </section>
    <section id="about-me">
        <SectionAbout />
    </section>
    <section id="testimonials">
        <SectionTestimonials />
    </section>
    <section id="contact">
        <SectionContact />
    </section>
</template>
<script setup lang="ts">
useSeoMeta({
    title: 'Carlos Alfonso Stylist | Inicio',
    ogTitle: 'Carlos Alfonso Stylist',
    description: '',
    ogDescription: '',
    ogImage: '/images/me.webp',
})
</script>