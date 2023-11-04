<template>
    <div>
        <div id="viewport">
            
            <ThePreloader />
            
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

onMounted(() => {
    useSmoothScrool();
})

</script>
