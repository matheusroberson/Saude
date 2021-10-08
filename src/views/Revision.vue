<template>
  <div class="revision">
    <b-row align-v="stretch" class="container">
      <b-row class="title">
        <b-col cols="12" class="mb-4">
          <h1 class="text title">Revisão do cadastro</h1>
        </b-col>
      </b-row>
      <b-row class="subContainer">
        <b-col>
          <div>
            <p class="text">Nome completo</p>
            <p class="subtext">{{ this.data.name }}</p>
          </div>
          <div>
            <p class="text">CPF</p>
            <p class="subtext">{{ this.data.cpf }}</p>
          </div>
          <div>
            <p class="text">Número de celular ou telefone</p>
            <p class="subtext">{{ this.data.cel }}</p>
          </div>
          <div>
            <p class="text">Estado/Cidade</p>
            <p class="subtext">{{ this.data.state }} - {{ this.data.city }}</p>
          </div>
          <div>
            <p class="text">Especialidade principal</p>
            <p class="subtext">{{ this.data.specialty }}</p>
          </div>
          <div>
            <p class="text">Preço da consulta</p>
            <p class="subtext">R$ {{ this.data.price }}</p>
          </div>
          <div>
            <p class="text">Formas de pagamento da consulta</p>
            <span v-for="(item, index) in this.data.payment" :key="index">
              <p class="subtext">{{ item }}</p>
            </span>
          </div>
          <div>
            <b-row>
              <b-col>
                <Button
                  baseColor="#FBDE40"
                  textColor="#483698"
                  text="CASDASTRAR PROFISSIONAL"
                  :disable="false"
                  nextRoute="/conclusion"
                />
                <Button
                  baseColor="transparent"
                  textColor="#483698"
                  text="Editar Cadastro"
                  :disable="false"
                  nextRoute="/"
                />
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col class="d-none d-sm-block">
          <b-img
            src="../assets/desktop-pagina-3.png"
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

import Button from "@/components/Button.vue";

export default {
  name: "Revision",
  components: {
    Button,
  },
  computed: mapGetters({
    data: "getCurrentData",
  }),
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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.text {
  font-family: "Comfortaa", cursive;
  font-weight: bolder;
  font-size: 0.8rem;
}
.subtext {
  font-family: "Comfortaa", cursive;
  color: #8a8a8a;
  font-size: 0.8rem;
}

.text.title {
  color: #483698;
  font-size: 1.8rem;
}
</style>
// #483698 #FFE776 #FBDE40 #F9F9F9 #DC3545 #8A8A8A #282828