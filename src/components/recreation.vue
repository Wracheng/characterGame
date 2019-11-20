<template>
  <div class="recreation">
    <div
      class="contain"
      :style="
        'width:' +
          Math.sqrt(wordListLength) * 100 +
          'px;height:' +
          Math.sqrt(wordListLength) * 100 +
          'px'
      "
    >
      <div
        class="word"
        v-for="(item, index) in wordList"
        :key="index"
        @click="playerChoose(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="restart" @click="restart">重新开始</div>
  </div>
</template>

<script>
import wordFn from '../data/data.js'
import swal from 'sweetalert'
export default {
  data () {
    return {
      wordList: [],
      // 特殊位置
      specialDot: '',
      wordListLength: 0,
      // 方块点击时的背景颜色
      // wordBgc: 'blue',
      level: 1,
      victoryPic: ''
    }
  },
  created () {
    this.setLevel(1)
  },
  methods: {
    // 设等级
    setLevel (level) {
      var objInfo = wordFn(level)
      this.wordList = objInfo.List
      this.wordListLength = objInfo.List.length
      this.specialDot = objInfo.position
    },
    playerChoose (index) {
      if (index === this.specialDot) {
        this.isPass = true
        // 升级
        this.level = this.level + 1
        this.setLevel(this.level)
        this.bus.$emit('combo', '')
      } else {
        this.isPass = false
      }
      // 如果level 升到 11 了
      if (this.level === 11) {
        this.bus.$emit('clear', true)
        swal(
          '少年郎要做一个勇敢的英雄哦!',
          'You clicked the button!',
          'success'
        )
        // 直接换上你的背景图就好

        /* eslint-disable */
        return;
      }
      this.bus.$emit('tap', {
        isPass: this.isPass,
        level: this.level
      });
    },
    restart() {
      this.setLevel(1);
      this.level = 1;
      this.bus.$emit('restart', {
        level: 1,
        time: 20,
        score: 0
      });
    }
  }
};
</script>

<style scoped lang="less">
.recreation {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  // background-color: deeppink;
  display: flex;
  justify-content: center;
  align-items: center;
  .contain {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: 100%;
    // background-color: yellow;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .word {
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    // background-color: blue;
    box-sizing: border-box;
  }
  .word:hover {
    cursor: pointer;
  }
  .word:active {
    // 错了士红色，对了是绿色
    background-color: lime;
  }
  .restart {
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 100px;
    background-color: yellow;
  }
  .restart:hover {
    cursor: pointer;
  }
}
</style>
