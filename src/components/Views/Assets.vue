<template>
  <div>
    <h3 class="column-header">Total Assets</h3>
    <div class="assets" v-for="asset in assets" :key="asset.id">
      <b>Product:</b> {{asset.name}}<br>
      <b>Price:</b> {{asset.price}}<br>
      <b>Owner:</b> {{asset.owner.name}}
      <hr>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Assets',
  data () {
    return {
    }
  },
  computed: mapState([
    'assets'
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
