<template>
    <SidebarLeft />
    <main class="px-20 md:px-24 pt-10">
        <div>
            <slot />
        </div>
        <Footer />
    </main>
    <SidebarRight />
    <ScrollTop />
</template>