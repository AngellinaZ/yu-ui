<template>
  <div>
    <test @titleChanged="title11"></test>
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
      title: '这里是父组件!'
    }
  },
  components: {
    test
  },
  methods: {
    title11 (e) {
      console.log(e)
      this.title = e;
    }
  }
}
</script>

