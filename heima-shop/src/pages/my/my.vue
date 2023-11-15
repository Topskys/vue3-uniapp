<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'

const memberStore = useMemberStore()

interface BannerItem {}

// 测试请求
const getData = async () => {
  const res = await http<BannerItem[]>({
    url: '/home/banner',
  })
  console.log(res)
}


</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: 'miniapp',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
  </view>
</template>

<style lang="scss">
//
</style>
