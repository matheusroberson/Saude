<template>
  <div class="home">
    <b-row align-v="stretch" class="container">
      <b-row class="title">
        <b-col cols="12" class="mb-3">
          <h1 class="text title">Sobre o profissional</h1>
        </b-col>
        <b-col class="mb-1">
          <h3 class="text subtitle">Dados do profissional</h3>
        </b-col>
      </b-row>
      <b-row class="subContainer">
        <b-col>
          <Input
            :id="1"
            label="Nome completo*"
            placeholder="Digite o nome completo"
            msgInvalidFeedBack="Digite entre 3 a 48 caracteres"
            :range="{ begins: 3, ends: 48 }"
          />
          <Input
            :id="2"
            label="CPF*"
            placeholder="Digite um CPF"
            msgInvalidFeedBack="O campo deve conter 11 caracteres númericos"
            mask="###.###.###-##"
            :range="{ begins: 14, ends: 14 }"
            class="input-small"
          />
          <Input
            :id="3"
            label="Número de celular*"
            placeholder="(00) 0 0000-0000"
            msgInvalidFeedBack="O campo deve conter 11 caracteres númericos"
            mask="(##) # ####-####"
            class="input-small"
            :range="{ begins: 16, ends: 16 }"
          />
          <b-row>
            <b-col>
              <Select
                :id="1"
                :optionsGroup="optionsState"
                label="Estado*"
                :disable="false"
              />
            </b-col>
            <b-col>
              <Select
                :id="1"
                :optionsGroup="optionCity"
                label="Cidade*"
                :disable="disableSelect"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col col md="8" lg="9">
              <b-progress :max="2" class="mb-3 progress"
                ><b-progress-bar
                  class="progress-bar"
                  :value="1"
                ></b-progress-bar>
              </b-progress>
            </b-col>
            <b-col>
              <h5>1 de 2</h5>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <Button
                :baseColor="disableButton ? '#B9B9B9' : '#483698'"
                textColor="#F9F9F9"
                text="PRÓXIMO"
                :disable="disableButton"
                nextRoute="Attendance"
                class="button"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col class="d-none d-sm-block">
          <b-img
            src="../assets/desktop-pagina-1.png"
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

export default {
  name: "Home",
  components: {
    Input,
    Select,
    Button,
  },
  computed: mapGetters({
    data: "getCurrentData",
  }),
  watch: {
    data: function () {
      if (this.data.state) {
        this.disableSelect = !this.disableSelect;
      }

      this.optionCity = this.optionsToCity.filter(
        (item) => item.value == this.data.state
      ).options;
    },
  },
  data() {
    return {
      optionsState: [
        { value: "Paraná", text: "Paraná" },
        { value: "Rio Grande do Sul", text: "Rio Grande do Sul" },
        { value: "Santa Catarina", text: "Santa Catarina" },
      ],
      optionCity: [],
      optionsToCity: [
        {
          value: "Paraná",
          options: [
            {
              value: "Londrina",
              text: "Londrina",
            },
            {
              value: "Maringá",
              text: "Maringá",
            },
          ],
        },
        {
          value: "Rio Grande do Sul",
          options: [
            {
              value: "Pelotas",
              text: "Pelotas",
            },
            {
              value: "Porto Alegre",
              text: "Porto Alegre",
            },
          ],
        },
        {
          value: "Santa Catarina",
          options: [
            { value: "Florianópolis", text: "Florianópolis" },
            { value: "Joinville", text: "Joinville" },
          ],
        },
      ],
      disableSelect: true,
      disableButton: true,
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
</style>
// #483698 #FFE776 #FBDE40 #F9F9F9 #DC3545 #8A8A8A #282828