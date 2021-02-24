<template>
    <div class="wrap">
        <Notification/>
        <Nuxt/>
        <Nav/>
    </div>
</template>

<script>
    import Nav from "~/components/Nav";
    import Notification from "~/components/notification/Notification";

    export default {
        components: {
            Nav,
            Notification
        }
    }
</script>

<style></style>
