<template>
  <div class="attendance">
    <b-link class="arrow left mb-3" to="/"></b-link>
    <b-row align-v="stretch" class="container">
      <b-row class="title">
        <b-col cols="12" class="mb-3">
          <h1 class="text title">Sobre o atendimento</h1>
        </b-col>
        <b-col class="mb-1">
          <h3 class="text subtitle">Detalhes do atendimento</h3>
        </b-col>
      </b-row>
      <b-row class="subContainer">
        <b-col>
          <Select
            id="specialty"
            :optionsGroup="optionsSelect"
            label="Especialidade principal*"
            :disable="false"
          />
          <Input
            id="price"
            label="Informe o preço da consulta*"
            placeholder="Valor"
            msgInvalidFeedBack="Digite com valor correto"
            :range="{ begins: 5, ends: 6 }"
            prepend="R$"
            :mask="['###.##', '##.##']"
            class="input-small"
          />
          <Checkbox
            id="payment"
            label="Formas de pagamento da consulta*"
            :options="optionsCheckbox"
            subCategoryTo="Cartão de crédito"
          />
          <b-row>
            <b-col col md="8" lg="9">
              <b-progress :max="2" class="mb-3 progress"
                ><b-progress-bar
                  class="progress-bar"
                  :value="2"
                ></b-progress-bar>
              </b-progress>
            </b-col>
            <b-col>
              <h5>2 de 2</h5>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <Button
                :baseColor="!this.switch ? '#B9B9B9' : '#483698'"
                textColor="#F9F9F9"
                text="PRÓXIMO"
                :disable="!this.switch"
                nextRoute="/revision"
                class="button"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col class="d-none d-sm-block">
          <b-img
            src="../assets/desktop-pagina-2.png"
            fluid
            alt="Medic Image"
          ></b-img
        ></b-col>
      </b-row>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Select from "@/components/Select.vue";
import Checkbox from "@/components/Checkbox.vue";

export default {
  name: "Attendance",
  components: {
    Input,
    Select,
    Button,
    Checkbox,
  },
  computed: mapGetters({
    data: "getCurrentData",
    switch: "getLastStep",
  }),
  data() {
    return {
      optionsSelect: [
        { value: null, text: "Seleciona a especialidade" },
        { value: "Cardiologia", text: "Cardiologia" },
        { value: "Dermatologia", text: "Dermatologia" },
        { value: "Neurologia", text: "Neurologia" },
        { value: "Oftalmologia", text: "Oftalmologia" },
        { value: "Psiquiatria", text: "Psiquiatria" },
        { value: "Urologia", text: "Urologia" },
      ],
      optionsCheckbox: [
        { text: "Pix", value: "Pix" },
        { text: "Em dinheiro", value: "Em dinheiro" },
        {
          text: "Cartão de crédito",
          value: "Cartão de crédito",
          label: "Parcelamento em",
          options: [
            { text: "1x, sem juros", value: "Parcelamento em 1x, sem juros" },
            { text: "2x, sem juros", value: "Parcelamento em 2x, sem juros" },
            { text: "3x, sem juros", value: "Parcelamento em 3x, sem juros" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");

.container {
  background-color: #f9f9f9;
  /* height: 80vh; */
  width: 80vw;
  border-radius: 10px;
  padding: 2rem;
}

.subContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.progress .progress-bar {
  background-color: #483698;
}

.input-small {
  width: 75%;
}

.text {
  font-family: "Comfortaa", cursive;
  font-weight: bolder;
}

.text.title {
  color: #483698;
  font-size: 1.8rem;
}

.text.subtitle {
  font-size: 1rem;
}

.arrow {
  border: solid #483698;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 4px;
  background-color: transparent;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
</style>
// #483698 #FFE776 #FBDE40 #F9F9F9 #DC3545 #8A8A8A #282828