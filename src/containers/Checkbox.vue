<template>
  <check-box-comp v-model="isChecked" @toggle="toggleCheckbox" />
</template>

<script>
import CheckBoxComp from "@/components/CheckBoxComp.vue";
export default {
  components: {
    CheckBoxComp,
  },
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    toggleCheckbox() {
      debugger;
    },
  },
};
</script>

<style></style>
