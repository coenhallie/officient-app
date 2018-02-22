<template>
<div class="employee-wrapper">
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          <img :src="avatar" class="header-photo">
          <br>
          {{employeedetails.name}}
        </h1>
        <h2 class="subtitle">
          {{employeedetails.current_role.name}}
        </h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns has-text-left">
        <div class="column is-one-quarter">
          <h3 class="column-header">Contact Information</h3>
          <b> Email address:</b> {{employeedetails.email}}<br>
          <b> Phone number:</b> {{employeedetails.phone}}
          <hr>
          <h4 class="column-header"> Address Details </h4>
          {{employeedetails.address.line_1}}<br>
          {{employeedetails.address.zipcode}}<br>
          {{employeedetails.address.city}}
        </div>
        <div class="column is-one-quarter">
          <h3 class="column-header">Daily Commute</h3>
          <b>Total duration:</b> {{this.totalduration}}
          <hr>
          <h4 class="column-header"> recommended route </h4>
          <div class="transport" v-for="data in googledata" :key="data.id">
            {{data.html_instructions}}<br>
            <small><i>{{data.duration.text}} - {{data.distance.text}}</i></small>
            <hr>
          </div>
        </div>
        <div class="column is-one-quarter">
          <h3 class="column-header">Total Assets</h3>
          <div class="assets" v-for="asset in assets" :key="asset.id">
            <b>Product:</b> {{asset.name}}<br>
            <b>Price:</b> {{asset.price}}
            <hr>
          </div>
        </div>
        <div class="column is-one-quarter">
          <h3 class="column-header">Current Wage</h3>
          <b>Start date:</b> {{wages.start_date}}
          <br>
          <b>Estimated monthly cost:</b> {{wages.estimated_monthly_total}}
          <hr>
          <h4 class="column-header"> Billable minutes per day</h4>
          <b>Monday:</b> {{wages.weekly_time_engagement_minutes.monday}}<br>
          <b>Tuesday:</b> {{wages.weekly_time_engagement_minutes.tuesday}}<br>
          <b>Wednesday:</b> {{wages.weekly_time_engagement_minutes.wednesday}}<br>
          <b>Thursday:</b> {{wages.weekly_time_engagement_minutes.thursday}}<br>
          <b>Friday:</b> {{wages.weekly_time_engagement_minutes.friday}}<br>
          <b>Saturday:</b> {{wages.weekly_time_engagement_minutes.saturday}}<br>
          <b>Sunday:</b> {{wages.weekly_time_engagement_minutes.sunday}}<br>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EmployeeDetails',
  data () {
    return {
      employeedetails: [],
      googledata: [],
      assets: [],
      wages: [],
      totalduration: [],
      dates: [],
      avatar: []
    }
  },
  methods: {
    getAssetData () {
      axios
        .get(`/api/assets/list`, {
          headers: {
            'Authorization': 'Bearer 5ffede2007d78f1920eb54a3ffa606aa8a279990'
          }
        })
        .then(response => {
          this.assets = response.data.data
        })
        .catch(e => {
          console.log(e)
        })
    },
    getWageData () {
      axios
        .get(`/api/wages/${this.$route.params.id}/current`, {
          headers: {
            'Authorization': 'Bearer 5ffede2007d78f1920eb54a3ffa606aa8a279990'
          }
        })
        .then((response) => {
          this.wages = response.data.data
        })
        .catch(e => {
          console.log(e)
        })
    },
    getPersonalData () {
      axios
        .get(`/api/people/${this.$route.params.id}/detail`, {
          headers: {
            'Authorization': 'Bearer 5ffede2007d78f1920eb54a3ffa606aa8a279990'
          }
        })
        .then((response) => {
          this.employeedetails = response.data.data
          this.avatar = response.data.data.avatar
          this.employeeaddress = (response.data.data.address.line_1).split(' ').join('+')
          return axios.get(`/travel/json?origin=${this.employeeaddress}&destination=Kortrijksesteenweg+181&departure_time=1519542610&mode=transit&key=AIzaSyBP5X7pDvAr4Z_q76O4BmCNjCtuFy6SUY0`)
        })
        .then((response) => {
          this.googledata = response.data.routes[0].legs[0].steps
          this.totalduration = response.data.routes[0].legs[0].duration.text
        })
    }
  },
  mounted () {
    this.getPersonalData()
    this.getAssetData()
    this.getWageData()
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

.header-photo {
  border-radius: 100px;
  width: 80px;
  height: 80px;
}

.column {
  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16), 0 2px 8px 0 rgba(0,0,0,0.12);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16), 0 2px 8px 0 rgba(0,0,0,0.12);
  margin:10px;
}

.column-header {
  padding-bottom:30px;
}
</style>
