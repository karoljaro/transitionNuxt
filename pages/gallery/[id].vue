<template>
    <div :class="general.pageBg">
        <NuxtLayout name="custom" :title="`project ${$route.params.id}`" :page-name="`project-${$route.params.id}`">
            <div class="page-content_block">
                <div v-for="_ in 3">

                    <div class="page-content_block-photo">
                        <img src="/photo.jpeg" alt="photo">
                    </div>

                    <div class="page-content_block-text p1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum officiis totam, nemo saepe
                        perspiciatis velit. Vero illo laboriosam itaque nesciunt, officia molestias? Quia ratione, fuga ipsa
                        voluptate ducimus modi? Qui?
                    </div>
                </div>

                <div class="paget-next_project">
                    <NuxtLink class="page-next_project-link hover-fadein h2" :to="`/gallery/${+$route.params.id + 1}`">
                        next project - {{ +$route.params.id + 1 }}
                    </NuxtLink>
                </div>
            </div>

        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { general } from '~/store';

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
                element: '.page-content_block-photo',
            });
            contentAnimation({
                type: 'text',
                element: '.page-content_block-text',
            });
            contentAnimation({
                type: 'text',
                element: '.paget-next_project',
            })
        }

    });


</script>
    
<style scoped lang="scss">
.page-content_block {
    max-width: 600px;
    margin: 0 auto;
    padding: 32px 15px;
}

.page-content_block-text {
    margin-top: 16px;
}

.paget-next_project {
    padding-bottom: 32px;
    margin-top: 32px;
}

.page-next_project-link {
    text-transform: uppercase;
}
</style>