<template>
    <v-footer
    light
    padless
    >
    <v-card
      flat
      tile
      class="grey darken-2"
      min-width="100%"
    >
      <v-card-text class="text-left white--text">
        &copy; 2021 Shuji
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    socials:[{icon:"mdi-twitter",url:"https://twitter.com/shu89877289"},
             {icon:"mdi-github",url:"https://github.com/shuji81"}
             ],
  }),
  methods:{
  },
}
</script>

<style scoped>
a:link {
  text-decoration: none;
}
a:hover {
  color: white;
  text-decoration: none;
}
</style>