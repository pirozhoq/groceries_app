<template>
    <div class="count">
        <button type="button" @click="decValue()">
            <img :src="require(`/assets/images/minus.svg`)" alt="">
        </button>
        <input type="text" :value="count_value" readonly="">
        <button type="button" @click="incValue()">
            <img :src="require(`/assets/images/plus.svg`)" alt="">
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Count',
        props: ['value'],
        data() {
            return {
                count_value: parseInt(this.value)
            }
        },
        methods: {
            incValue() {
                this.count_value = this.count_value + 1;
                this.$emit('changed', this.count_value);
            },
            decValue() {
                this.count_value = this.count_value > 1 ? this.count_value - 1 : 1;
                this.$emit('changed', this.count_value);
            }
        }
    }
</script>

<style>
    .count {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .count button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        padding: 12px;
        background: none;
    }
    .count button img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .count input {
        width: 40px;
        height: 40px;
        padding: 0;
        border: 1px solid #E2E2E2;
        border-radius: 8px;
        text-align: center;
        cursor: default;
    }
</style>
