<template>
  <div class="conclusion">
    <b-row class="container">
      <b-row class="title">
        <b-col cols="12" offset="1" class="mt-3">
          <h1 class="text title">Cadastro Concluído</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mb-3 d-block d-sm-none">
          <b-img
            src="../assets/mobile-signin.png"
            fluid
            alt="Medic Image"
          ></b-img>
        </b-col>
        <b-col offset="2" class="d-none d-sm-block">
          <b-img
            src="../assets/desktop-signin.png"
            fluid
            alt="Medic Image"
          ></b-img>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="auto" class="ml-auto">
          <Button
            baseColor="transparent"
            textColor="#483698"
            text="Início ⇁"
            :disable="false"
            nextRoute="/"
          />
        </b-col>
      </b-row>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Button from "@/components/Button.vue";
import router from "../router/index";

export default {
  name: "Conclusion",
  components: {
    Button,
  },
  created() {
    if (!this.firstSwitch || !this.lastSwitch) {
      router.push("/");
    }
  },
  computed: mapGetters({
    data: "getCurrentData",
    firstSwitch: "getFirstStep",
    lastSwitch: "getLastStep",
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
  display: flex;
  flex-direction: column;
}

.text {
  font-family: "Comfortaa", cursive;
  font-weight: bolder;
  font-size: 0.8rem;
}

.text.title {
  color: #483698;
  font-size: 1.8rem;
}
</style>
// #483698 #FFE776 #FBDE40 #F9F9F9 #DC3545 #8A8A8A #282828