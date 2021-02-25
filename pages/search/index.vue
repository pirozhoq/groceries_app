<template>
    <div>
        <div class="top">
            <div class="top_action"></div>
            <div class="top_title">Search</div>
            <div class="top_action"></div>
        </div>
        <div class="container">
            <Search/>
        </div>
        <div v-if="filtered_list.length" class="container">
            <ProductList :products="filtered_list"/>
        </div>
        <div v-else class="container">
            <div class="message">No results</div>
        </div>
    </div>
</template>

<script>
    import Search from "~/components/Search";

    export default {
        components: {
            Search
        },
        data() {
            return {
                search: '' || this.$route.query.q
            }
        },
        watch: {
            '$route.query.q'() {
                this.search = this.$route.query.q
            }
        },
        computed: {
            filtered_list() {
                return this.$store.state.products.list.filter(product => {
                    return product.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    }
</script>

<style></style>
