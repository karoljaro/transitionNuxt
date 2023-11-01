<template>
    <div :class="`page ${pageName}`">
        <TheHeader/>
        <div class="page-wrap _container">
            <TheTitle :title="custom_props.title"/>
            
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
    const custom_props = defineProps<{
        title: string,
        pageName: string,
    }>()
</script>

<style scoped>
    ._container {
        widows: 100%;
        padding-inline: 32px;
    }
</style>