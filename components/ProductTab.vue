<template>
    <div :class="['product_tab', { 'product_tab_active': is_active }]">
        <div class="product_tab_head"
             @click="toggleTab()">
            <p class="product_tab_title">{{ tab.title }}</p>
            <button class="product_tab_button" type="button">
                <img :src="require(`/assets/images/expand.svg`)" alt="">
            </button>
        </div>
        <div class="product_tab_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consectetur deleniti distinctio doloribus, enim facere id illum in magnam obcaecati pariatur quam quidem quos reprehenderit sapiente tempora tenetur voluptate.</div>
    </div>
</template>

<script>
    export default {
        name: 'ProductTab',
        props: ['tab'],
        data() {
            return {
                is_active: this.tab.active
            }
        },
        methods: {
            toggleTab() {
                this.is_active = !this.is_active;
            }
        }
    }
</script>

<style>
    .product_tab {
        padding: 15px 0;
        border-top: 1px solid #E2E2E2;
    }
    .product_tab_head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }
    .product_tab_title {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
    }
    .product_tab_button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        padding: 3px;
        background: none;
    }
    .product_tab_button img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .product_tab_content {
        display: none;
        padding: 10px 0 0;
        overflow: hidden;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.5;
        color: #7C7C7C;
    }

    .product_tab_active .product_tab_button {
        transform: rotate(90deg);
    }
    .product_tab_active .product_tab_content {
        display: block;
    }
</style>
