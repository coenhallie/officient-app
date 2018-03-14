<template>
  <div>
    <h3 class="column-header">Contact Information</h3>
    <b> Email address:</b> {{employeedetails.email || 'No email address provided'}}<br>
    <b> Phone number:</b> {{employeedetails.phone || 'No Phone number provided'}}
    <hr>
    <h4 class="column-header"> Address Details </h4>
    <b> Street name: </b>{{employeedetails.address.line_1 || 'No street name provided'}}<br>
    <b> Zipcode: </b>{{employeedetails.address.zipcode || 'No zipcode provided'}}<br>
    <b> City: </b>{{employeedetails.address.city || 'No city provided'}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Contact',
  data () {
    return {
    }
  },
  computed: mapState([
    'employeedetails'
  ])
}
</script>

<style scoped>
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

</style>
