<template>
    <Header />
    <div>
        <button @click="$router.go(-1)" class='back-button bg-lime-500 text-white text-center rounded-md h-10 w-14 m-4'>Back</button>
        <h1 class="text-center align-middle min-h-fit">This is a page about the project</h1>
    </div>
    <Footer />
</template>
