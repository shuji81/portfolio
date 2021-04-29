<template>
    <div>
    <Header/>
    <v-main>
        <h1 class="display-2 font-weight-bold mb-3">
            Top
        </h1>
        <v-row justify="space-around" align="center">
            <v-col>
                <v-card class="bg">
                    <v-card-title>
                        <p>概要</p>
                    </v-card-title>
                    <v-card-text>
                        しゅうじのポートフォリオです。
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-text>
                        しゅうじのポートフォリオです。私のスキル作品などをこちらにまとめました。
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-main> 
    </div>
</template>
<script>
import Header from '../components/Header'
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

.bg {
    background-image: url("~@/assets/topBackGround.jpg");
}
</style>