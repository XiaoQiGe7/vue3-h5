**h5适配方案**

## viewport + px
<!-- 页面缩放可能会引起其他问题 -->
<script>
window.onload = function () {
    const width = 375;  // 设计稿宽度
    const scale = window.innerWidth / width
    // console.log('scale', scale)
    let meta = document.querySelector('meta[name=viewport]')
    let content = `width=${width}, init-scale=${scale}, user-scalable=no`
    if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'viewport')
    document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
}
</script>



- [viewport适配方案]
- [自动化路由]

<script>
// 商品表
{
    "name": "名称",
    "picture":"图片地址",
    "desc": "简介",
    "price": 价格,
    "discount": 折扣,
    "rate": 评价,
    "source": "来源：添加该商品的商家",
    "status": "状态：上架|下架",
    "category": "分类",
    "people":游戏人数,
    "volume":容量GB,
    "historyMostLow":史低
    "amiibo":false,
    "cassette":true,
    "archiving":true,
    "online":false,
    "exchange":false,
}
购物车表
{

}
订单表
// 在什么时间，什么人，以什么方式，购买了什么，付了多少钱，这个东西怎么到买家手里
{
    订单号
    商品
    发货方式
    买家
    支付方式
    支付金额
    卖家
}
</script>