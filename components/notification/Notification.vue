<template>
    <div class="notification">
        <transition name="slide">
            <NotificationItem v-if="is_show" :notification="notification"/>
        </transition>
    </div>
</template>

<script>
    import NotificationItem from "~/components/notification/NotificationItem";

    export default {
        name: 'Notiofication',
        components: {
            NotificationItem
        },
        data() {
            return {
                is_show: false,
                notification: {}
            }
        },
        created() {
            this.$nuxt.$on('notify', (notification) => {
                this.notification = notification;
                this.is_show = true;
                setTimeout(() => {
                    this.is_show = false;
                }, 3000)
            })
        }
    }
</script>

<style>
    .notification {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
    }
    .slide-enter,
    .slide-leave-to {
        opacity: 0;
        transform: translate3d(0, -15px, 0);
    }
</style>
