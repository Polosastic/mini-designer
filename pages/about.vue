<template>
    <Header />
    <div>
        <router-link to="/" v-slot="{href, navigate}">
            <button :href="href" @click="navigate" class='back-button bg-lime-500 text-white text-center rounded-md h-10 w-14 m-4'>Back</button>
        </router-link>
        <h1 class="text-center align-middle min-h-fit">This is a page about the project</h1>
    </div>
    <Footer />
</template>
<script lang="ts">

</script>