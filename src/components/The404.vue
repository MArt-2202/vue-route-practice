<template>
  <div class="page-not-found">
    <div>
      <h1>Page not found</h1>
      <router-link :to="{ name: 'teams' }">Go to teams list</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'The404',
};
</script>
<style scoped>
.page-not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page-not-found div {
  max-width: 1000px;
  padding: 30px 15px;
}
</style>
