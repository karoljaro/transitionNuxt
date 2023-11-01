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
let key = 0;

</script>
    
<style scoped lang="scss">
.page-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    align-items: flex-start;
}

.imgag {
    transition: $default-transition
}
</style>