<template>

  <v-sheet class="px-2">
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 md4 v-for="card in cards" :key="card.key">
                
                <v-card class="mx-auto" color="#26c6da" dark max-width="300">
                    <v-card-title>
                    <v-icon large left>mdi-twitter</v-icon>
                    <span class="title font-weight-light">Lorem</span>
                    </v-card-title>

                    <v-card-text
                    class="headline font-weight-bold"
                    >"{{card.description}}"</v-card-text>

                    <v-card-actions>
                    <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                        <v-img
                            class="elevation-6"
                            :src="card.photo"
                        ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title>{{card.person}}</v-list-item-title>
                        </v-list-item-content>

                        <v-row align="center" justify="end">
                        <v-card-actions>
                            <v-icon class="mr-1" @click="alert('aqui')">mdi-content-copy</v-icon>
                            <v-icon class="mr-1" @click="alert('aqui')">mdi-open-in-new</v-icon>
                        </v-card-actions>
                        </v-row>
                    </v-list-item>
                    </v-card-actions>
                </v-card>
            
            </v-flex>
        </v-layout>
    </v-container>


  </v-sheet>

</template>


<script>
export default {
  name: "Home",

  data: () => ({
    showLoading: false,
    cards: [
      {
        key: 0,
        person: "Bolsonaro",
        description: "Quando um moleque de 9 ou 10 anos vai trabalhar em algum lugar, tá cheio de gente aí: 'trabalho escravo, não sei o quê, trabalho infantil...'. Agora, quando tá fumando um paralelepípedo de crack, ninguém fala nada. Então, o trabalho não atrapalha a vida de ninguém.",
        photo: "https://jornalpresidenteshow20oprimir.files.wordpress.com/2016/03/bolsonaro_rodolfostuckert_abr.jpg?w=256&h=256&crop=1",
        path: "/bolsonaro",
        color: "blue darken-3",
        status: true
      },
      {
        key: 1,
        person: "Trump",
        description: "Adicione novos Administradores",
        photo: "https://pbs.twimg.com/profile_images/691046991325827072/oQv290pS.jpg",
        path: "/admin",
        color: "blue darken-3",
        status: true
      },
      {
        key: 2,
        person: "Lula",
        description: "bah meu",
        photo: "https://pbs.twimg.com/profile_images/741029346203344897/T0mC9cCe_400x400.jpg",
        path: "/support",
        color: "yellow darken-1",
        status: true
      },
      {
        key: 3,
        person: "Dilma",
        description: "Atualize informações sobre sua empresa",
        photo: "https://c-sf.smule.com/sf/s63/arr/77/1b/86e8cea5-edad-4798-bca1-b065d8d53010_256.jpg",
        path: "/company",
        color: "green accent-4",
        status: true
      },
      {
        key: 4,
        person: "Bolsonaro",
        description: "Um dia, se o presidente da OAB quiser saber como é que o pai dele desapareceu no período militar, conto pra ele. Ele não vai querer ouvir a verdade. Conto pra ele.",
        photo: "https://jornalpresidenteshow20oprimir.files.wordpress.com/2016/03/bolsonaro_rodolfostuckert_abr.jpg?w=256&h=256&crop=1",
        path: "/bolsonaro",
        color: "blue darken-3",
        status: true
      },
      {
        key: 5,
        person: "Obama",
        description: "Um dia, se o presidente da OAB quiser saber como é que o pai dele desapareceu no período militar, conto pra ele. Ele não vai querer ouvir a verdade. Conto pra ele.",
        photo: "https://pbs.twimg.com/profile_images/3662988939/1f30a323c41f5ba25616408aea9b0277.png",
        path: "/bolsonaro",
        color: "blue darken-3",
        status: true
      }
      
    ]
  }),

  methods: {
    setPath(path) {
      this.$router.push({ path: path });
    },

    test() {
      let url = process.env.VUE_APP_API_BASE_URL + "/users/sync";

      let token = this.getParameterByName("token");

      let yourConfig = {
        headers: {
          Authorization: "Bearer " + token
        }
      };
      this.axios.get(url, yourConfig).then(response => {
        console.log(response.data);
      });
    },

    getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[[]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  }
};
</script>

