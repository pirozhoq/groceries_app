<template>
    <form class="search" @submit.prevent="Search">
        <input type="search" name="q" v-model="search_string" required="" placeholder="Search" autocomplete="off">
        <button type="submit">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0005 17.0005C11.7884 17.0005 12.5687 16.8453 13.2966 16.5438C14.0246 16.2423 14.686 15.8003 15.2431 15.2431C15.8003 14.686 16.2423 14.0246 16.5438 13.2966C16.8453 12.5687 17.0005 11.7884 17.0005 11.0005C17.0005 10.2126 16.8453 9.43236 16.5438 8.7044C16.2423 7.97645 15.8003 7.31501 15.2431 6.75786C14.686 6.20071 14.0246 5.75875 13.2966 5.45723C12.5687 5.1557 11.7884 5.0005 11.0005 5.0005C9.4092 5.0005 7.88308 5.63264 6.75786 6.75786C5.63264 7.88308 5.0005 9.4092 5.0005 11.0005C5.0005 12.5918 5.63264 14.1179 6.75786 15.2431C7.88308 16.3684 9.4092 17.0005 11.0005 17.0005ZM17.3205 15.9065L20.9005 19.4865C20.9959 19.5788 21.072 19.6892 21.1244 19.8113C21.1767 19.9333 21.2042 20.0645 21.2052 20.1973C21.2063 20.3301 21.1809 20.4618 21.1305 20.5846C21.0802 20.7075 21.0058 20.8191 20.9119 20.9129C20.8179 21.0067 20.7062 21.0809 20.5833 21.1311C20.4604 21.1813 20.3287 21.2065 20.1959 21.2052C20.0631 21.204 19.9319 21.1763 19.8099 21.1238C19.688 21.0713 19.5777 20.9951 19.4855 20.8995L15.9055 17.3195C14.298 18.5674 12.2753 19.1557 10.2493 18.9647C8.22322 18.7737 6.34611 17.8178 5.00005 16.2916C3.654 14.7653 2.94019 12.7834 3.00393 10.7494C3.06767 8.7154 3.90417 6.78213 5.34315 5.34315C6.78213 3.90417 8.7154 3.06767 10.7494 3.00393C12.7834 2.94019 14.7653 3.654 16.2916 5.00005C17.8178 6.34611 18.7737 8.22322 18.9647 10.2493C19.1557 12.2753 18.5674 14.298 17.3195 15.9055L17.3205 15.9065Z"/>
            </svg>
        </button>
    </form>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                search_string: '' || this.$route.query.q
            }
        },
        methods: {
            Search() {
                this.$router.push({
                    path: 'search',
                    query: { q: this.search_string }
                })
            }
        }
    }
</script>

<style>
    .search {
        position: relative;
        margin: 0 0 30px;
    }
    .search input {
        display: block;
        width: 100%;
        height: 50px;
        padding: 0 15px 0 50px;
        border: none;
        border-radius: 15px;
        font-size: 14px;
        font-weight: 600;
        background: #f2f3f2;
    }
    .search input::placeholder {
        color: #7c7c7c;
    }
    .search button {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 15px 0 0 15px;
        padding: 0;
        background: none;
    }
    .search button svg {
        fill: #181725;
    }
</style>
