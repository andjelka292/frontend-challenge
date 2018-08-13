<template>
  <div class="form-control">

    <input type="email" v-bind:placeholder="item.label">
  </div>
</template>

<script>
export default {
  // props: {
  //   items: {
  //     type: Array
  //   }
  // },
  props: ['items'],
  data () {
    return {
      item: this.items
    }
  },
  methods: {
    setItem: function (e) {
      debugger;
      for (var x = 0; x < this.items.length; x++) {
        var item = this.items[x];
      }
    }
  }
}
</script>
