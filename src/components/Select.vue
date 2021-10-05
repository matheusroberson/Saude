<template>
  <div class="select">
    <b-form-group :label="label" :label-for="`select-${id}`" class="fieldset">
      <b-form-select
        v-model="selected"
        :options="options"
        :disabled="disable"
        class="select"
      ></b-form-select>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    id: Number,
    optionsGroup: Array,
    label: String,
    disable: Boolean,
  },
  data() {
    return {
      selected: null,
      options: this.optionsGroup,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

.fieldset {
  font-family: "Open Sans", sans-serif;
}

.select {
  border-color: #483698;
}
</style>