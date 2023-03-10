<template>
  <div class="pay-detail">
    <div class="top">
      <p class="margin_b_16 font_weight_600">JoySpace官方商店</p>
      <p class="margin_b_16 font_size_30 font_weight_800">-349.00</p>
      <p class="margin_b_16 color_79 font_size_14">交付成功</p>
    </div>
    <div class="bottom">
      <div class="flex_between margin_lr_16 margin_b_16">
        <span>付款方式</span>
        <span>微信钱包</span>
      </div>
      <div class="flex_between margin_lr_16 margin_b_16">
        <span>配送方式</span>
        <span>快递免运费</span>
      </div>
      <div class="flex_between margin_lr_16 margin_b_16">
        <span>商品说明</span>
        <span>无</span>
      </div>
      <div class="flex_between margin_lr_16 margin_b_16">
        <span>创建时间</span>
        <span>2021年11月30日13:46:55</span>
      </div>
    </div>
        <div class="floor">
      <van-button
        @click="$router.push('/home')"
        color="#FB4E48"
        type="primary"
        block
        round
        >返回首页</van-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.pay-detail{
    background-color: #fff;
    margin-bottom: 20px;
    text-align: center;
}
</style>