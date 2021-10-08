<template>
  <div class="checkbox">
    <b-form-group
      :label="label"
      :label-for="`checkbox-${id}`"
      v-slot="{ ariaDescribedby }"
      class="fieldset"
    >
      <b-form-checkbox-group
        :id="`checkbox-${id}`"
        v-model="selecteds"
        :name="`checkbox-${id}`"
        :aria-describedby="ariaDescribedby"
        stacked
      >
        <b-form-checkbox
          v-for="option in options"
          :value="option.value"
          :key="option.value"
          class="option"
        >
          {{ option.text }}
          <b-form-group
            v-if="
              selecteds.length !== 0 &&
              selecteds.filter(
                (item) => item === subCategoryTo && item === option.value
              ).length !== 0
            "
            :label="option.label"
            v-slot="{ ariadescribedby }"
          >
            <b-form-radio-group
              v-model="selectedRadio"
              :aria-describedby="ariadescribedby"
              name="radios"
              :options="option.options"
              stacked
            >
              <b-form-invalid-feedback :state="state"
                >Selecione alguma opção</b-form-invalid-feedback
              >
            </b-form-radio-group>
          </b-form-group>
        </b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Checkbox",
  props: {
    id: String,
    label: String,
    options: Array,
    subCategoryTo: String,
  },
  data() {
    return {
      selectedRadio: "",
    };
  },
  methods: {
    ...mapActions(["setCurrentData"]),
    updateSelected: function () {
      this.selecteds = this.selecteds.map((item) => {
        if (item.includes(this.subCategoryTo)) {
          item = `${this.subCategoryTo} ${this.selectedRadio}`;
        }
        return item;
      });
    },
  },
  watch: {
    selectedRadio: function () {
      this.updateSelected();
    },
  },
  computed: {
    ...mapGetters({
      data: "getCurrentData",
    }),
    state() {
      return Boolean(this.selectedRadio);
    },
    selecteds: {
      get() {
        const stateVal = this.$store.state[this.id];
        return stateVal.map((item) => {
          if (item.includes(this.subCategoryTo)) {
            this.selectedRadio = item.replace(this.subCategoryTo, "").trim();
            item = this.subCategoryTo;
          }
          return item;
        });
      },
      set(val) {
        if (val === this.subCategoryTo) {
          this.selectedRadio = "";
        }

        this.setCurrentData({ ...this.data, [this.id]: val });
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

.fieldset {
  font-family: "Open Sans", sans-serif;
  margin-left: 14px;
}

.option {
  color: #282828;
  font-weight: bolder;
  background-color: #f9f9f9;
  padding: 20px 0px 20px 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 10px 0px;
}
</style>