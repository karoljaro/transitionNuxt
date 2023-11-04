<template>
    <div class="preloader">
        <div class="preloader-precent h1">
            {{precentage}}%
        </div>
    </div>
</template>

<script setup lang="ts">
const precentage = ref<any>(0);

onMounted(() => {
    const timeLine = gsap.timeline();

    timeLine.to(precentage, {
        progress: 100,
        duration: 1,
        onUpdate() {
            precentage.value = Math.floor(precentage.progress);
        },
        onComplete() {
            general.isPreloaderVisible = false;
            general.scrollLenis.start();
        }
    })

    timeLine.fromTo('.preloader', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100% 0% 100%)'
    }, {
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        duration: 1
    });
})

</script>

<style scoped lang="scss">
    .preloader {
        position: fixed;
        inset: 0;
        background-color: $color-white;
        z-index: $z-preloader;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>