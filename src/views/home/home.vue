<script setup lang="ts">
</script>

<template>
  <div class="content">
    <van-divider
      :style="{
        color: '#000000',
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '24px',
      }"
    >
      JoySpace卡带租赁
    </van-divider>
    <img class="img" src="../../assets/image/1000GAMES.png" />
    <div class="pay-card flex box_shadow_999">
      <div class="pay-card-item flex_column_between_center flex">
        <p class="font_size_18 font_weight_600">按月付费</p>
        <p class="font_weight_800">
          <span class="font_size_18">￥</span
          ><span class="font_size_30">38</span>
        </p>
        <p class="pointer">升级可抵扣</p>
        <van-button color="#FB4E48" type="warning" size="small" round block>购买</van-button>
      </div>
      <hr class="rotate_90 margin_lr_16" />
      <div class="pay-card-item flex_column_between_center flex">
        <p class="font_size_18 font_weight_600">按年付费</p>
        <p class="font_weight_800">
          <span class="font_size_18">￥</span
          ><span class="font_size_30">168</span>
        </p>
        <p class="pointer">可同时租1张</p>
        <van-button color="#FB4E48" type="warning" size="small" round block>购买</van-button>
      </div>
      <hr class="rotate_90 margin_lr_16" />
      <div class="pay-card-item flex_column_between_center flex">
        <p class="font_size_18 font_weight_600">按年付费</p>
        <p class="font_weight_800">
          <span class="font_size_18">￥</span
          ><span class="font_size_30">298</span>
        </p>
        <p class="pointer">可同时租2张</p>
        <van-button color="#FB4E48" type="warning" size="small" round block>购买</van-button>
      </div>
    </div>
    <div class="what">
      <van-divider
        :style="{
          color: '#000000',
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '24px',
        }"
      >
        为什么选择租赁？
      </van-divider>
      <div class="flex_wrap_around">
        <div class="item">
          <p class="font_size_14">新游戏优先体验</p>
          <p class="pointer">选择按年支付专享</p>
        </div>
        <div class="item">
          <p class="font_size_14">所有游戏畅玩</p>
          <p class="pointer">超过1000款游戏</p>
        </div>
        <div class="item">
          <p class="font_size_14">单程收费</p>
          <p class="pointer">寄出不收取费用</p>
        </div>
        <div class="item">
          <p class="font_size_14">免租不限时</p>
          <p class="pointer">所有游戏无限时要求</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pay-card {
  width: 300px;
  margin: 0 auto;
  padding: 14px;
  border-radius: 10px;
//   box-shadow: #999 0 0 8px -1px;
  .pay-card-item {
    width: 72px;
    height: 140px;
  }
}
.img{
    width: 390px;
    height: 220px;
}
.item{
    flex:0 0 140px
}
</style>