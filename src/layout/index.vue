
<script setup lang="ts">
import { reactive, toRefs } from "vue";
import TabBar from "@/components/tabBar.vue"
import {uuid} from "@/utils/random.js"
const useTabBar = () => {
  const state = reactive({
    tabBar: [
      {
        id: uuid(),
        to: "/home",
        name: "首页",
      },
      {
        id: uuid(),
        to: "/stock",
        name: "游戏库",
      },
      {
        id: uuid(),
        to: "/cart",
        name: "购物车",
      },
      {
        id: uuid(),
        to: "/my",
        name: "我的",
      },
    ],
  });
  return toRefs(state)
};
const {tabBar} = useTabBar()
const handleChange = (value) => {
    console.log(value)
}
</script>

<template>
  <div class="layout">
    <div class="content">
      <router-view />
    </div>
    <div class="floor">
        <TabBar :data="tabBar" @change="handleChange" />
    </div>
  </div>
</template>

<style scoped>
</style>