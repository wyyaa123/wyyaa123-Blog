<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>

    <VCLiveTime mt="2" start-time="2022-08-17">
      <template #live-time-before>
        <span>本站已运行</span>
      </template>
    </VCLiveTime>

  </YunFooter>
</template>