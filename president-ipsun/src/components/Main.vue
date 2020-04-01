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

          <v-divider :inset="inset"></v-divider>

          <v-list-item
            v-for="item in data"
            :key="item.text"
            @click="filterByPresident(item.text)"
            link
          >
            <v-list-item-avatar>
              <img :src="item.picture" alt />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>

        <v-divider :inset="inset"></v-divider>

        <v-list>
          <v-list-item @click="$router.push({ path: 'tool' })" link>
            <v-list-item-avatar>
              <v-icon>mdi-hexagon-multiple</v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="'President Ipsun Tool'" />
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>

    <!-- TOP BAR-->
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>President Ipsun</v-toolbar-title>

      <v-spacer />
      <div class="my-2" right="true">
        <v-btn @click="openLink()" color="warning" dark>
          <v-icon>mdi-coffee</v-icon>Pay me a coffee
        </v-btn>
      </div>
    </v-app-bar>

    <!-- CONTENT -->
    <router-view />

    <!--COPY BAR-->
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
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
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },

  methods: {
    openLink() {
      let url =
        "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Q4VYXS5DVL5KC&currency_code=BRL&source=url";
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