<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="1200">
      <v-container>
        <p class="display-1 text--primary">These guys bought me a coffee!</p>

        <ul>
          <li v-for="supporter in supporters" :key="supporter">
            {{ supporter }}
          </li>
        </ul>

        <br />

        <v-divider></v-divider>
        <br />

        <v-btn @click="openBuyCoffeeLink()" color="primary" dark x-large>
          <v-icon>mdi-coffee</v-icon>Could you buy me a coffee too?
        </v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>


<script>
export default {
  name: "Supporters",

  data: () => ({
    supporters: [
      "Fabricio Bortoluzzi",
      "Monick Weber",
      "Sergio Favarin",
      "Alex Ribeiro",
      "Eduardo Rezena",
    ],
  }),

  methods: {
    openBuyCoffeeLink() {
      let url = "https://www.buymeacoffee.com/SamuelFavarin";
      window.open(url, "_blank");
    },
  },
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

