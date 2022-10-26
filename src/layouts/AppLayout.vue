<template>
  <div class="app-layout">
    <Loading  v-if="users.loading"/>
    <div class="app-layout__img" :class="view">
      <div v-if="view === 'login'">
       <img src="/login.png" alt="">
      </div>
      <div v-if="view === 'welcome'">
       <div class="wel-1">
        <img src="/welcome-1.png" alt="">
       </div>
       <div class="wel-2">
        <img src="/welcome-2.png" alt="">
       </div>
      </div>
      <div v-if="view === 'game'">
        <img src="/game.png" alt="">
      </div>
      <div v-if="view === 'ranking-i'" class="rank-1">
        <img src="/ranking.png" alt="">
      </div>
      <div v-if="view === 'ranking-i'" class="rank-2">
        <img src="/ranking-2.png" alt="">
      </div>
    </div>
    <div class="app-layout__main">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Loading from "../components/Loading.vue"
import { useToken } from "../composables/useToken";
import { useUserStore } from "../store/user";

const { getAuthData } = useToken();
const users = useUserStore();

const { view } = defineProps({
  view: {
    type: String,
    default: '',
    required: false,
  },
})

if (users.user === undefined) {
  const data = getAuthData();
  if (Object.keys(data).length > 0) {
    const dataUser = JSON.parse(data);
    users.setUser(dataUser);
  }
}
</script>
