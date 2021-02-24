<template>
    <div :class="['notification_item', notification.type]">{{ notification.text }}</div>
</template>

<script>
    export default {
        name: 'Notification',
        props: ['notification'],
        transition: 'slide'
    }
</script>

<style scoped>
    .notification_item {
        padding: 5px 10px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        color: #fff;
    }
    .info {
        background: #A8A29E;
    }
    .success {
        background: #22C55E;
    }
    .warn {
        background: #FACC15;
    }
    .error {
        background: #EF4444;
    }
</style>
