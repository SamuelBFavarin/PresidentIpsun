<template>
  <v-container>
    <v-card class="mx-auto" max-width="1200">
      <v-card-text>
        <div>Build your</div>
        <p class="display-1 text--primary">President Ipsum</p>
        <v-text-field v-model="foo" type="number" label="Number of paragraphs"></v-text-field>
      </v-card-text>

      <v-autocomplete
        v-model="selectPreesident"
        :items="data"
        filled
        chips
        color="blue-grey lighten-2"
        label="Select"
        item-text="name"
        item-value="name"
      >
        <template v-slot:selection="data">
            <v-avatar left>
              <v-img :src="data.picture"></v-img>
            </v-avatar>
            {{ data.text }}
        </template>

        <template v-slot:item="data">
          <template>
            <v-list-item-avatar>
              <img :src="data.picture" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="data.text"></v-list-item-title>
            </v-list-item-content>
          </template>
        </template>

      </v-autocomplete>

      <v-card-actions>
        <v-btn text color="deep-purple accent-4">Build</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
export default {
  name: "Home",

  data: () => ({
    foo: null,
    data: [        
        { picture: 'https://pbs.twimg.com/profile_images/691046991325827072/oQv290pS.jpg', text: 'Trump' },
        { picture: 'https://jornalpresidenteshow20oprimir.files.wordpress.com/2016/03/bolsonaro_rodolfostuckert_abr.jpg?w=256&h=256&crop=1', text: 'Bolsonaro' },
        { picture: 'https://pbs.twimg.com/profile_images/3662988939/1f30a323c41f5ba25616408aea9b0277.png', text: 'Obama' },
        { picture: 'https://c-sf.smule.com/sf/s63/arr/77/1b/86e8cea5-edad-4798-bca1-b065d8d53010_256.jpg', text: 'Dilma' },
        { picture: 'https://pbs.twimg.com/profile_images/741029346203344897/T0mC9cCe_400x400.jpg', text: 'Lula' },
      ],
  }),

  methods: {}
};
</script>

