<template>
  <transition name="yu-message-fade">
    <div
      :class="['yu-message', `yu-message--${ type }`]"
      :style="positionStyle"
    >
      <i :class="typeClass"></i>
      <p>{{ message }}</p>
    </div>
  </transition>
</template>
<script>
const TYPE_MAP = {
  success: 'success',
  warning: 'warning',
  info: 'info',
  error: 'error'
}
export default {
  name: 'yuMessage',
  data () {
    return {}
  },
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info' //success / warning / info / error
    },
    duration: {
      type: Number,
      default: 3000
    },
    verticalOffset: {
      type: Number,
      default: 20
    }
  },
  computed: {
    typeClass () {
      return this.type && `yu-message__icon yu-icon-${TYPE_MAP[this.type]}`;
    },
    positionStyle () {
      return {
        'top': `${this.verticalOffset}px`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.yu-message-fade-enter-active,
.yu-message-fade-leave-active {
  transition: opacity 0.5s;
}
.yu-message-fade-enter, .yu-message-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>