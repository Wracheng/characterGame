<template>
  <div class="part">
    <!-- <div class="time">
      <div class="leftTime process" :style="''">
        <div class="process"></div>
      </div>
      <div class="comboTime process">
        <div class="process"></div>
      </div>
    </div> -->
    <div class="time">{{ time }}</div>
    <div class="score">{{ score }}</div>
    <div class="level">level:{{ level }}</div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  data () {
    return {
      time: 20,
      score: 0,
      level: 1,
      timeId: null,
      combo: 0
    }
  },
  created () {
    this.bus.$on('combo', res => {
      if (this.time > 14) {
        this.combo += 1
      } else {
        this.combo = 0
      }
    })
    this.bus.$on('clear', res => {
      if (res) {
        clearInterval(this.timeId)
      }
    })
    this.timer()
    this.bus.$on('tap', res => {
      this.level = res.level
      if (res.isPass) {
        // 加分
        this.score += (this.level - 1) * 100 + (20 - this.time) * 10
        // 成功点击，时间清零
        this.time = 20
        console.log(this.score)

        // 样式反馈(   )
        // alert('少年郎,勇敢地进入下一关吧');
      } else {
        this.time = this.time - 5
        if (this.time < 0) {
          this.time = 0
        }
      }
    })
    this.bus.$on('restart', res => {
      this.level = res.level
      this.time = res.time
      this.score = res.score
      this.timer()
    })
  },
  beforeDestroy () {
    clearInterval(this.timeId)
  },
  methods: {
    timer () {
      if (this.timeId) {
        clearInterval(this.timeId)
      }
      var that = this
      that.timeId = setInterval(function () {
        if (that.time === 0) {
          clearInterval(that.timeId)
          /* eslint-disable */
          // 你失败了
          swal('你失败了', '再来一次吧!', 'error');
          return;
        }
        that.time = that.time - 1;
      }, 1000);
    }
  }
};
</script>

<style scoped lang="less">
@keyframes timeReduce {
  0% {
    width: 100%;
  }
  80% {
    width: 80%;
    background-image: linear-gradient(
      to bottom,
      rgb(255, 51, 0) 0%,
      rgb(248, 43, 43) 100%
    );
  }
  100% {
    width: 0%;
    background-image: linear-gradient(
      to bottom,
      rgb(255, 51, 0) 0%,
      rgb(248, 43, 43) 100%
    );
  }
}
.part {
  display: flex;
  /* background-color: deeppink; */
}
.time,
.score,
.level {
  width: 33.3333%;
  height: 50px;
  // background-color: blue;
  font-weight: bold;
  font-size: 30px;
  line-height: 50px;
}
.time  {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.leftTime  {
  background-image: linear-gradient(
    to bottom,
    rgb(0, 217, 255) 0%,
    skyblue 100%
  );
  animation: timeReduce 20s;
}
.comboTime  {
  background-image: linear-gradient(
    to bottom,
    rgb(255, 102, 0) 0%,
    rgb(235, 167, 135) 100%
  );
  animation: timeReduce 5s;
}
.process  {
  width: 200px;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
