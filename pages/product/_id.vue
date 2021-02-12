<template>
    <div class="product_item">
        <div class="product_top">
            <div class="top">
                <div class="top_action">
                    <button class="top_button"
                            type="button"
                            @click="goBack()">
                        <img :src="require(`/assets/images/back.svg`)" alt="">
                    </button>
                </div>
                <div class="top_title"></div>
                <div class="top_action">
                    <button class="top_button"
                            type="button">
                        <img :src="require(`/assets/images/fav.svg`)" alt="">
                    </button>
                </div>
            </div>
            <div class="image product_image">
                <img :src="require(`/static/product/${product.image}`)" alt="">
            </div>
        </div>
        <div class="product_content">
            <div class="container">
                <h1 class="product_name">{{ product.name }}</h1>
                <div class="product_measure">{{ product.measure }}</div>
                <div class="product_incart">
                    <Count value="1"/>
                    <div class="product_price">${{ product.price }}</div>
                </div>
                <ProductTab v-for="(tab, index) in tab_list" :key="index" :tab="tab"/>
                <div class="product_button">
                    <button class="button" type="button">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Count from "~/components/Count";
    import ProductTab from "~/components/ProductTab";

    export default {
        layout: 'product',
        components: {
            Count,
            ProductTab
        },
        async asyncData({ params, store }) {
            return {
                product: store.state.products.list.find(product => product.id == params.id)
            }
        },
        data() {
            return {
                tab_list: [
                    { title: 'Product Detail', active: true },
                    { title: 'Nutritions', active: false },
                    { title: 'Reviews', active: false }
                ]
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            toggleBlock() {

            }
        }
    }
</script>

<style scoped>
    .product_top {
        background: #F2F3F2;
    }
    .product_image {
        height: 200px;
        padding: 0 0 30px;
    }
    .product_content {
        padding: 30px 0 0;
    }
    .product_name {
        margin: 0 0 10px;
        font-size: 24px;
        font-weight: 700;
    }
    .product_measure {
        margin: 0 0 30px;
        font-size: 16px;
        font-weight: 600;
        color: #7C7C7C;
    }
    .product_incart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 30px;
    }
    .product_price {
        font-size: 24px;
        font-weight: 700;
        color: #181725;
    }
    .product_button {
        position: sticky;
        bottom: 0;
        margin: 15px -20px 0;
        padding: 20px;
        border-radius: 15px 15px 0 0;
        background: #ffffff;
        box-shadow: 0 -6px 6px 0 rgba(230, 235, 243, .5);
    }
</style>
