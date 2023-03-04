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