<template>
    <div class="product_list">
        <Product v-for="(product, index) in products" :key="index" :product="product"/>
    </div>
</template>

<script>
    import Product from "~/components/Product";

    export default {
        name: 'ProductList',
        components: {
            Product
        },
        props: ['products']
    }
</script>

<style>
    .product_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 0 -10px -20px;
    }
</style>
