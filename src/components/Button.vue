<template>
  <div class="Button">
    <b-button
      :style="`background-color: ${baseColor}; border-color: ${baseColor}; color: ${textColor}`"
      class="button btn-block"
      :disabled="disable"
      :to="nextRoute"
      pill
    >
      {{ text }}
    </b-button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    id: Number,
    text: String,
    disable: Boolean,
    nextRoute: String,
    baseColor: String,
    textColor: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");

.button {
  font-family: "Comfortaa", cursive;
  font-weight: bolder;
}

a.disabled {
  pointer-events: none;
}
</style>
