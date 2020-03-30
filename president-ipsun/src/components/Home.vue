<template>
  <v-container fluid>
    <waterfall :gutterWidth="10" :gutterHeight="10">
      <WaterfallItem :width="350" v-for="(card, index) in cards" :key="index">
        <v-card :color="card.color" dark>
          <v-card-title>
            <v-icon large left>mdi-message-text</v-icon>
            <span class="title font-weight-light">Lorem</span>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">"{{card.description}}"</v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img :src="card.photo"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{card.person}}</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-card-actions>
                  <v-icon class="mr-1" @click="doCopy(card.description)">mdi-content-copy</v-icon>
                  <v-icon class="mr-1">mdi-open-in-new</v-icon>
                </v-card-actions>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </WaterfallItem>
    </waterfall>

    <v-snackbar v-model="snackbarSuccess" :timeout="1500">
      Message Copied!
      <v-btn color="green" text @click="snackbarSuccess = false">Close</v-btn>
    </v-snackbar>

    <v-snackbar v-model="snackbarError" :timeout="1500" color="error">
      Error
      <v-btn color="black" text @click="snackbarSuccess = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>


<script>
import { Waterfall, WaterfallItem } from "vue2-waterfall";

export default {
  name: "Home",

  components: {
    Waterfall,
    WaterfallItem
  },

  data: () => ({
    showLoading: false,
    selectMessage: "",
    snackbarSuccess: false,
    snackbarError: false,
    cards: [
      {
        person: "Bolsonaro",
        description:
          "Quando um moleque de 9 ou 10 anos vai trabalhar em algum lugar, tá cheio de gente aí: 'trabalho escravo, não sei o quê, trabalho infantil...'. Agora, quando tá fumando um paralelepípedo de crack, ninguém fala nada. Então, o trabalho não atrapalha a vida de ninguém.",
        photo:
          "https://jornalpresidenteshow20oprimir.files.wordpress.com/2016/03/bolsonaro_rodolfostuckert_abr.jpg?w=256&h=256&crop=1",
        path: "/bolsonaro",
        color: "#0a4c5a",
        status: true,
        height: 750,
        width: 200
      },
      {
        person: "Trump",
        description:
          "The Fake News is working overtime. As Paul Manaforts lawyer said, there was 'no collusion' and events mentioned took place long before he...",
        photo:
          "https://pbs.twimg.com/profile_images/691046991325827072/oQv290pS.jpg",
        path: "/bolsonaro",
        color: "#1d2627",
        status: true,
        height: 1000,
        width: 500
      },
      {
        person: "Lula",
        description:
          "O que me frustra não é o ódio que as pessoas estão vendendo ou tentando disseminar contra o PT. O que me assusta é um programa como o Bolsa Família ser tão odiado por uma elite que todo dia joga comida fora.",
        photo:
          "https://pbs.twimg.com/profile_images/741029346203344897/T0mC9cCe_400x400.jpg",
        path: "/bolsonaro",
        color: "#1e420c",
        status: true,
        height: 1000,
        width: 500
      },
      {
        person: "Dilma",
        description:
          "Quero dizer para vocês que, de fato, Roraima é a capital mais distante de Brasília, mas eu garanto para vocês que essa distância, para nós do Governo Federal, só existe no mapa. E aí eu me considero hoje uma roraimada, roraimada, no que prova que eu estou bem perto de vocês.",
        photo:
          "https://c-sf.smule.com/sf/s63/arr/77/1b/86e8cea5-edad-4798-bca1-b065d8d53010_256.jpg",
        path: "/bolsonaro",
        color: "#921313",
        status: true,
        height: 750,
        width: 200
      },
      {
        person: "Obama",
        description:
          "Now, as a nation, we don't promise equal outcomes, but we were founded on the idea everybody should have an equal opportunity to succeed. No matter who you are, what you look like, where you come from, you can make it. That's an essential promise of America. Where you start should not determine where you end up.",
        photo:
          "https://pbs.twimg.com/profile_images/3662988939/1f30a323c41f5ba25616408aea9b0277.png",
        path: "/bolsonaro",
        color: "#44380c",
        status: true,
        height: 750,
        width: 200
      },
      {
        person: "Bolsonaro",
        description:
          "Tem que mudar a política de direitos humanos. Os direitos humanos são para humanos direitos e não para vagabundo e marginais que vivem nas costas do governo.",
        photo:
          "https://jornalpresidenteshow20oprimir.files.wordpress.com/2016/03/bolsonaro_rodolfostuckert_abr.jpg?w=256&h=256&crop=1",
        path: "/bolsonaro",
        color: "#0a4c5a",
        status: true,
        height: 750,
        width: 200
      },
      {
        person: "Dilma",
        description:"Ei vi. Você, veja... Eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar.",
        photo: "https://c-sf.smule.com/sf/s63/arr/77/1b/86e8cea5-edad-4798-bca1-b065d8d53010_256.jpg",
        path: "/dilma",
        color: "#921313",
        status: true,
        height: 750,
        width: 200
      }

      //{ picture: 'https://pbs.twimg.com/profile_images/691046991325827072/oQv290pS.jpg', text: 'Trump' },
      //{ picture: 'https://jornalpresidenteshow20oprimir.files.wordpress.com/2016/03/bolsonaro_rodolfostuckert_abr.jpg?w=256&h=256&crop=1', text: 'Bolsonaro' },
      //{ picture: 'https://pbs.twimg.com/profile_images/3662988939/1f30a323c41f5ba25616408aea9b0277.png', text: 'Obama' },
      //{ picture: 'https://c-sf.smule.com/sf/s63/arr/77/1b/86e8cea5-edad-4798-bca1-b065d8d53010_256.jpg', text: 'Dilma' },
      //{ picture: 'https://pbs.twimg.com/profile_images/741029346203344897/T0mC9cCe_400x400.jpg', text: 'Lula' },
    ]
  }),

  methods: {
    setPath(path) {
      this.$router.push({ path: path });
    },

    doCopy(message) {
      let _this = this;
      this.selectMessage = message;

      this.$copyText(this.selectMessage).then(
        function() {
          _this.snackbarSuccess = true;
        },
        function() {
          _this.snackbarError = true;
        }
      );
    }
  }
};
</script>

