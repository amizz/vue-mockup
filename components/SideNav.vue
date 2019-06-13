<template>
  <div class="side-nav">
    <el-row>
      <el-col :span="8" style="width:auto;">
        <div class="menu-item">
          <div class="menu-icon">
            <i class="fa fa-address-card"></i>
          </div>
          <span>Account</span>
        </div>
        <div class="menu-item">
          <div class="menu-icon">
            <i class="fa fa-user"></i>
          </div>
          <span>User</span>
        </div>
        <div class="menu-item">
          <div class="menu-icon">
            <i class="fa fa-home"></i>
          </div>
          <span>Home</span>
        </div>
      </el-col>
      <el-col :span="16">
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .side-nav {
    display: inline-block;
    min-width: 300px;
    padding: 1em;
  }

  .menu-icon {
    color: white;
    padding: 1em;
    background: rgb(0, 68, 255);
    box-shadow: 0px 0px 10px 0px rgba(0, 68, 255, 0.3);
    border-radius: 10px;
  }

  .menu-item {
    margin-bottom: 1em;
  }
</style>
