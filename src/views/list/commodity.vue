
<script setup lang="ts">
import { getImageFile } from "@/utils/index.js";
import { ref } from "vue";

const text = "1";
</script>

<template>
  <div class="commodity">
    <div class="imgs margin_top_46">
      <img
        class="commodity-image"
        :src="getImageFile($route.query.picture)"
        alt=""
      />
    </div>
    <div class="gradient">
      <div class="price font_weight_800 margin_lr_16">
        {{ $route.query.price }}
      </div>
    </div>
    <div class="title margin_16">
      <div class="name">{{ $route.query.name }}</div>
      <!-- <div class="rate">{{ $route.query.rate }}</div> -->
    </div>
    <div class="detail margin_lr_16">
      <div class="item">
        <p>{{ $route.query.people }}</p>
        <p class="pointer">人数</p>
      </div>
      <div class="item">
        <p>{{ $route.query.volume }}GB</p>
        <p class="pointer">容量</p>
      </div>
      <div class="item">
        <p>￥{{ $route.query.people }}</p>
        <p class="pointer">史低</p>
      </div>
      <div class="item">
        <van-icon
          color="#1afa29"
          :name="$route.query.cassette ? 'success' : 'cross'"
        />
        <p class="pointer">实体卡带</p>
      </div>
      <div class="item">
        <van-icon :name="$route.query.online ? 'success' : 'cross'" />
        <p class="pointer">联机</p>
      </div>
      <div class="item">
        <van-icon :name="$route.query.exchange ? 'success' : 'cross'" />
        <p class="pointer">兑换卷</p>
      </div>
      <div class="item">
        <van-icon :name="$route.query.archiving ? 'success' : 'cross'" />
        <p class="pointer">云存档</p>
      </div>
      <div class="item">
        <van-icon :name="$route.query.amiibo ? 'success' : 'cross'" />
        <p class="pointer">Amiibo</p>
      </div>
    </div>
    <div class="fare margin_tb_16 flex">
      <p class="margin_lr_6 color_79">运费</p>
      <p>￥8.00 - 24.00</p>
    </div>
    <div class="commodity-content margin_lr_16">
      <div class="commodity-detail">
        <div class="desc">游戏简介</div>
        <div class="commodity-desc">
          <!-- <p>
            即日起至北京时间 3 月 15 日凌晨 1
            点，购买游戏可立即解锁全新异域机灵和传说徽标。
          </p>
          <p>包括光陨之秋、全新突袭和第 20 赛季季票。</p>
          <h3>战役</h3>
          <p>
            被围困的海王星城市中，当一切的终结临近，在你的守护者同伴身上找到力量——见证者已经到来。用全新奖励武装自己，解锁新的暗影之力，在光陨之秋令人难忘的传说模式中取得胜利。
          </p>
          <h3>缚丝</h3>
          <p>
            通过此全新分支职业撩拨现实的丝线来使用暗影之力。用抓钩在楼与楼之间移动，用前所未有的速度在城市里穿梭。每个职业都可以利用此全新元素，但完美配装任你创造。
          </p>
          <h3>全新目的地</h3>
          <p>
            前往海王星，发现一个不同于你在《命运2》中探索过的霓虹大都市。直面云端行者，加入对抗暗影军团的战斗，并阻止技术先进的秘密城市内欧姆那遭到破坏。
          </p> -->
        </div>
      </div>
    </div>
    <div class="floor">
      <van-button
        @click="$router.push('/order')"
        color="#000"
        type="primary"
        block
        >购买</van-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  .name {
    font-weight: 600;
    font-size: 18px;
  }
  .rate {
    background-color: #3fb9d1;
    padding: 6px;
  }
}
.detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    flex: 0 0 23%;
    // background-color: rgba(0, 0, 0, 0.05);
    margin-top: 10px;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
  }
}
.imgs {
  height: 219px;
  overflow: hidden;
  .commodity-image {
    width: 390px;
  }
}
.fare {
  padding: 8px 15px;
  background-color: #fff;
}
.desc {
  font-weight: 600;
  font-size: 16px;
}
.gradient {
  // background-image: linear-gradient(to right, #b1b1b1, #333);
  background-color: #444;
  .price {
    font-size: 24px;
    color: #fff;
    // background-color: #000;
  }
}
</style>