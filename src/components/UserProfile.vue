<template>
  <div class="user-container">
    <div class="user-icon">
      <i class="fa-solid fa-user" />
    </div>
    <div class="user-description">
      <span>
        <slot name="id" />
      </span>

      <div class="time">
        <slot name="created" />
      </div>

      <p>
        <slot name="karma" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 0.5rem;
}

.time {
  font-size: 0.7rem;
}
</style>
