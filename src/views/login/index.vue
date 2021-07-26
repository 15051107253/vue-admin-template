<template>
  <div>
    login
    <p>{{$store.state.count}}</p>
    <button @click="$store.commit('add')">add</button>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
p{
  color: red;
}
</style>