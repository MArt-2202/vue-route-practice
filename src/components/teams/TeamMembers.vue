<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem';

export default {
  name: 'TeamMembers',
  components: {
    UserItem,
  },
  inject: ['users', 'teams'],
  props: ['id'],
  created() {
    this.loadTeamMembers(this.id);
    //  console.log(`Query parameter: ${JSON.stringify(this.$route.query)}`);
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(id) {
      const selectedTeam = this.teams.find((team) => team.id === id),
        members = selectedTeam.members,
        selectedMembers = [];

      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }

      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  // как альтернатива watch
  //   beforeRouteUpdate(to, from, next) {
  //     console.log(to, from);
  //       this.loadTeamMembers(to.params.id);
  //     next();
  //   },
  watch: {
    id(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}
</style>
