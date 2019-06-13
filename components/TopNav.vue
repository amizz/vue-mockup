<template>
  <div class="top-nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/dashboard">Home</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/programs">Programs</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/ebook">Ebook</router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    props: ["activeIndex"],
    data() {
      return {
        // activeIndex: 1,
      }
    },
    methods: {
      handleSelect() {

      }
    }
  }
</script>

<style>

</style>