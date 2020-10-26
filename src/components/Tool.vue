<template>
  <v-container fluid>
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
                :items="presidentData"
                label="Select your president"
                item-value="name"
                item-text="name"
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

    presidentData: json,

    selectMessage: "",
    snackbarSuccess: false,
    snackbarError: false,

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
      let bolsonaro_index = 0;
      let trump_index = 1;
      let lula_index = 2;
      let dilma_index = 3;
      let obama_index = 4;

      if (this.selectedPresident == "Bolsonaro") {
        return this.presidentData[bolsonaro_index]["text"];
      } else if (this.selectedPresident == "Lula") {
        return this.presidentData[lula_index]["text"];
      } else if (this.selectedPresident == "Dilma") {
        return this.presidentData[dilma_index]["text"];
      } else if (this.selectedPresident == "Trump") {
        return this.presidentData[trump_index]["text"];
      } else if (this.selectedPresident == "Obama") {
        return this.presidentData[obama_index]["text"];
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

