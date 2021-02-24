<template>
    <div>
        <div class="top">
            <div class="top_action"></div>
            <div class="top_title">Favorites</div>
            <div class="top_action"></div>
        </div>
        <div v-if="products.length" class="container">
            <ProductList :products="products"/>
        </div>
        <div v-else class="container">
            <div class="message">No favorites</div>
        </div>
    </div>
</template>

<script>
    import FavProduct from "~/components/ProductList";

    export default {
        methods: {
            getProductInfo(item) {
                let product = this.$store.state.products.list.find(x =>x.id == item);
                return { ...product };
            }
        },
        computed: {
            products() {
                return this.$store.state.favorite.list.map(item => this.getProductInfo(item));
            }
        }
    }
</script>

<style></style>
