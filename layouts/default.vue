<template>
    <div class="wrap">
        <div class="scroll">
            <Nuxt />
            <Nav/>
        </div>
    </div>
</template>

<script>
    import Nav from "~/components/Nav";

    export default {
        components: {
            Nav
        }
    }
</script>

<style></style>
