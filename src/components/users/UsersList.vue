<template>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
  <button @click="saveChanges">Save changes</button>
</template>

<script>
import UserItem from './UserItem';

export default {
  name: 'UserList',
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    };
  },
  inject: ['users'],
  //   beforeRouteEnter(to, from, next){
  // 		console.log(to, from);
  // 		next();
  //   },
  methods: {
    saveChanges() {
      this.changesSaved = true;
    },
  },
  // Срабатывает перед переходом на другой машрут
  // Проверка перед уходм с маршрута
  beforeRouteLeave(to, from, next) {
    //  console.log(to, from);

    if (this.changesSaved) {
      next();
    } else {
      const leavePage = confirm('Покидаете страницу ?');
      next(leavePage);
    }
  },
  // Срабатывает после перехода на другой маршрут
  //   unmounted() {
  //     console.log('Unmounted');
  //   },
};
</script>

<style scoped>
ul {
  margin: 2rem 0;
}
</style>
