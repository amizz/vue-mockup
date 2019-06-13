<template>
  <div class="dashboard">
    <TopNav activeIndex="1"></TopNav>
    <div class="section">
      <SideNav></SideNav>
      <div class="content">
        <h1>Dashboard</h1>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";

export default {
  components: {
    TopNav,
    SideNav
  }
}
</script>

<style>
  .content {
    display: inline-block;
  }
</style>
