<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { uuid } from "@/utils/random.js";
import data from "../../assets/json/gameData.json";
const getIconUrl = (name: string) => {
  const path = `../../assets/image${name}.jpg`;
  const iconModules = import.meta.globEager("../../assets/image/*.jpg");
  const aaa = iconModules[path].default;
  return aaa;
};
const list = () => {
  const state = reactive({
    dictList: new Array(6)
      .fill({})
      .map((item) => new Object({ id: uuid(), name: "switch" })),
    active: "",
  });
  return toRefs(state);
};
const { dictList, active } = list();
active.value = dictList.value[0].id;
</script>

<template>
  <div class="content flex_wrap">
    <van-field
      class="search"
      v-model="value"
      left-icon="search"
      placeholder="搜索"
    />
    <div class="dict-list">
      <ul class="list">
        <li
          class="item"
          :class="{ active: active === item.id }"
          @click="active = item.id"
          v-for="item in dictList"
          :key="item.id"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="commodity">
      <div
        class="commodity-item"
        v-for="item in data.rows"
        :key="item.id"
        @click="$router.push({ path: '/commodity', query: item })"
      >
        <div class="margin_lr_16">
          <img class="commodity-image" :src="getIconUrl(item.picture)" />
        </div>
        <div class="commodity-detail">
          <p class="name">{{ item.name }}</p>
          <p class="price">￥{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dict-list {
  width: 80px;
  .list {
    background-color: #f8f8f8;
    .item {
      text-align: center;
      padding: 15px;
    }
  }
}
.active {
  background-color: #fb4e48;
}
.search {
  width: 390px;
  margin: 10px 0px;
  border-radius: 20px;
  background-color: #f8f8f8;
}
.commodity {
  width: 310px;
}
.commodity-item {
  display: flex;
  // background-color: #f2f2f2;
  margin-bottom: 10px;
  .commodity-image {
    width: 140px;
    height: 70px;
    border-radius: 4px;
  }
  .commodity-detail {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-weight: 700;
    .price {
      font-size: 14px;
      background-color: #f2f2f2;
      width: fit-content;
      padding: 4px;
    }
  }
}
</style>