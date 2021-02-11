<template>
    <div class="container">
        <h1 class="title">{{ category.name }}</h1>
        <ProductList :products="products"/>
    </div>
</template>

<script>
    import ProductList from "~/components/ProductList";

    window.scrollTo(0, 0);

    export default {
        scrollToTop: true,
        async asyncData({ params, store }) {
            return {
                category: store.state.categories.list.find(category => category.id == params.id),
                products: store.state.products.list.filter(product => product.category_id == params.id)
            }
        }
    }
</script>

<style></style>
