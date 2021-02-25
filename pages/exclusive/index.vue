<template>
    <div>
        <div class="top">
            <div class="top_action"></div>
            <div class="top_title">Exclusive</div>
            <div class="top_action"></div>
        </div>
        <div class="container">
            <ProductList :products="products"/>
        </div>
    </div>
</template>

<script>
    import ProductList from "~/components/ProductList";

    export default {
        data() {
            return {
                products: this.$store.state.products.list.filter(product => product.id%2 == 0)
            }
        }
    }
</script>

<style></style>
