<template>
    <div class="slider">
        <splide :options="options">
            <splide-slide>
                <a class="slider-item" href="#">
                    <img src="/carousel/banner1.jpg" alt="">
                </a>
            </splide-slide>
            <splide-slide>
                <a class="slider-item" href="#">
                    <img src="/carousel/banner2.jpg" alt="">
                </a>
            </splide-slide>
            <splide-slide>
                <a class="slider-item" href="#">
                    <img src="/carousel/banner3.jpg" alt="">
                </a>
            </splide-slide>
        </splide>
    </div>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';

    export default {
        name: 'Slider',
        components: {
            Splide,
            SplideSlide
        },
        data() {
            return {
                options: {
                    type: 'fade',
                    rewind: true,
                    perPage: 1,
                    autoplay: true,
                    interval: 4000,
                    navigation: false,
                    speed: 500,
                    arrows: false
                }
            }
        }
    }
</script>

<style>
    .splide__pagination__page {
        background: rgba(3, 3, 3, .3);
    }
    .splide__pagination__page.is-active {
        background: #53B175;
    }
</style>
