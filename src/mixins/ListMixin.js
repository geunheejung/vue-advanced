import { mapState } from "vuex";
import { types } from "@/store";
import bus from "@/utils/bus";
import PostList from "@/components/PostList.vue";

/**
 * 1. 페이지에 진입 하면 데이터를 요청한다.
 * 2. 데이터를 요청하면 스피너를 킨다.
 * 3. 데이터 요청이 완료 되면 스피너를 끈다.
 * 4. 데이터를 요청하기 전에 기존의 데이터를 초기화 한다.
 * 5. 다른 페이지로 이동할 경우 현재 데이터 요청을 종료한다.
 */

export default {
  components: {
    PostList,
  },
  beforeCreate() {
    this.$store.commit(types.SET_DATA, { key: "list", data: [] });
  },
  data() {
    return {
      timeoutId: null,
    };
  },
  created() {
    bus.$emit("spinner:start");

    this.timeoutId = setTimeout(() => {
      const { $store, $route } = this;

      $store
        .dispatch({ type: types.FETCH_DATA, data: $route.name })
        .then((res) => {
          console.log("[[ FETCHED ]]");
          bus.$emit("spinner:end");
        })
        .catch((error) => {
          console.log(error);
          bus.$emit("spinner:end");
        });
    }, 3000);
  },
  computed: {
    ...mapState(["list"]),
  },
  unmounted() {
    clearTimeout(this.timeoutId);
  },
};
