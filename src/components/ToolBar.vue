<template>
  <div class="header">
    <router-link to="/jobs">jobs</router-link>
    <router-link to="/news">news</router-link>
    <router-link to="/ask">ask</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: #fff;
  background: #42b883;
}

.header a {
  color: #fff;
  text-decoration: none;
}

.header a::after {
  content: "|";
  margin: 0 0.5rem;
}

.header a:nth-last-child(1)::after {
  display: none;
}

.header .router-link-exact-active {
  color: #35495e;
}
</style>
