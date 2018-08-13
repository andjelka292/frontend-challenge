<template>
  <div class="container">
      <div v-for="label in item">
        <p>{{label}}</p>
      </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   items: {
  //     type: Array
  //   }
  // },
  props: ['label', 'name'],
  data () {
    return {

    }
  }
}
</script>
