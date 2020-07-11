<template>
  <v-app id="inspire">
    <!-- LEFT BAR-->
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list>
          <v-list-item @click="filterByPresident()" link>
            <v-list-item-avatar>
              <v-icon>mdi-home</v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="'Home'" />
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in presidentData"
            :key="item.name"
            @click="filterByPresident(item.name)"
            link
          >
            <v-list-item-avatar>
              <img :src="item.photo" alt />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.name" />
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item @click="$router.push({ path: 'tool' })" link>
            <v-list-item-avatar>
              <v-icon>mdi-hammer-screwdriver</v-icon>
            </v-list-item-avatar>
            <v-badge color="red" content="new" offset-x="25" offset-y="5">
              <strong>
                <v-list-item-title v-text="'Generate President Ipsum!'" />
              </strong>
            </v-badge>
          </v-list-item>
          <v-list-item @click="$router.push({ path: 'supporters' })" link>
            <v-list-item-avatar>
              <v-icon>mdi-coffee</v-icon>
            </v-list-item-avatar>
            <strong>
              <v-list-item-title v-text="'Supporters!'" />
            </strong>
          </v-list-item>
        </v-list>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <!-- TOP BAR-->
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-if="!$vuetify.breakpoint.xsOnly">
        <strong>President Ipsum</strong>
      </v-toolbar-title>

      <v-spacer />
      <div class="my-2" right="true">
        <v-btn @click="openPayPalLink()" color="warning" dark>
          <v-icon>mdi-coffee</v-icon>Pay me a coffee
        </v-btn>
      </div>
    </v-app-bar>

    <!-- CONTENT -->
    <router-view />
  </v-app>
</template>

<script>
import json from "../json/president.json";

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    presidentData: json
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },

  methods: {
    openPayPalLink() {
      let url =
        "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=samuelbfavarin%40hotmail.com&item_name=Pay+me+a+coffee&currency_code=BRL&source=url";
      window.open(url, "_blank");
    },

    filterByPresident(president = null) {
      if (president) {
        this.$router.push({ path: "/", query: { president: president } });
      } else {
        this.$router.push({ path: "/" });
      }
    }
  }
};
</script>