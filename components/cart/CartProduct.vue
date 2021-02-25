<template>
    <div class="product">
        <div class="image product_image">
            <img :src="require(`/static/product/${ product.image }`)" alt="">
        </div>
        <div class="product_content">
            <p class="product_name">{{ product.name }}</p>
            <div class="product_measure">{{ product.measure }}</div>
            <div class="product_incart">
                <Count :value="product.quantity" @changed="changeQuantity"/>
                <div class="product_price">${{ product_sum }}</div>
            </div>
            <button class="product_delete" type="button" @click="deleteFromCart">
                <img :src="require(`/assets/images/delete.svg`)" alt="">
            </button>
        </div>
    </div>
</template>

<script>
    import Count from "~/components/Count";

    export default {
        name: 'CartProduct',
        props: ['product'],
        methods: {
            changeQuantity(quantity) {
                this.$store.commit('cart/updateInList', {
                    id: this.product.id,
                    quantity: quantity
                });
            },
            deleteFromCart() {
                this.$store.commit('cart/delFromList', {
                    id: this.product.id
                });
            }
        },
        computed: {
            product_sum() {
                return Math.round(this.product.price * this.product.quantity * 100) / 100
            }
        }
    }
</script>

<style scoped>
    .product {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 0 25px;
        border-bottom: 1px solid #E2E2E2;
    }
    .product:last-child {
        border: none;
    }
    .product_image {
        width: 100px;
        height: 100px;
        padding: 0 20px 0 0;
    }
    .product_content {
        position: relative;
        width: calc(100% - 100px);
    }
    .product_delete {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        padding: 0;
        background: none;
    }
    .product_name {
        margin: 0 0 5px;
        padding: 0 30px 0 0;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: #181725;
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
        margin: 20px 0 0;
    }
    .product_price {
        font-size: 18px;
        font-weight: 600;
    }
</style>
