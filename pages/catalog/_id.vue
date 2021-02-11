<template>
    <div>
        <div class="top">
            <div class="top_action"></div>
            <div class="top_title">{{ category.name }}</div>
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
        async asyncData({ params, store }) {
            return {
                category: store.state.categories.list.find(category => category.id == params.id),
                products: store.state.products.list.filter(product => product.category_id == params.id)
            }
        }
    }
</script>

<style></style>
