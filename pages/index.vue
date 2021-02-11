<template>
    <div>
        <div class="top">
            <div class="top_action"></div>
            <div class="top_title">Grocery</div>
            <div class="top_action"></div>
        </div>
        <div class="container">
            <Search/>
            <Slider/>
            <Carousel v-for="(carousel, index) in carousels" :carousel="carousel"/>
        </div>
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
