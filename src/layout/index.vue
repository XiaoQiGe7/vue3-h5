
<script setup lang="ts">
import { reactive, ref, toRefs, watchEffect } from "vue";
import { useRouter } from "vue-router";
import TabBar from "@/components/tabBar.vue";
import { uuid } from "@/utils/random.js";
// import { watch } from "fs";
const useTabBar = () => {
  const state = reactive({
    tabBar: [
      {
        id: uuid(),
        to: "/home",
        name: "首页",
        icon: "wap-home-o",
      },
      {
        id: uuid(),
        to: "/list",
        name: "游戏库",
        icon: "shop-o",
      },
      {
        id: uuid(),
        to: "/cart",
        name: "购物车",
        icon: "shopping-cart-o",
      },
      {
        id: uuid(),
        to: "/my",
        name: "我的",
        icon: "contact",
      },
    ],
  });
  return toRefs(state);
};
const { tabBar } = useTabBar();
const handleChange = (value) => {};
const isTabBar = (path) => ["/home", "/list", "/cart", "/my"].includes(path);
</script>

<template>
  <div class="layout">
    <van-nav-bar
      :title="$route.meta.title"
      :left-arrow="!isTabBar($route.path)"
      fixed
      @click-left="$router.back()"
    />

    <div class="content">
      <router-view />
    </div>

    <TabBar
      v-show="isTabBar($route.path)"
      :data="tabBar"
      @change="handleChange"
    />
  </div>
</template>

<style scoped>
.content {
  margin: 46px 0px 50px;
}
</style>