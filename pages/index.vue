<template>
    <div class="container">
        <h1 class="title">Grocery</h1>
        <Search/>
        <Slider/>
        <Carousel v-for="(carousel, index) in carousels" :carousel="carousel"/>
    </div>
</template>

<script>
    import Search from "~/components/Search";
    import Slider from "~/components/index/Slider";
    import Carousel from "~/components/index/Carousel";

    export default {
        components: {
            Carousel,
            Search,
            Slider
        },
        data() {
            return {
                carousels: [
                    {
                        title: 'Exclusive Offer',
                        products: this.$store.state.products.list
                    },
                    {
                        title: 'Best Selling',
                        products: this.$store.state.products.list
                    }
                ]
            }
        }
    }
</script>

<style></style>
