<template>
  <AppLayout>
    <div>
      <div class="container mx-auto section-game">
        <div class="display w-full md:w-8/12 my-10 py-4">
          Apolo ha sido infectado por un virus
          <span class="span-text">zombie</span> y está atacando la Manzana
          House.
        </div>
        <div class="my-10 py-4">
          <FormLogin />
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script lang="ts" setup>
import AppLayout from "../layouts/AppLayout.vue";
import FormLogin from "../components/FormLogin.vue";
import { useUserStore } from "../store/user";

const users = useUserStore();

users.setLoading(true);

setTimeout(() => {
  users.setLoading(false);
}, 1000);

</script>
