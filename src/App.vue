<template>
  <!-- <the-navigation></the-navigation> -->
  <router-view name="navigation"></router-view>
  <main>
    <div class="container">
      <!-- name="default" -->
      <router-view></router-view>
    </div>
  </main>
  <router-view name="footer"></router-view>
</template>

<script>
// import TheNavigation from '@/components/nav/TheNavigation';
export default {
  data() {
    return {
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

#app {
  display: flex;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  flex-direction: column;
}

header,
footer {
  flex: 0 0 auto;
}

main {
  flex: 1 0 auto;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 1030px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

footer {
  background-color: #ededed;
}

footer .container {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
