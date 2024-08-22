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
        console.log("route.query: ", this.$route.query)
        this.productId = this.$route.query.id        
    }
}
</script>

<style></style>