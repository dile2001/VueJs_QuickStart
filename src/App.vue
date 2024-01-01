<script setup>
import Messages from './components/Messages.vue'
import NewMessage from './components/NewMessage.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <NewMessage/>
      <Messages/>
    </div>
  </header>

</template>

