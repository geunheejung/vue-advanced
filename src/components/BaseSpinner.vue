<template>
  <div v-if="isSpinner" class="loading">
    <div class="spinner" />
  </div>
</template>

<script>
export default {
  name: "BaseSpinner",
  props: ["isSpinner"],
};
</script>

<style scoped>
.loading {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading .spinner {
  box-sizing: border-box;
  position: absolute;
  /* 초기 지점에서 지정된 만큼 이동한다. */
  top: 50%;
  left: 50%;
  width: 4rem;
  height: 4rem;
  margin-top: -2rem;
  margin-left: -2rem;
  border-radius: 50%;
  border: 0.5rem solid transparent;
  border-top-color: #41b883;
  border-bottom-color: #41b883;
  animation: spinner 0.8s ease infinite;
}
</style>
