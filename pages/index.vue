<template>
    <div class="container">
        <h1 class="title">Grocery</h1>
        <Search/>
        <Slider/>
        <ProductList :products="products"/>
    </div>
</template>

<script>
    import Search from "~/components/Search";
    import Slider from "~/components/index/Slider";
    import ProductList from "~/components/ProductList";

    export default {
        components: {
            Search,
            Slider,
            ProductList
        },
        data() {
            return {
                products: this.$store.state.products.list
            }
        }
    }
</script>

<style></style>
