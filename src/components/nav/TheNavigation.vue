<template>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'teams' }">Teams</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'users' }">Users</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheNavigation',
  methods: {},
};
</script>

<style scoped>
header {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #11005c;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

a {
  padding: 0.5rem 1.5rem;
  display: inline-block;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.active,
a:hover {
  color: #f1a80a;
  text-decoration: none;
}

.active {
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
