<template>
  <div>
    <h1>Protected</h1>
    <h2>About</h2>
  </div>
</template>

<script>
export default {
  middleware: ['check-token'],
  head () {
    return {
      title: "Title Page",
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style>

</style>
