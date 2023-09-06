<template>
  <input type="checkbox" :value="isChecked" @click="$emit('toggle')" />
</template>

<script>
export default {
  props: {
    isChecked: Boolean,
  },
};
</script>

<style></style>
