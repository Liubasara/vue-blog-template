<template>
  <div id="app">
    <div v-for="(item, index) in $store.state.post_data" :key="index">
      <router-link :to="`/post/${item.name}`">
        {{item.name}}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>

