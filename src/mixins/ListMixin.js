import { mapState } from "vuex";
import { types } from "@/store";
import bus from "@/utils/bus";
import PostList from "@/components/PostList.vue";

export default {
  components: {
    PostList,
  },
  // 재사용 할 컴포넌트 옵션
  created() {
    const { $store, $route } = this;

    bus.$emit("spinner:start");

    $store
      .dispatch({ type: types.FETCH_DATA, data: $route.name })
      .then((res) => {
        console.log("[[ FETCHED ]]");
        bus.$emit("spinner:end");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    ...mapState(["list"]),
  },
};
