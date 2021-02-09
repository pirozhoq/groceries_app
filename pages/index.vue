<template>
    <div class="container">
        <h1 class="title">Grocery</h1>
        <Search/>
        <Slider/>
    </div>
</template>

<script>
    import Search from "~/components/Search";
    import Slider from "~/components/index/Slider";

    export default {
        components: {
            Search
        }
    }
</script>

<style></style>
