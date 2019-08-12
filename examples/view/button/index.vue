<template>
  <div>
    <yu-button @click="handle">Default Button</yu-button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handle (event) {
      console.log('event:', event)
    }
  }
}
</script>
