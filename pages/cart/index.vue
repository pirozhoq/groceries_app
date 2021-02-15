<template>
    <div>
        <div class="top">
            <div class="top_action"></div>
            <div class="top_title">My Cart</div>
            <div class="top_action"></div>
        </div>
        <div v-if="products.length" class="container">
            <CartProduct v-for="(product, index) in products" :key="index" :product="product"/>
            <button class="button cart_button" type="button">Checkout</button>
        </div>
        <div v-else class="container">
            <div class="message">Empty cart</div>
        </div>
    </div>
</template>

<script>
    import CartProduct from "~/components/cart/CartProduct";

    export default {
        methods: {
            getProductInfo(item) {
                let product = this.$store.state.products.list.find(x =>x.id == item.id);
                return { ...product, quantity: item.quantity };
            }
        },
        computed: {
            products() {
                return this.$store.state.cart.list.map(item => this.getProductInfo(item));
            }
        }
    }
</script>

<style>
    .cart_button {
        margin: 25px 0 0;
    }
</style>
