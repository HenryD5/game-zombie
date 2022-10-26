<template>
  <AppLayout :view="'welcome'">
    <div>
      <div class="container mx-auto section-game">
        <div class="display-2 w-full md:w-8/12 my-10 py-4">
          ¡Wow! no esperaba que hubiera alguien tan valiente para responder el
          llamado.
          <br />
          <br />
          ¡Me alegra tanto que estes aqui!
          <br />
          <br />
          Pero no demoremos más y comencemos a rescatar gente.
        </div>
        <div class="my-10 py-4">
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-8/12"></div>
            <div class="w-full md:w-4/12 md:pl-5 py-5 mt-5">
              <button
                class="block px-2 py-0 rounded-md w-full btn-form text-btn"
                @click="next()"
              >
                SI, ADELANTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script lang="ts" setup>
import AppLayout from "../layouts/AppLayout.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function next() {
  router.push({ name: "Game" });
}
</script>
