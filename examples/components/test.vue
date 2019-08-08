<template>
  <h1 @click="changeTitle">{{ title }}</h1>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      title: '这里是子组件'
    }
  },
  methods: {
    changeTitle () {
      this.$emit('titleChanged', '子向父组件传值');
    }
  }
}
</script>


