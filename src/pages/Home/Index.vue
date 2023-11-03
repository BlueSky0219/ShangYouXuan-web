<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="index" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/Index.vue'
import Recommend from '@/pages/Home/Recommend/Index.vue'
import Rank from '@/pages/Home/Rank/Index.vue'
import Like from '@/pages/Home/Like/Index.vue'
import Floor from '@/pages/Home/Floor/Index.vue'
import Brand from '@/pages/Home/Brand/Index.vue'

import { mapState } from 'vuex'
export default {
  name: '',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  },

}
</script>

<style lang="less" scoped></style>