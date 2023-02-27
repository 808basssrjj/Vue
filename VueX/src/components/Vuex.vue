<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20 }}</h2>
    <h2>{{ $store.getters.more20legtn }}</h2>
  </div>
</template>

<script>
export default {
  name: "vuex",
};
</script>

<style>
</style>