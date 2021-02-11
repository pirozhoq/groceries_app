<template>
    <div class="carousel">
        <div class="carousel_caption">
            <p class="carousel_title">{{ carousel.title }}</p>
            <a class="carousel_link" href="#">See all</a>
        </div>
        <splide :options="options">
            <splide-slide v-for="(product, index) in carousel.products" :key="index">
                <Product :product="product"/>
            </splide-slide>
        </splide>
    </div>
</template>

<script>
    import Product from "~/components/Product";
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';

    export default {
        name: 'Carousel',
        props: ['carousel'],
        components: {
            Product,
            Splide,
            SplideSlide
        },
        data() {
            return {
                options: {
                    type: 'loop',
                    perPage: 2,
                    gap: 20,
                    autoplay: true,
                    interval: 3000,
                    navigation: false,
                    pagination: false,
                    speed: 500,
                    arrows: false
                }
            }
        }
    }
</script>

<style>
    .carousel {
        margin: 0 0 30px;
    }
    .carousel_caption {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: 0 0 20px;
    }
    .carousel_title {
        margin: 0;
        font-size: 24px;
        font-weight: 600;
    }
    .carousel_link {
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
        color: #53B175;
    }

    .splide__slide .product {
        margin: 0;
        width: 100%;
    }
</style>
