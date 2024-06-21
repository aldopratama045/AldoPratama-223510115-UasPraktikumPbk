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

    <q-drawer v-model="rightDrawerOpen" side="right" show-if-above bordered v-if="rightDrawerOpen">
      <q-list>
        <q-item clickable @click="goToTugas1">
          <q-item-section>Tugas 1</q-item-section>
        </q-item>
        <q-item clickable @click="goToTugas2">
          <q-item-section>Tugas 2</q-item-section>
        </q-item>
        <q-item clickable @click="goToTugas3">
          <q-item-section>Tugas 3</q-item-section>
        </q-item>
        <q-item clickable @click="goToTugas4">
          <q-item-section>Tugas 4</q-item-section>
        </q-item>
        <q-item clickable @click="goToTugas5">
          <q-item-section>Tugas 5</q-item-section>
        </q-item>
        <q-item clickable @click="goToTugas6">
          <q-item-section>Tugas 6</q-item-section>
        </q-item>
        <q-item clickable @click="$router.push('/uas')">
          <q-item-section>UAS</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      rightDrawerOpen: false
    };
  },
  methods: {
    toggleRightDrawer() {
      this.rightDrawerOpen = !this.rightDrawerOpen;
    },
    goToTugas1() {
      window.location.href = this.tugas1Url;
    },
    goToTugas2() {
      window.location.href = this.tugas2Url;
    },
    goToTugas3() {
      window.location.href = this.tugas3Url;
    },
    goToTugas4() {
      window.location.href = this.tugas4Url;
    },
    goToTugas5() {
      window.location.href = this.tugas5Url;
    },
    goToTugas6() {
      window.location.href = this.tugas6Url;
    },
  },
  computed: {
    tugas1Url() {
      return 'https://aldopratama-cv.netlify.app';
    },
    tugas2Url() {
      return 'https://tugass2.netlify.app';
    },
    tugas3Url() {
      return 'https://t3-pbk-223510115.netlify.app';
    },
    tugas4Url() {
      return 'https://prakt3.netlify.app';
    },
    tugas5Url() {
      return 'https://aldopratama.netlify.app';
    },
    tugas6Url() {
      return 'https://t6-aldo.netlify.app';
    },
  }
}
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
  background-color: #333;
  color: white;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
</style>
