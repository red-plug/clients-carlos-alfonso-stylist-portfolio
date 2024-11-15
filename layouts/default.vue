<template>
    <SidebarLeft />
    <main class="px-20 md:px-24 py-10">
        <div>
            <slot />
        </div>
    </main>
    <SidebarRight />
    <ScrollTop />
</template>