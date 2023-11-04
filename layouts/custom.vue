<template>
    <div :class="`page ${pageName}`">
        <TheHeader />
        <div class="page-wrap _container">

            <PageMask />
            
            <TheTitle :title="custom_props.title" />

            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

const custom_props = defineProps<{
    title: string,
    pageName: string,
}>();

watch(() => [general.isTransitionStart, general.isPreloaderVisible],
    ([transitionStart, preloaderVisible]) => {

        if (transitionStart && !preloaderVisible) {
            firstScreenAnimation({
                parent: `.${custom_props.pageName}`
            })
        }

    })
</script>

<style scoped>
._container {
    widows: 100%;
    padding-inline: 32px;
}
</style>