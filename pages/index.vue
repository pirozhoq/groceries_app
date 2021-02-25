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
            <Carousel v-for="(carousel, index) in carousels" :key="index" :carousel="carousel"/>
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
                        products: this.$store.state.products.list.filter(product => product.id%2 == 0),
                        path: '/exclusive'
                    },
                    {
                        title: 'Best Selling',
                        products: this.$store.state.products.list.filter(product => product.id%2 != 0),
                        path: '/best'
                    }
                ]
            }
        }
    }
</script>

<style></style>
