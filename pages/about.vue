<template>
  <div>
    <h1>Protected</h1>
    <h2>About</h2>
  </div>
</template>

<script>
export default {
  middleware: ['check-token']
}
</script>

<style>

</style>
