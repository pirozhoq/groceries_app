<template>
    <div class="product">
        <NuxtLink class="image product_image" :to="`/product/${product.id}`">
            <img :src="require(`@/static/product/${product.image}`)" alt="">
        </NuxtLink>
        <p class="product_name">
            <NuxtLink :to="`/product/${product.id}`">{{ product.name }}</NuxtLink>
        </p>
        <div class="product_measure">{{ product.measure }}</div>
        <div class="product_incart">
            <div class="product_price">${{ product.price }}</div>
            <button class="product_button">
                <img :src="require(`/assets/images/add.svg`)" alt="">
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',
        props: ['product']
    }
</script>

<style>
    .product {
        width: calc((100% - 40px) / 2);
        margin: 0 10px 20px;
        padding: 15px;
        border: 1px solid #E2E2E2;
        border-radius: 15px;
    }
    .product_image {
        height: 100px;
        margin: 0 0 15px;
    }
    .product_name {
        height: 40px;
        margin: 0 0 5px;
        overflow: hidden;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: #181725;
    }
    .product_name a {
        text-decoration: none;
    }
    .product_measure {
        font-size: 14px;
        font-weight: 500;
        color: #7C7C7C;
    }
    .product_incart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0 0;
    }
    .product_price {
        font-size: 18px;
        font-weight: 600;
    }
    .product_button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        padding: 0;
        border-radius: 8px;
        background: #53B175;
    }
    .product_button img {
        width: 16px;
        height: 16px;
    }
</style>
