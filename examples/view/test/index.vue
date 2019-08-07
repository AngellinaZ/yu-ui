<template>
  <div>
    <test v-on:titleChanged="title11"></test>
    <h2>{{title}}</h2>
  </div>
</template>
<script>
import test from '@/components/test'
export default {
  name: 'tste',
  data () {
    return {
      users: ["Henry", "Bucky", "Emily"],
      title: 'xxxx'
    }
  },
  components: {
    test
  },
  methods: {
    title11 (e) {
      this.title = e;
    }
  }
}
</script>

