<template>
    <div class="product_item">
        <div class="product_top">
            <div class="top">
                <div class="top_action">
                    <button class="top_button"
                            type="button"
                            @click="goBack">
                        <img :src="require(`/assets/images/back.svg`)" alt="">
                    </button>
                </div>
                <div class="top_title"></div>
                <div class="top_action">
                    <button class="top_button"
                            type="button"
                            @click="addToFav">
                        <img v-if="isFavorite" :src="require(`/assets/images/fav-active.svg`)" alt="">
                        <img v-else :src="require(`/assets/images/fav.svg`)" alt="">
                    </button>
                </div>
            </div>
            <div class="image product_image">
                <img :src="require(`/static/product/${ product.image }`)" alt="">
            </div>
        </div>
        <div class="product_content">
            <div class="container">
                <h1 class="product_name">{{ product.name }}</h1>
                <div class="product_measure">{{ product.measure }}</div>
                <div class="product_incart">
                    <Count :value="quantity" @changed="changeQuantity"/>
                    <div class="product_price">${{ product.price }}</div>
                </div>
                <div class="product_button">
                    <button class="button"
                            type="button"
                            @click="addToCart">Add To Cart</button>
                </div>
                <ProductTab v-for="(tab, index) in tab_list" :key="index" :tab="tab"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Count from "~/components/Count";
    import ProductTab from "~/components/ProductTab";

    export default {
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
                ],
                quantity: 1
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            addToCart() {
                this.$store.commit('cart/addToList', {
                    id: this.product.id,
                    quantity: this.quantity
                });

                $nuxt.$emit('notify', {
                    type: 'success',
                    text: 'Added to Cart'
                });
            },
            changeQuantity(quantity) {
                this.quantity = quantity;
            },
            addToFav() {
                this.$store.commit('favorite/toggleInList', this.product.id);
            }
        },
        computed: {
            isFavorite() {
                let product_id = this.$route.params.id;
                return this.$store.state.favorite.list.find(product => product == product_id)
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
        padding: 30px 0;
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
        margin: 0 0 20px;
    }
    .product_price {
        font-size: 24px;
        font-weight: 700;
        color: #181725;
    }
    .product_button {
        margin: 0 0 25px;
    }
</style>
