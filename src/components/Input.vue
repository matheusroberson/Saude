<template>
  <div class="input">
    <b-form-group
      :label="label"
      :label-for="`input-${id}`"
      :invalid-feedback="invalidFeedback"
      :state="state"
      class="fieldset"
    >
      <b-form-input
        :id="`input-${id}`"
        v-model="text"
        :state="state"
        :placeholder="placeholder"
        trim
        v-mask="mask"
        class="input"
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    id: Number,
    label: String,
    placeholder: String,
    msgInvalidFeedBack: String,
    mask: String,
    range: { begins: Number, ends: Number },
  },
  computed: {
    state() {
      if (this.text.length > 0) {
        return (
          this.text.length >= this.range.begins &&
          this.text.length <= this.range.ends
        );
      }
      return null;
    },
    invalidFeedback() {
      if (
        this.text.length < this.range.begins ||
        this.text.length > this.range.ends
      ) {
        return this.msgInvalidFeedBack;
      }
      return "Campo Obrigatório";
    },
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

.fieldset {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Open Sans", sans-serif;
}

.input {
  border-color: #483698;
}
</style>
