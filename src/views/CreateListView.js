import { types } from "@/store";
import bus from "@/utils/bus";
import ListView from "./ListView.vue";
import { url } from "@/api";

export default function createdListView(componentName) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들
    name: componentName,
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
    render(createElement) {
      return createElement(ListView);
    },
  };
}
