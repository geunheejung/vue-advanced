<template>
  <ul class="list-container">
    <li v-for="item in listData" :key="item.id" class="list-item">
      <div v-if="item.points" class="points">
        {{ item.points }}
      </div>
      <div>
        <p class="title">
          <a :href="item.url">
            {{ item.title }}

            <small>({{ item.url }})</small>
          </a>
        </p>
        <small v-if="item.user" class="link-text">
          by
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
/**
 * 1. props로 data List를 받는다.
 * 2. list를 순회하면서 데이터 부분들을 slot으로 받는다.
 * 3. slot으로 받아야 마다마다 서로 다른 데이터 바인딩의 대해서 커버할 수 있을듯.
 */
export default {
  name: "PostList",
  props: ["listData"],
};
</script>

<style>
.list-container {
  display: grid;
  margin: 0;
  padding: 0;
}

.list-container .list-item {
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
