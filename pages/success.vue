<template>
    <Header />
    <div class="flex justify-center flex-col">
        <h1 class="text-center align-middle min-h-fit">The order was successful <br>
            Thanks for using Mini-designer
        </h1>
        <NuxtLink to="/" v-slot="{href, navigate}" class="flex justify-center">
            <button :href="href" @click="navigate" class='back-button bg-lime-500 font-semibold text-white text-center rounded-md p-2 m-4'>Design another product</button>
        </NuxtLink>
    </div>
    <Footer />
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDesignStore } from '~/stores/design';
const designStore = useDesignStore();
</script>