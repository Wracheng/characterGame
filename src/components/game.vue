<template>
  <div class="game">
    <Part />
    <Recreation />
  </div>
</template>

<script>
import Part from './part.vue'
import Recreation from './Recreation.vue'
import swal from 'sweetalert'
export default {
  components: {
    Part,
    Recreation
  },
  data () {
    return {}
  },
  created () {
    swal(
      '通关有惊喜!',
      'You clicked the button!',
      'info'
    )
  }
}
</script>

<style>
.game {
  width: 100%;
  height: 100%;
  /* background-color: #f99; */
  background:url('../assets/img/fight.jpg') no-repeat;
  background-size: 100% 100%;
}
</style>
