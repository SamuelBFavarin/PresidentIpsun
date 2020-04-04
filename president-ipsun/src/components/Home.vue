<template>
  <v-container fluid>
    <waterfall :gutterWidth="10" :gutterHeight="10">
      <WaterfallItem :width="350" v-for="(card, index) in messages" :key="index">
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
import json from "../json/president.json";

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
    presidentFilter: null,
    presidentData: json,
    cards: []
  }),

  beforeMount() {
    this.presidentFilter = this.$route.query.president;
    this.adjustDataToComponet(this.presidentData);
  },

  methods: {
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
    },

    adjustDataToComponet(presidentData) {
      let aux_card = [];
      // set president datas
      presidentData.forEach(president => {
        president["text"].forEach(text => {
          let item = {
            person: president["name"],
            description: text,
            photo: president["photo"],
            path: president["path"],
            color: president["color"]
          };

          aux_card.push(item);
        });
      });

      // shuffle the cards
      aux_card = this.shuffle(aux_card);

      // add adsense cards

      let add = {
        person: "add",
        description: "this is a add man",
        photo: "",
        path: "",
        color: "#FFF"
      };

      for (var i = 0; i < aux_card.length; i++) {
        this.cards.push(aux_card[i]);

        if ((i + 1) % 5 == 0) {
          this.cards.push(add);
        }
      }
    },

    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  },

  watch: {
    $route(to, from) {
      // do nothing
      console.log(from);
      this.presidentFilter = to.query.president;
    }
  },

  computed: {
    messages: function() {
      let _this = this;

      if (_this.presidentFilter) {
        return _this.cards.filter(function(p) {
          return p.person == _this.presidentFilter;
        });
      } else {
        return _this.cards;
      }
    }
  }
};
</script>

