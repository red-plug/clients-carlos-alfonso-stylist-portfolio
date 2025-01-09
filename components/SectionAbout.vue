<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        <div class="col-span-1 flex gap-x-8 items-center lg:items-start">
            <div class="w-1/2 md:w-full">
                <NuxtImg src="/images/me.webp" alt="Carlos Alfonso Stylist" class="w-full lg:w-4/5 border-primary" data-aos="fade-right" />
            </div>
            <h2 class="text-2xl font-bold block md:hidden w-1/2">
                ¿Quién es <span class="text-primary">Carlos Alfonso Stylist</span>?
            </h2>
        </div>
        <div class="col-span-1 md:py-8 xl:py-16" data-aos="fade-up">
            <h2 class="text-3xl md:text-4xl font-bold hidden md:block">
                ¿Quién es  <span class="text-primary">Carlos Alfonso Stylist</span>?
            </h2>
            <p class="md:mt-8 mb-2">
                Desde niño, la moda ha sido parte de mi vida. Me fascinaba observar las pasarelas, las revistas de moda, experimentar con las telas en el taller de mi papá, o simplemente, ver a mi mamá arreglada para cada ocasión.            
            </p>
            <p class="mb-2">
                Siempre he disfrutado ayudar a quienes me rodean: amigas, tías, amigos y colegas, dándoles consejos para que se sientan cómodos y seguros con su estilo. Esto me llevó a especializarme tanto teórica como prácticamente para ofrecer un servicio de asesoría totalmente personalizado, adaptado a los gustos, rutinas y necesidades de cada persona.
            </p>
            <p class="mb-2">
                Si alguna vez te dijeron que no puedes combinar ciertos colores o estilos, ¡te mintieron! Estoy aquí para ayudarte a romper las reglas, a descubrir tu propia esencia a través de la ropa y a proyectar tu mejor versión con seguridad y estilo.
            </p>
            <p class="mb-2">
                Porque la moda se repite, pero tú estilo jamás. 
            </p>
            <p class="text-primary">
                ¿Te animas a dar el primer paso hacia tu mejor look?
            </p>
        </div>
        <div class="col-span-1 hidden lg:block" data-aos="fade-left">    
            <NuxtImg src="/images/me-2.webp" alt="imagen de un saco rojo" class="grayscale hover:grayscale-0 transition-color duration-1000" />
        </div>
    </div>
</template>