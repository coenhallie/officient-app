<template>
  <div>
    <h3 class="column-header">Daily Commute</h3>
    <b>Total duration:</b> {{this.totalduration}}
    <br>
    <b> Total distance:</b> {{this.totaldistance}}
    <hr>
    <h4 class="column-header"> recommended route </h4>
    <div class="content" v-for="data in googledata" :key="data.id">
      <div>{{(data.html_instructions).replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}}</div><br>
      <small><i>{{data.duration.text}} - {{data.distance.text}}</i></small>
      <hr>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Commute',
  data () {
    return {
    }
  },
  computed: mapState([
    'googledata',
    'totalduration',
    'totaldistance',
    'status'
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
