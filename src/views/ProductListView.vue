<template>
    <div class="container mt-4">
        <h1>Products</h1>
        <div class="row">
            <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
                <router-link :to="`/productlist/detail?id=${product.id}`" class="text-decoration-none">
                    <div class="card">
                        <img :src="product.image" class="card-img-top" alt="Product image">
                        <div class="card-body">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <p class="card-text"><strong>Price:</strong> ${{ product.price }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProductListView',
    data() {
        return {
            products: [
                { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
                { id: 3, name: 'Product 3', price: 49.99, image: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Product 4', price: 59.99, image: 'https://via.placeholder.com/150' },
                { id: 5, name: 'Product 5', price: 69.99, image: 'https://via.placeholder.com/150' },
                { id: 6, name: 'Product 6', price: 79.99, image: 'https://via.placeholder.com/150' }
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
