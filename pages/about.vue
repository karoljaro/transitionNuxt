<template>
    <div :class="general.pageBg">
        <NuxtLayout name="custom" title="about" :page-name="$route.name">
            <div class="page-content">
                <div class="page-conent_block p1" v-for="_ in 10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore cumque, non nobis laborum expedita
                    dolorum possimus fugiat ratione repellat nisi maiores et quasi commodi cupiditate explicabo quos earum
                    iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias, vitae sequi dicta dolor,
                    nostrum dignissimos totam quam ipsum sunt illo aspernatur eius. Hic nobis natus officia inventore
                    accusamus expedita!
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
    ([transitionFinish, preloaderVisible]) => {

        if (transitionFinish && !preloaderVisible) {
            contentAnimation({
                type: 'text',
                element: '.page-conent_block',
            })
        }

    })

</script>
    
<style scoped lang="scss">
.page-conent_block {
    padding-bottom: 32px;
}
</style>