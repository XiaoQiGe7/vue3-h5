
<script setup lang="ts">
import { reactive, ref, onBeforeUpdate } from "vue";
import weixinIcon from "@/assets/icon/weixin.png";
import zhifubaoIcon from "@/assets/icon/zhifubao.png";
import { uuid } from "@/utils/random.js";
import data from "../../assets/json/gameData.json";

const checked = ref("");
const getIconUrl = (name: string) => {
  const path = `../../assets/image${name}.jpg`;
  const iconModules = import.meta.globEager("../../assets/image/*.jpg");
  const aaa = iconModules[path].default;
  return aaa;
};
</script>


<template>
  <div class="order">
    <div class="user">
      <p class="name">收货人：小摹</p>
      <p class="phone">15968866888</p>
      <p class="address">
        收货地址：<span>成都市双流区怡心湖中央商务区 D区16栋</span>
      </p>
    </div>

    <div class="commodity margin_tb_16">
      <ul>
        <li v-for="item in data.rows" :key="item.id">
          <van-card
            style="width: 390px; background-color: #fff"
            num="1"
            :price="item.price"
            :desc="item.desc"
            :title="item.name"
            :thumb="getIconUrl(item.picture)"
          />
        </li>
      </ul>
    </div>

    <div class="payWay">
      <van-radio-group v-model="checked">
        <van-cell-group inset>
          <van-cell
            title="支付宝支付"
            :icon="weixinIcon"
            clickable
            @click="checked = '1'"
          >
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell
            title="微信支付"
            :icon="zhifubaoIcon"
            clickable
            @click="checked = '2'"
          >
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>

    <div class="price-detail">
      <h3 class="margin_lr_16">价格明细</h3>
      <van-cell-group>
        <van-cell title="优惠卷" value="50" />
        <van-cell title="运费" value="8" />
        <van-cell title="商品总价" value="50" />
      </van-cell-group>
    </div>

    <div class="floor">
      <van-button
        @click="$router.push('/payDetail')"
        color="#FB4E48"
        type="primary"
        block
        round
        >提交订单</van-button
      >
    </div>
  </div>
</template>

<style lang="scss">
.user {
  background-color: #fff;
  padding: 16px;
}
.payWay {
  background-color: #fff;
}
</style>