<template>
    <NuxtLink class="category" :to="`/catalog/${ category.id }`">
        <div class="image category_image">
            <img :src="require(`@/static/category/${ category.image }`)" alt="">
        </div>
        <p class="category_name">{{ category.name }}</p>
    </NuxtLink>
</template>

<script>
    export default {
        name: 'Category',
        props: ['category']
    }
</script>

<style>
    .category {
        display: block;
        width: calc((100% - 40px) / 2);
        margin: 0 10px 20px;
        padding: 15px;
        border: 1px solid #E2E2E2;
        border-radius: 15px;
        text-decoration: none;
    }
    .category:nth-child(6n+1) {
        border-color: rgba(83,177,117, .7);
        background: rgba(83,177,117, .1);
    }
    .category:nth-child(6n+2) {
        border-color: rgba(248,164,76, .7);
        background: rgba(248,164,76, .1);
    }
    .category:nth-child(6n+3) {
        border-color: rgba(247,165,147, 1);
        background: rgba(247,165,147, .25);
    }
    .category:nth-child(6n+4) {
        border-color: rgba(211,176,224, 1);
        background: rgba(211,176,224, .25);
    }
    .category:nth-child(6n+5) {
        border-color: rgba(253,229,152, 1);
        background: rgba(253,229,152, .25);
    }
    .category:nth-child(6n+6) {
        border-color: rgba(183,223,245, 1);
        background: rgba(183,223,245, .25);
    }
    .category_image {
        height: 100px;
        margin: 0 0 15px;
    }
    .category_name {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        margin: 0 0 5px;
        overflow: hidden;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
        color: #181725;
    }
</style>
