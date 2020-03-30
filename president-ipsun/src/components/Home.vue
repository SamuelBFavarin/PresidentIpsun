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
                </v-card-actions>
              </v-row>

            </v-list-item>
          </v-card-actions>
        </v-card>
      </WaterfallItem>
    </waterfall>

    <v-snackbar
      v-model="snackbarSuccess"
      :timeout="1500"
    >
      Message Copied!
      <v-btn
        color="green"
        text
        @click="snackbarSuccess = false"
      >
        Close
      </v-btn>
    </v-snackbar>

    <v-snackbar
      v-model="snackbarError"
      :timeout="1500"
      color="error"
    >
      Error
      <v-btn
        color="black"
        text
        @click="snackbarSuccess = false"
      >
        Close
      </v-btn>
    </v-snackbar>

  </v-container>
</template>


<script>
import {Waterfall, WaterfallItem} from 'vue2-waterfall';

export default {
  name: "Home",

  components: {
    Waterfall,
    WaterfallItem
  },

  data: () => ({
    showLoading: false,
    selectMessage: '',
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
        key: 6,
        person: "Bolsonaro",
        description:
          "Menina brinca de boneca e menino brinca de arminha, está ok, imprensa? Foram os pais que decidiram fazer isso aí, os meus já atiravam com 5 anos. Está com com quantos anos de idade?",
        photo:
          "https://jornalpresidenteshow20oprimir.files.wordpress.com/2016/03/bolsonaro_rodolfostuckert_abr.jpg?w=256&h=256&crop=1",
        path: "/bolsonaro",
        color: "#0a4c5a",
        status: true,
        height: 750,
        width: 200
      },
      {
        key: 7,
        person: "Trump",
        description:
          "Just read the nice remarks by President Jimmy Carter about me and how badly I am treated by the press (Fake News). Thank you Mr. President!",
        photo:
          "https://pbs.twimg.com/profile_images/691046991325827072/oQv290pS.jpg",
        path: "/bolsonaro",
        color: "#1d2627",
        status: true,
        height: 1000,
        width: 500
      },
      {
        key: 8,
        person: "Lula",
        description:
        "Precisa entender que democracia é a convivência da diversidade. Não quero que quem votou no Aécio goste de mim. Eu quero que a gente aprenda a conviver de forma civilizada com as nossas diferenças.",
        photo:
          "https://pbs.twimg.com/profile_images/741029346203344897/T0mC9cCe_400x400.jpg",
        path: "/bolsonaro",
        color: "#1e420c",
        status: true,
        height: 1000,
        width: 500
      },
      {
        key: 9,
        person: "Dilma",
        description:
          "Não, querido, eu acho que o meu mandato é, eu diria assim, mais firme do que essa rede. Agora, a rede, eu acho que ela tem um lado lúdico, sabe? Porque isso que as crianças gostam tanto no pavilhão. Porque, quando você está lá em cima… Eu não posso ficar aqui brincando, não é? Então… Mas você percebe direitinho como é que dá para brincar, porque se você inclinar para um lado e, imediatamente, virar para o outro, você fica balançando mesmo, você consegue equilibrar.",
        photo:
          "https://c-sf.smule.com/sf/s63/arr/77/1b/86e8cea5-edad-4798-bca1-b065d8d53010_256.jpg",
        path: "/bolsonaro",
        color: "#921313",
        status: true,
        height: 750,
        width: 200
      },
      {
        key: 10,
        person: "Obama",
        description:
            "Where the stakes are the highest, in the war on terror, we cannot possibly succeed without extraordinary international cooperation. Effective international police actions require the highest degree of intelligence sharing, planning and collaborative enforcement.",
        photo:
          "https://pbs.twimg.com/profile_images/3662988939/1f30a323c41f5ba25616408aea9b0277.png",
        path: "/bolsonaro",
        color: "#44380c",
        status: true,
        height: 750,
        width: 200
      },
      {
        key: 11,
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
        key: 7,
        person: "Trump",
        description:
          "We're rounding 'em up in a very humane way, in a very nice way. And they're going to be happy because they want to be legalized. And, by the way, I know it doesn't sound nice. But not everything is nice.",
        photo:
          "https://pbs.twimg.com/profile_images/691046991325827072/oQv290pS.jpg",
        path: "/bolsonaro",
        color: "#1d2627",
        status: true,
        height: 1000,
        width: 500
      },
      {
        key: 8,
        person: "Lula",
        description:
        "Precisa entender que democracia é a convivência da diversidade. Não quero que quem votou no Aécio goste de mim. Eu quero que a gente aprenda a conviver de forma civilizada com as nossas diferenças.",
        photo:
          "https://pbs.twimg.com/profile_images/741029346203344897/T0mC9cCe_400x400.jpg",
        path: "/bolsonaro",
        color: "#1e420c",
        status: true,
        height: 1000,
        width: 500
      },
      {
        key: 9,
        person: "Dilma",
        description:
          "Não, querido, eu acho que o meu mandato é, eu diria assim, mais firme do que essa rede. Agora, a rede, eu acho que ela tem um lado lúdico, sabe? Porque isso que as crianças gostam tanto no pavilhão. Porque, quando você está lá em cima… Eu não posso ficar aqui brincando, não é? Então… Mas você percebe direitinho como é que dá para brincar, porque se você inclinar para um lado e, imediatamente, virar para o outro, você fica balançando mesmo, você consegue equilibrar.",
        photo:
          "https://c-sf.smule.com/sf/s63/arr/77/1b/86e8cea5-edad-4798-bca1-b065d8d53010_256.jpg",
        path: "/bolsonaro",
        color: "#921313",
        status: true,
        height: 750,
        width: 200
      },
      {
        key: 10,
        person: "Obama",
        description:
            "Where the stakes are the highest, in the war on terror, we cannot possibly succeed without extraordinary international cooperation. Effective international police actions require the highest degree of intelligence sharing, planning and collaborative enforcement.",
        photo:
          "https://pbs.twimg.com/profile_images/3662988939/1f30a323c41f5ba25616408aea9b0277.png",
        path: "/bolsonaro",
        color: "#44380c",
        status: true,
        height: 750,
        width: 200
      },
      {
        key: 11,
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
      },
      {
        person: "Dilma",
        description:"A lua é muito mais importante que o sol, porque ela aparece a noite, quando está tudo escuro. Já o sol, aparece de dia quando já está tudo claro, ou seja, não tem utilidade nenhuma.",
        photo: "https://c-sf.smule.com/sf/s63/arr/77/1b/86e8cea5-edad-4798-bca1-b065d8d53010_256.jpg",
        path: "/dilma",
        color: "#921313",
        status: true,
        height: 750,
        width: 200
      }

    ]
  }),

  methods: {
    setPath(path) {
      this.$router.push({ path: path });
    },

    doCopy(message) {
        let _this = this
        this.selectMessage = message

        this.$copyText(this.selectMessage).then(function () {
            _this.snackbarSuccess = true

        }, function () {
            _this.snackbarError = true
        })
    }
  }
};
</script>

