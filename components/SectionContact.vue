<template>
    <div class="h-screen">
        contact {{ message }}
    </div>
</template>

<script setup lang="ts">
const { message } = useMessage()
</script>