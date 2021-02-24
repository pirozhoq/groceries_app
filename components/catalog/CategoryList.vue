<template>
    <div class="category_list">
        <Category v-for="(category, index) in categories" :key="index" :category="category"/>
    </div>
</template>

<script>
    import Category from "~/components/catalog/Category";
    export default {
        name: 'CategoryList',
        data() {
            return {
                categories: this.$store.state.categories.list
            }
        }
    }
</script>

<style>
    .category_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 0 -10px 10px;
    }
</style>
