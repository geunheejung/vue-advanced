<template>
  <div v-if="item" class="item-container">
    <template v-if="item.points">
      <div class="points">
        {{ item.points }}
      </div>
    </template>

    <div>
      <p class="title">
        <template v-if="item.type === 'ask'">
          <router-link :to="item.url">{{ item.title }}</router-link>
        </template>
        <template v-else>
          <a :href="item.url">
            {{ item.title }}
            <small v-if="item.domain">({{ item.domain }})</small>
          </a>
        </template>
      </p>
      <small v-if="item.user" class="link-text">
        by
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ["item"],
  created() {},
};
</script>

<style scoped>
.list-container .item-container {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 3.75rem;
  align-items: center;
  padding: 0 0.875rem;
  border-bottom: 1px solid #eee;
  list-style: none;
}

.list-container .points {
  width: 5rem;
  text-align: center;
  color: #42b883;
}

.list-container .title {
  margin: 0;
}

.list-container .title small {
  color: #828282;
  font-size: 0.5rem;
}

.list-container .link-text {
  color: #828282;
}
</style>
