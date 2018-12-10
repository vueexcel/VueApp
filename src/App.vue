<template>
  <div id="app">
    <transition name="slither" >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
/* transition classes */
.slither-enter-active, .slither-leave-active {
  transition: transform 0.5s;
}

.slither-enter, .slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to, .slither-leave {
  transform: translateX(0);
}
/* transition classes ends */
</style>
