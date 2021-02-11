<template>
    <div class="product_item">
        <div class="top">
            <div class="top_action">
                <button class="top_button"
                        type="button"
                        @click="goBack()">
                    <img :src="require(`/assets/images/back.svg`)" alt="">
                </button>
            </div>
            <div class="top_title">{{ product.name }}</div>
            <div class="top_action">
                <button class="top_button"
                        type="button">
                    <img :src="require(`/assets/images/load.svg`)" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'product',
        async asyncData({ params, store }) {
            return {
                product: store.state.products.list.find(product => product.id == params.id)
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style></style>
