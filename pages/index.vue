<template>
    <div :class="general.pageBg">
        <NuxtLayout name="custom" title="Welcome" :page-name="$route.name" />
    </div>
</template>

<script setup lang="ts">
import { general } from '~/store';
definePageMeta({
    pageTransition: {
        name: 'page',
        mode: 'in-out',
    }
});

</script>