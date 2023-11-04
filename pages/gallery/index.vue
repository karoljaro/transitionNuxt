<template>
    <div :class="general.pageBg">
        <NuxtLayout name="custom" title="galery" :page-name="$route.name">
            <div class="page-content">
                <NuxtLink class="page-conent_photo hover-image" v-for="(, key) in 10" :to="`/gallery/${key++}`">
                    <img src="/photo.jpeg" alt="photo">
                </NuxtLink>
            </div>

        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { general } from '~/store';
let key: number = 0;

definePageMeta({
    pageTransition: {
        name: 'page',
        mode: 'in-out'
    }
})

watch(() => [general.isTransitionFinish, general.isPreloaderVisible],
    ([isTransitionFinish, preloaderVisible]) => {

        if (isTransitionFinish && !preloaderVisible) {
            contentAnimation({
                type: 'image',
                element: '.page-conent_photo',
            })
        }

    });

</script>
    
<style scoped lang="scss">
.page-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    align-items: flex-start;
}
</style>