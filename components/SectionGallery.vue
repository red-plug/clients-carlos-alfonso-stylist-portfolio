<template>
  <div class="flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-9 lg:grid-rows-6 h-auto sm:h-[75rem] md:h-[90rem] lg:h-[60rem] xl:h-[75rem] gap-y-4 sm:gap-4 sm:px-4 md:px-0">
    <GalleryPhoto class="sm:row-span-3" label="Natural" photo="/images/natural-1.webp" :interval="4500">
      <p class="mt-4">
        ¿Te sientes más tú en prendas frescas, simples y en tonos naturales? El estilo natural es ideal para quienes aman la comodidad y buscan reflejar una imagen genuina y tranquila.
      </p>
      <p class="font-bold mt-16">
        Consejos:
      </p>
      <ul class="mt-4 list-disc	list-outside ps-4">
        <li>
          Opta por materiales naturales como lino y algodón; estos tejidos no solo son frescos, sino también amigables con el planeta.
        </li>
        <li>
          Usa colores inspirados en la naturaleza como verde oliva y beige para mantener un look armonioso y equilibrado. Los Jeans también son una opción intelige
        </li>
      </ul>
    </GalleryPhoto>
    <GalleryPhoto class="sm:row-span-2" label="Business Casual" photo="/images/business-casual-1.webp" :interval="6000">
      <p class="mt-4">
        El estilo Business Casual es la combinación perfecta entre profesionalismo y comodidad. Es ideal para quienes buscan proyectar confianza sin perder un toque relajado y moderno. Con la mezcla adecuada de prendas clave como blazers, camisas de corte limpio, pantalones chinos o faldas midi, puedes adaptarlo a cualquier entorno laboral y destacar con un look impecable.
      </p>
      <p class="font-bold mt-16">
        Consejos:
      </p>
      <ul class="mt-4 list-disc	list-outside ps-4">
        <li>
          Elige telas de calidad: Opta por tejidos como algodón, lana o mezclas que sean duraderas y versátiles.
        </li>
        <li>
          Apuesta por colores neutros: Tonos como azul marino, gris, beige o blanco son ideales para combinaciones elegantes y fáciles.
        </li>
      </ul>
    </GalleryPhoto>
    <GalleryPhoto class="sm:row-span-3" label="Elegante" photo="/images/elegant-1.webp" :interval="9000">
      <p class="mt-4">
        Perfecto para quienes buscan distinción y refinamiento en cada detalle. El estilo elegante habla de sofisticación y buen gusto. Ideal para eventos importantes o para quienes buscan una imagen siempre pulcra.
      </p>
      <p class="font-bold mt-16">
        Consejos:
      </p>
      <ul class="mt-4 list-disc	list-outside ps-4">
        <li>
          Escoge prendas de cortes limpios y tejidos de alta calidad. Los trajes y vestidos bien ajustados serán siempre una apuesta segura.
        </li>
        <li>
          Mantén los accesorios simples, pero impactantes; un buen reloj o un par de aretes delicados complementarán tu look sin robar protagonismo.
        </li>
      </ul>
    </GalleryPhoto>
    <GalleryPhoto class="sm:row-span-3 lg:col-start-1 lg:row-start-4" label="Romántico" photo="/images/romantic-1.webp" :interval="4500">
      <p class="mt-4">
        Si amas los detalles delicados y los tonos suaves, ¡el estilo romántico está hecho para ti! Con encajes, volantes y colores pastel, lograrás un look soñador que destaca por su elegancia y femineidad.
      </p>
      <p class="font-bold bt-16">
        Consejos:
      </p>
      <ul class="mt-4 list-disc	list-outside ps-4">
        <li>
          Incorpora vestidos y blusas con detalles sutiles, como encaje o estampados florales, para un toque encantador.
        </li>
        <li>
          Los tonos pastel, como rosa o lavanda, le dan a tu outfit esa suavidad que hará que te sientas elegante y cómoda.
        </li>
      </ul>
    </GalleryPhoto>
    <GalleryPhoto class="sm:row-span-3 lg:col-start-2 lg:row-start-3" label="Dramático" photo="/images/drama-1.webp" :interval="6000">
      <p class="mt-4">
        El estilo Dramático está hecho para quienes aman destacar y ser el centro de atención con looks impactantes, audaces y llenos de personalidad. Este estilo se caracteriza por líneas arquitectónicas, colores intensos y contrastes atrevidos que transmiten seguridad y poder. Es perfecto para quienes disfrutan romper moldes y mostrar su lado más sofisticado y llamativo.
      </p>
      <p class="font-bold bt-16">
        Consejos:
      </p>
      <ul class="mt-4 list-disc	list-outside ps-4">
        <li>
          Elige prendas con cortes estructurados y formas únicas: Busca piezas con volúmenes, asimetrías o detalles arquitectónicos que creen impacto visual. Un abrigo de diseño o un vestido con pliegues únicos puede ser el protagonista de tu look.
        </li>
        <li>
          Apuesta por colores intensos y contrastes: Incorpora tonos como rojo, negro, blanco o incluso metalizados, y combínalos con accesorios llamativos como bolsos geométricos o zapatos de diseño exclusivo.
        </li>
      </ul>
    </GalleryPhoto>
    <GalleryPhoto class="sm:row-span-3 lg:col-start-3 lg:row-start-4" label="Creativo" photo="/images/creative-1.webp">
      <p class="mt-4">
        Si te encanta experimentar con tus outfits y ser el centro de atención, el estilo creativo es para ti. Aquí no hay reglas: mezcla estampados, colores vibrantes y texturas para reflejar tu personalidad única.
      </p>
      <p class="font-bold bt-16">
        Consejos:
      </p>
      <ul class="mt-4 list-disc	list-outside ps-4">
        <li>
          Atrévete a combinar patrones o colores que nunca hubieras imaginado juntos. ¡Tu estilo es una obra de arte!
        </li>
        <li>
          Agrega accesorios llamativos y personales, como collares grandes o anillos coloridos, para mostrar tu lado más original.
        </li>
      </ul>
    </GalleryPhoto>
    <GalleryPhoto class="col-start-2 lg:row-start-6 row-span-3" label="Seductor" photo="/images/seductor-1.webp" :interval="9000">
      <p class="mt-4">
        ¿Te gusta destacar y sentirte seguro de ti mismo? Con el estilo seductor puedes resaltar lo mejor de ti de una manera elegante. Prendas ajustadas y detalles de lujo harán que tu look sea simplemente irresistible.
      </p>
      <p class="font-bold bt-16">
        Consejos:
      </p>
      <ul class="mt-4 list-disc	list-outside ps-4">
        <li>
          Prueba cortes que realcen tu figura y juega con detalles como transparencias o escotes sutiles. Menos es más.
        </li>
        <li>
          Colores como el negro, rojo o burdeos harán que tu outfit tenga ese toque de sensualidad sin perder la clase.
        </li>
      </ul>
    </GalleryPhoto>
  </div>
</template>