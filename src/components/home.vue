<template>
  <div class="scene">
    <div class="title">调皮的字灵</div>
    <div class="animated bounce infinite start" @click="startGame"></div>
  </div>
</template>

<script>
export default {
  methods: {
    startGame () {
      this.$router.push('./game')
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/animation.css');
.scene {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../assets/img/scene.jpg') no-repeat;
  background-size: 100% 100%;
}
.start:hover {
  cursor: pointer;
}
.start {
  width: 138px;
  height: 131px;
  background: url('../assets/img/twly.png') no-repeat;
}
.title {
  position: absolute;
  top: 20%;
  font-size: 80px;
  text-align: center;
  font-weight: bold;
  color: rgb(135, 162, 235);
  margin-top: 50px;
  animation: fireDiv 1s infinite;
}
@keyframes fireDiv {
  0% {
    text-shadow: 0 0 4px white, 0 -5px 4px #ff3, 2px -10px 6px #fd3,
      -2px -15px 11px #f80, 2px -25px 18px #f20;
  }
  25% {
    text-shadow: 0 0 4px white, 2px -7px 6px #ff3, 2px -12px 8px #fd3,
      -3px -20px 11px #f80, 4px -30px 22px #f20;
  }
  50% {
    text-shadow: 0 0 4px white, 2px -10px 8px #ff3, 2px -14px 10px #fd3,
      -4px -25px 11px #f80, 4px -35px 25px #f20;
  }
  75% {
    text-shadow: 0 0 4px white, 2px -7px 6px #ff3, 2px -12px 8px #fd3,
      -3px -20px 11px #f80, 4px -30px 22px #f20;
  }
  100% {
    text-shadow: 0 0 4px white, 0 -5px 4px #ff3, 2px -10px 6px #fd3,
      -2px -15px 11px #f80, 2px -25px 18px #f20;
  }
}
</style>
