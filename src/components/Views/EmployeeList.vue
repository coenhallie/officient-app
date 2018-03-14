<template>
  <div>
    <b-table
      :data="employees"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :default-sort-direction="defaultSortDirection"
      :loading="isLoading"
      default-sort="name"
      focusable>
      <template slot-scope="props">
        <b-table-column field="name" label="Name" sortable>
          <router-link :to="`/details/${props.row.id}`">
            {{ props.row.name }}
          </router-link>
        </b-table-column>
        <b-table-column field="role_name" label="Role" sortable>
            {{ props.row.role_name }}
        </b-table-column>
        <b-table-column field="email" label="Email" sortable>
            {{ props.row.email }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EmployeeList',
  data () {
    return {
      isPaginated: true,
      isPaginationSimple: false,
      isLoading: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 5
    }
  },
  computed: mapState([
    'employees'
  ])
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

.b-table {
  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16), 0 2px 8px 0 rgba(0,0,0,0.12);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16), 0 2px 8px 0 rgba(0,0,0,0.12);
  margin:10px;
}

.header-photo {
  border-radius: 100px;
  width: 80px;
  height: 80px;
}
</style>
