<template>
    <div class="default-tilte h1">
        <div class="default-title_wrap">
            {{ title_props.title }}
        </div>
    </div>
</template>

<script setup lang="ts">
    const title_props = defineProps<{
        title: string,
    }>();
</script>

<style scoped lang="scss">
    .default-tilte {
        height: 100vh;
        height: 100dvh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>