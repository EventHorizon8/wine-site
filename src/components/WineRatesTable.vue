<template>
  <div>
      <table class="table">
          <thead>
          <tr>
              <th scope="col">Wine</th>
              <th scope="col">Color</th>
              <th scope="col">Wine type</th>
              <th scope="col">Vintage</th>
              <th scope="col">Country</th>
              <th scope="col">Score</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in items" :key="item.id">
              <td>{{item.wine}}</td>
              <td>{{item.color}}</td>
              <td>{{item.wineType}}</td>
              <td>{{item.vintage}}</td>
              <td>{{item.country}}</td>
              <td>{{item.score}}</td>
          </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
    export default {
        name: "WineRatesTable",
        props: {
            items: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                text: 'Идет загрузка...'
            }
        },
        components: {}
    }
</script>

<style scoped>

</style>
