<template>

    <div class="page-mask"></div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page-mask {
    position: fixed;
    inset: 0;
    z-index: $z-mask;
    pointer-events: none;
}

.page_white .page-mask {
    background-color: $color-white;
}

.page_black .page-mask {
    background-color: $color-black;
}
</style>