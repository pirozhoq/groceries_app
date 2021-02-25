<template>
    <div>
        <div class="top">
            <div class="top_action"></div>
            <div class="top_title">Error</div>
            <div class="top_action"></div>
        </div>
        <div class="container">
            <div v-if="error.statusCode === 404" class="message">Page not found</div>
            <div v-else class="message">An error occurred</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['error']
    }
</script>
