<template>
  <div>
    <button @click="handle">点击触发message</button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handle () {
      this.$yuMessage({
        message: 'this is a message',
        type: 'success'
      })
    }
  }
}
</script>
