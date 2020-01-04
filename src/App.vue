<template>
  <div id = "app">
      <keep-alive>
          <router-view/>
      </keep-alive>
    <FooterGuide v-show="$route.meta.isShowFooter && !$store.state.sectionSearch"/>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
    data(){
        return {
            sectionSearch:false
        }
    },
      components:{
        FooterGuide
      },
  async mounted () {
      // 通知action异步获取address并保存到state
      this.$store.dispatch('autoLogin')
    },
}
</script>
<style lang='stylus'>
  #app
    width 100%
    height 100%
</style>
