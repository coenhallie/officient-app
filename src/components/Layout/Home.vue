<template>
  <div class="employee-list">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <EmployeeList/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EmployeeList from '../Views/EmployeeList'

export default {
  name: 'Home',
  components: {
    EmployeeList
  },
  data () {
    return {
    }
  },
  mounted: function () {
    this.$store.dispatch('LOAD_EMPLOYEE_LIST')
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #7957d5;
}

</style>
