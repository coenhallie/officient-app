<template>
  <div class="employee-wrapper">
    <EmployeeHeader/>
  <section class="section">
    <div class="container">
      <div class="columns has-text-left">
        <div class="column is-one-quarter">
            <Contact/>
        </div>
        <div class="column is-one-quarter">
          <Commute/>
        </div>
        <div class="column is-one-quarter">
          <Assets/>
        </div>
        <div class="column is-one-quarter">
          <Wages/>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import EmployeeHeader from '../Views/EmployeeHeader'
import Contact from '../Views/Contact'
import Commute from '../Views/Commute'
import Assets from '../Views/Assets'
import Wages from '../Views/Wages'

export default {
  name: 'EmployeeDetails',
  components: {
    EmployeeHeader,
    Contact,
    Commute,
    Assets,
    Wages
  },
  data () {
    return {
    }
  },
  mounted: function () {
    this.$store.dispatch('LOAD_EMPLOYEE_LIST')
    this.$store.dispatch('LOAD_EMPLOYEE_DETAILS')
    this.$store.dispatch('LOAD_GOOGLE_API')
    this.$store.dispatch('LOAD_ASSET_DATA')
    this.$store.dispatch('LOAD_WAGE_DATA')
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

h2 {
  font-size: 26px;
  font-weight: bold;
}

h3 {
  font-size: 23px;
  font-weight: bold;
}

h4 {
  font-size:20px;
  font-weight: bold;
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
  color: #42b983;
}

.column {
  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16), 0 2px 8px 0 rgba(0,0,0,0.12);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16), 0 2px 8px 0 rgba(0,0,0,0.12);
  margin:10px;
  overflow: auto;
  height: 60vh;
}

.column-header {
  padding-bottom:30px;
}
</style>
