<template>
    <v-header>
      <v-app-bar app dark color="grey darken-2">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Portfolio</v-toolbar-title>
        <!--
        <v-tabs>
          <v-tab
            v-for="(menuItem, index) in menuItems"
            :key="index"
          >
            {{ menuItem.name }}
          </v-tab>
        </v-tabs>
        -->
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary>
        <v-list
          nav
          dense
        >
          <v-list-item-group>
          <!-- ここから追加 -->
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
            >
                <v-list-item-title v-on:click="toMenu( menuItem.url )">{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
            <!-- ここまで追加 -->
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-header>
</template>
<script>
export default {
  data(){
    return {
      drawer:false,
      menuItems: [
                    {
                      name: 'TOP',
                      url: '/'
                    },
                    {
                      name: 'PROFILE',
                      url: '/profile'
                    },
                    {
                      name: 'HISTORY',
                      url: '/history'
                    },
                    {
                      name: 'SKILLS',
                      url: '/skills'
                    },
                    {
                      name: 'CONTACT',
                      url: '/contact'
                    }
                  ]
    }
  },
  methods:{
      toMenu(url){
          this.$router.push(url);
      }
  }
};
</script>