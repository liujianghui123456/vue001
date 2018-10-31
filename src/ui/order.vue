<template>
  <div class="app">
    <top-nav :topData="topData"></top-nav>
    <div class="content">
      <Tabs size="small">
        <Tab-pane label="全部订单">标签一的内容</Tab-pane>
        <Tab-pane label="待付款">标签二的内容</Tab-pane>
        <Tab-pane label="待发货">标签三的内容</Tab-pane>
        <Tab-pane label="待收货">标签三的内容</Tab-pane>
        <Tab-pane label="已完成">标签三的内容</Tab-pane>
      </Tabs>
    </div>
  </div>
</template>
<script>
import topNav from "./topNavbar.vue";
export default {
    data() {
        return {
            topData: {
                title: "订单管理"
            }
        };
    },
    components: {
        topNav: topNav
    },
    created() {}
};
</script>
<style scoped lang="less">
.app {
    .content {
        position: relative;
        top: 88px;
        font-size: 28px;
    }
}
</style>
