<template>
  <v-container>
    <v-card class="mx-auto" max-width="1200">
      <v-container>
        <div>Build your</div>
        <p class="display-1 text--primary">President Ipsum</p>

        <v-row>
          <v-col cols="12" md="4">
            <v-card-text>
              <v-text-field
                :rules="numberRules"
                v-model="selectedNumber"
                type="number"
                label="Number of paragraphs"
              ></v-text-field>
            </v-card-text>
          </v-col>

          <v-col cols="12" md="6">
            <v-card-text>
              <v-select
                v-model="selectedPresident"
                :items="data"
                label="Select your president"
                item-value="text"
              ></v-select>
            </v-card-text>
          </v-col>

          <v-col cols="12" md="2">
            <v-card-text>
              <v-card-actions>
                <v-btn class="mt-2" @click="buildText()" text color="blue dark-4">Build</v-btn>
              </v-card-actions>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-card v-if="text" class="mx-auto mt-5" max-width="1200">
      <div style="position: relative">
        <v-btn @click="doCopy()" absolute dark fab top right color="blue">
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </div>

      <v-container>
        <v-textarea
          :rows="12"
          :label="'Lorem Ipsun ' + selectedPresident "
          :value="text"
          hint="Hint text"
          solo
        ></v-textarea>
      </v-container>
    </v-card>

    <v-snackbar v-model="snackbarSuccess" :timeout="1500">
      Message Copied!
      <v-btn color="green" text @click="snackbarSuccess = false">Close</v-btn>
    </v-snackbar>

    <v-snackbar v-model="snackbarError" :timeout="1500" color="error">
      Error
      <v-btn color="black" text @click="snackbarSuccess = false">Close</v-btn>
    </v-snackbar>
    {{data2}}
  </v-container>
</template>


<script>
import json from "../json/president.json";

export default {
  name: "Home",

  presidentJson: json,

  data: () => ({
    selectedPresident: null,
    selectedNumber: null,
    text: "",

    selectMessage: "",
    snackbarSuccess: false,
    snackbarError: false,

    data: [
      {
        picture:
          "https://pbs.twimg.com/profile_images/691046991325827072/oQv290pS.jpg",
        text: "Trump"
      },
      {
        picture:
          "https://jornalpresidenteshow20oprimir.files.wordpress.com/2016/03/bolsonaro_rodolfostuckert_abr.jpg?w=256&h=256&crop=1",
        text: "Bolsonaro"
      },
      {
        picture:
          "https://pbs.twimg.com/profile_images/3662988939/1f30a323c41f5ba25616408aea9b0277.png",
        text: "Obama"
      },
      {
        picture:
          "https://c-sf.smule.com/sf/s63/arr/77/1b/86e8cea5-edad-4798-bca1-b065d8d53010_256.jpg",
        text: "Dilma"
      },
      {
        picture:
          "https://pbs.twimg.com/profile_images/741029346203344897/T0mC9cCe_400x400.jpg",
        text: "Lula"
      }
    ],

    text_bolsonaro: [
      "Quando um moleque de 9 ou 10 anos vai trabalhar em algum lugar, tá cheio de gente aí: 'trabalho escravo, não sei o quê, trabalho infantil...'. Agora, quando tá fumando um paralelepípedo de crack, ninguém fala nada. Então, o trabalho não atrapalha a vida de ninguém.",
      "Tem que mudar a política de direitos humanos. Os direitos humanos são para humanos direitos e não para vagabundo e marginais que vivem nas costas do governo.",
      "Menina brinca de boneca e menino brinca de arminha, está ok, imprensa? Foram os pais que decidiram fazer isso aí, os meus já atiravam com 5 anos. Está com com quantos anos de idade?"
    ],

    text_dilma: [
      "Quero dizer para vocês que, de fato, Roraima é a capital mais distante de Brasília, mas eu garanto para vocês que essa distância, para nós do Governo Federal, só existe no mapa. E aí eu me considero hoje uma roraimada, roraimada, no que prova que eu estou bem perto de vocês.",
      "Não, querido, eu acho que o meu mandato é, eu diria assim, mais firme do que essa rede. Agora, a rede, eu acho que ela tem um lado lúdico, sabe? Porque isso que as crianças gostam tanto no pavilhão. Porque, quando você está lá em cima… Eu não posso ficar aqui brincando, não é? Então… Mas você percebe direitinho como é que dá para brincar, porque se você inclinar para um lado e, imediatamente, virar para o outro, você fica balançando mesmo, você consegue equilibrar.",
      "Ei vi. Você, veja... Eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar.",
      "A lua é muito mais importante que o sol, porque ela aparece a noite, quando está tudo escuro. Já o sol, aparece de dia quando já está tudo claro, ou seja, não tem utilidade nenhuma."
    ],

    text_trump: [
      "The Fake News is working overtime. As Paul Manaforts lawyer said, there was 'no collusion' and events mentioned took place long before he...",
      "Just read the nice remarks by President Jimmy Carter about me and how badly I am treated by the press (Fake News). Thank you Mr. President!",
      "We're rounding 'em up in a very humane way, in a very nice way. And they're going to be happy because they want to be legalized. And, by the way, I know it doesn't sound nice. But not everything is nice."
    ],

    text_obama: [
      "Now, as a nation, we don't promise equal outcomes, but we were founded on the idea everybody should have an equal opportunity to succeed. No matter who you are, what you look like, where you come from, you can make it. That's an essential promise of America. Where you start should not determine where you end up.",
      "Where the stakes are the highest, in the war on terror, we cannot possibly succeed without extraordinary international cooperation. Effective international police actions require the highest degree of intelligence sharing, planning and collaborative enforcement."
    ],

    text_lula: [
      "O que me frustra não é o ódio que as pessoas estão vendendo ou tentando disseminar contra o PT. O que me assusta é um programa como o Bolsa Família ser tão odiado por uma elite que todo dia joga comida fora.",
      "Precisa entender que democracia é a convivência da diversidade. Não quero que quem votou no Aécio goste de mim. Eu quero que a gente aprenda a conviver de forma civilizada com as nossas diferenças."
    ],

    numberRules: [
      v => !!v || "Value is required",
      v =>
        (v <= 999 && v >= 1) || "Name must be less than 1000 and more than 0  "
    ]
  }),

  methods: {
    buildText() {
      this.text = "";
      if (this.validation()) {
        let text_president = this.getPresidentText();

        for (let i = 0; i < this.selectedNumber; i++) {
          this.text +=
            text_president[this.getRandomInt(0, text_president.length - 1)] +
            "\n";
        }

        return true;
      } else {
        return false;
      }
    },

    validation() {
      if (
        this.selectedPresident &&
        this.selectedNumber &&
        this.selectedNumber > 0 &&
        this.selectedNumber < 1000
      ) {
        return true;
      }
      return false;
    },

    getPresidentText() {
      if (this.selectedPresident == "Bolsonaro") {
        return this.text_bolsonaro;
      } else if (this.selectedPresident == "Lula") {
        return this.text_lula;
      } else if (this.selectedPresident == "Dilma") {
        return this.text_dilma;
      } else if (this.selectedPresident == "Trump") {
        return this.text_trump;
      } else if (this.selectedPresident == "Obama") {
        return this.text_obama;
      }
    },

    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    doCopy() {
      let _this = this;
      this.selectMessage = this.text;

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

<style>
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #777;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

