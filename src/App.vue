<template>
  <div class="container">
    <nav class="navbar">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/product" class="nav-link">Product</RouterLink>
    </nav>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 8px;
}

.nav-link {
  margin: 0 15px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}

.content {
  display: flex;
  justify-content: center;
}
</style>
