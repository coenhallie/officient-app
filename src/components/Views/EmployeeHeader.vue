<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <img :src="avatar" class="header-photo" onerror="this.src='http://www.gravatar.com/avatar/?d=mm'">
        <h1 class="title">
          {{ employeedetails.name }}
        </h1>
        <h2 class="subtitle">
          {{employeerole}}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'EmployeeHeader',
  data () {
    return {
    }
  },
  computed: mapState([
    'employeedetails',
    'employeename',
    'employeerole',
    'avatar'
  ])
}
</script>

<style scoped>
.header-photo {
  border-radius: 100px;
  width: 80px;
  height: 80px;
}
</style>
