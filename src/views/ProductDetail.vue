<template>
    <span>ProductDetail: {{ productId }}</span>
</template>

<script>

export default {
    name: 'ProductDetail',
    data() {
        return {
            productId: 0
        };
    },
    mounted() {
        console.log("route.params: ", this.$route.params)
        this.productId = this.$route.params.id        
    }
}
</script>

<style></style>