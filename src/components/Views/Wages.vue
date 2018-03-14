<template>
  <div v-if="wages">
    <h3 class="column-header">Current Wage</h3>
    <b>Start date:</b> {{wages.start_date}}
    <br>
    <b>Estimated monthly cost:</b> {{wages.estimated_monthly_total}}
    <hr>
    <h4 class="column-header"> Billable Hours per day</h4>
    <b>Monday:</b> {{wages.weekly_time_engagement_minutes.monday / 60}}<br>
    <b>Tuesday:</b> {{wages.weekly_time_engagement_minutes.tuesday / 60}}<br>
    <b>Wednesday:</b> {{wages.weekly_time_engagement_minutes.wednesday / 60}}<br>
    <b>Thursday:</b> {{wages.weekly_time_engagement_minutes.thursday / 60}}<br>
    <b>Friday:</b> {{wages.weekly_time_engagement_minutes.friday / 60}}<br>
    <b>Saturday:</b> {{wages.weekly_time_engagement_minutes.saturday / 60}}<br>
    <b>Sunday:</b> {{wages.weekly_time_engagement_minutes.sunday / 60}}<br>
  </div>
  <div v-else>
    <h2>meh..</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Wages',
  data () {
    return {
    }
  },
  computed: mapState([
    'wages'
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
