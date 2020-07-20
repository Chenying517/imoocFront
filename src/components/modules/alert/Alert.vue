<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="flex">{{msg}}</div>
      <div v-if="type=='alert'">
        <div class="btnCommon success" @click="close()">确定</div>
      </div>
      <div v-else class="space-around">
        <div class="btnCommon cancel" @click='cancelEvent()'>取消</div>
        <div class="btnCommon success" @click="successEvent()">确定</div>
      </div>
    </div>
    <div class="mask" @click='closeMask'></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    msg: {
      type: String,
      default: '这是Alert组件'
    },
    isShow: {
      type: Boolean,
      default: false
    },
    success: {
      type: Function,
      default: () => {
        console.log('点击了确定按钮')
      }
    },
    cancel: {
      type: Function,
      default: () => {
        console.log('点击了取消按钮')
      }
    }
  },
  methods: {
    close () {
      this.isShow = false
    },
    closeMask () {
      if (this.type === 'alert') {
        this.close()
      } else {

      }
    },
    cancelEvent () {
      this.cancel()
      this.close()
    },
    successEvent () {
      this.success()
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
$btn-main:#009688;
$btn-dark:darken($btn-main,5%);
.alert {
  width: 300px;
  height: 150px;
  position: fixed;
  background: #fff;
  border-radius: 6px;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -75px;
  padding: 20px 10px ;
  box-shadow: 0 5px 8px rgba($color: #000000, $alpha: 0.05);
  z-index:3000;
  display: flex;
  flex-direction: column  ;
  justify-content: center;
  align-items: center;
}
.flex{
  flex: 1;
  display: flex;
  justify-content: center ;
  align-items: center;
}
.btnCommon {
  width: 105px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 6px;
  cursor: pointer;
  &.success{
    background:  $btn-main;
    color: #fff;
     &:hover{
    background:  $btn-dark;
    }
  }
  &.cancel{
    background: #efefef;
    color: #333;
  }

}
.space-around{
  display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
}
.mask{
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba($color: #000000, $alpha: 0.4);
  left: 0;
  top: 0;
  z-index: 2000;
}
</style>
