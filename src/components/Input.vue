<template>
  <div class="input">
    <b-form-group
      :label="label"
      :label-for="`input-${id}`"
      :invalid-feedback="invalidFeedback"
      :state="state"
      class="fieldset"
    >
      <b-input-group>
        <template v-if="prepend" #prepend>
          <b-input-group-text class="input-prepend">{{
            prepend
          }}</b-input-group-text>
        </template>
        <b-form-input
          :id="`input-${id}`"
          v-model="text"
          :state="state"
          :placeholder="placeholder"
          trim
          v-mask="mask"
          class="input"
          input
        ></b-form-input>
      </b-input-group>
    </b-form-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Input",
  props: {
    id: String,
    label: String,
    placeholder: String,
    msgInvalidFeedBack: String,
    mask: Array,
    prepend: String,
    rangeKind: String,
    range: { begins: Number, ends: Number },
  },
  computed: {
    ...mapGetters({
      data: "getCurrentData",
      switch: "getFirstStep",
    }),
    state() {
      if (this.rangeKind === "value") {
        if (this.text > 0) {
          return this.text >= this.range.begins && this.text <= this.range.ends;
        }
      }

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
    text: {
      get() {
        return this.$store.state[this.id];
      },
      set(value) {
        this.setCurrentData({ ...this.data, [this.id]: value });
      },
    },
  },
  methods: {
    ...mapActions(["setCurrentData"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

.fieldset {
  font-family: "Open Sans", sans-serif;
}

.input {
  border-color: #483698;
}

.input-prepend {
  border-color: #483698;
  background: #483698;
  color: #fff;
  font-weight: bolder;
}
</style>
