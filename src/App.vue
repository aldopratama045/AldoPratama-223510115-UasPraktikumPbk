<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-toolbar-title>
          <div class="logo">My App</div>
        </q-toolbar-title>
        <q-btn flat dense round @click="toggleRightDrawer">
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" show-if-above bordered class="drawer">
      <q-list>
        <q-item clickable @click="navigateTo('/uas')" class="drawer-item">
          <q-item-section>UAS</q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('/tugas1')" class="drawer-item">
          <q-item-section>Tugas 1</q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('/tugas2')" class="drawer-item">
          <q-item-section>Tugas 2</q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('/tugas3')" class="drawer-item">
          <q-item-section>Tugas 3</q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('/tugas4')" class="drawer-item">
          <q-item-section>Tugas 4</q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('/tugas5')" class="drawer-item">
          <q-item-section>Tugas 5</q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('/tugas6')" class="drawer-item">
          <q-item-section>Tugas 6</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const rightDrawerOpen = ref(false);
    const router = useRouter();

    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    };

    const navigateTo = (path) => {
      router.push(path);
    };

    return {
      rightDrawerOpen,
      toggleRightDrawer,
      navigateTo
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  background-color: #1e1e1e;
  color: #ffffff;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
.drawer {
  background-color: #f4f4f4;
}
.drawer-item {
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s;
}
.drawer-item:hover {
  background-color: #e0e0e0;
}
</style>
