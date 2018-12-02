<template>
  <div id="app">
    <div v-for="(item, index) in post_data" :key="index">
      <router-link :to="`/post/${item.name}`">
        {{item.name}}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { postData } from '@/utils/data'

export default {
  name: 'App',
  data () {
    return {
      post_data: JSON.parse(postData)
    }
  }
}
</script>

