<template>
    <div>
    <Header/>
    <v-container>
        <v-row justify="space-around" align="center">
            <v-col xs12 sm8 md6 class="pa-0">
                    <v-img :src="require('../assets/topBackGround.png')"/>
            </v-col>
            <v-col xs12 sm8 md6 class="pl-0 pr-0">
                <v-card>
                    <v-card-title>
                        <p>タイトル</p>
                    </v-card-title>
                    <v-card-text>
                        しゅうじのポートフォリオです。
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container> 
    </div>
</template>
<script>
import Header from './Header.vue'
export default {
  name: 'App',

  components: {
    Header
  }
};
</script>
<style scoped>
p {
  display: inline-block;
  white-space: nowrap;
}
</style>