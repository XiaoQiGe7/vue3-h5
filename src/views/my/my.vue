<script setup lang="ts">
</script>

<template>
  <div class="content">
    <div class="my">
      <div class="account flex_wrap_column">
        <img class="avatar" src="../../assets/image/avarat.png" alt="">
        <p class="flex_50">用户G708HN</p>
        <p class="LV font_size_14">LV.3</p>
      </div>
      <img class="vip" src="../../assets/image/VIP.png" />
    </div>

    <div class="order box_shadow_999 flex_between">
      <div>
        <p class="font_weight_800">12</p>
        <p class="font_size_14 color_79">我的订单</p>
      </div>
      <div>
        <p class="font_weight_800">60.00</p>
        <p class="font_size_14 color_79">余额</p>
      </div>
      <div>
        <p class="font_weight_800">500</p>
        <p class="font_size_14 color_79">积分</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my {
  height: 170px;
  position: relative;
  background-color: #1e1e20;
  margin-bottom: 60px;
  .account {
    font-size: 16px;
    color: #fff;
    position: absolute;
    top: 30px;
    left: 15px;
    height: 54px;
    .avatar{
      width: 54px;
      height: 54px;
      margin-right: 10px;
      border-radius: 6px;
    }
    .LV{
      padding: 2px 6px;
      width: fit-content;
      background-color: #3E3D35;
    }
  }
  .vip {
    width: 360px;
    height: 72px;
    position: absolute;
    bottom: -36px;
    left: 15px;
    border-radius: 4px;
  }
}
.order {
  width: 360px;
  height: 87px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
}
</style>