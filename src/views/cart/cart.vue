<script setup lang="ts">
import data from "../../assets/json/gameData.json";
import { reactive, ref } from "vue";
const onSubmit = () => console.log(checked);
const checked = ref([]);
const checkboxGroup = ref(null);
const isChecked = ref(false);

const checkAll = () => {
  checkboxGroup.value.toggleAll(isChecked.value);
};
const checks = (names) => {
  data.rows.length > names.length
    ? (isChecked.value = false)
    : (isChecked.value = true);
};
const getIconUrl = (name: string) => {
  const path = `../../assets/image${name}.jpg`;
  const iconModules = import.meta.globEager("../../assets/image/*.jpg");
  const aaa = iconModules[path].default;
  return aaa;
};
</script>

<template>
  <div class="content">
    <van-checkbox-group v-model="checked" @change="checks" ref="checkboxGroup">
      <van-checkbox
        class="item"
        v-for="item in data.rows"
        :key="item.id"
        :name="item.id"
      >
        <van-card
        style="width:330px;background-color:#fff"
          num="1"
          :price="item.price"
          :desc="item.desc"
          :title="item.name"
          :thumb="getIconUrl(item.picture)"
        />
      </van-checkbox>
    </van-checkbox-group>
    <div class="flex_between fixed_b_50 submit-bar">
      <van-checkbox v-model="isChecked" @click="checkAll">全选</van-checkbox>
      <div class="pay flex width_50">
        合计：<span class="color_money">￥<span class="font_size_18 font_weight_600 margin_r_16">1638</span></span>
        <van-button :color="'#FB4E48'" type="warning" size="small" round block>支付</van-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 350px;
  height: 126px;
  margin: 0 auto;
  margin-bottom: 15px;
  padding-left: 15px;
  background-color:#fff
}
.submit-bar{
    width: calc(100% - 30px);
}
.pay{
    line-height: 30px;
    white-space: nowrap;
}
:root {
  --van-submit-bar-height: 100px !important;
}
</style>