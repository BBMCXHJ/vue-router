<template>
    <div class="container mt-4">
        <h1>Products</h1>
        <div class="row">
            <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
                <div class="card">
                    <img :src="product.image" class="card-img-top" alt="Product image">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text"><strong>Price:</strong> ${{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProductView',
    data() {
        return {
            products: [
                { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
                { id: 3, name: 'Product 3', price: 49.99, image: 'https://via.placeholder.com/150' }
            ]
        }
    }
}
</script>

<style scoped>
.card-img-top {
    height: 200px;
    object-fit: cover;
}
</style>
