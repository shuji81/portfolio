<template>
    <v-main>
        <v-container>
            <v-col xs="12" sm="12" md="12">
                <p class="text-h3">MY PROFILE</p>
            </v-col>
            <v-row cols="12">
                <v-col v-for="(profile,index) in profiles" :key="index" xs="12" sm="6" md="6"  align-content="center">
                    <Card
                    :title="profile.name"
                    :content="profile.content"
                    />
                </v-col>    
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
import Card from '../components/Card.vue'

export default {
    name: 'Profile',
    components: {
        Card
    },
    data(){
        return{
            profiles:[
                {
                    name:'概要',
                    content:'新卒からITエンジニアとして働き、様々な工程を経験。得意分野はJavaを使用したバックエンドの開発、要件定義から基本設計も対応可能'
                },
                {
                    name:'設計経験',
                    content:'JavaのWebアプリケーション開発にて、要件定義、基本設計などを経験。内容業務要件の確定、DB設計、業務ロジックの設計'
                },
                {
                    name:'マネジメント経験',
                    content:'5〜6人程度のチームでリーダーを経験。内部の課題管理、進捗管理を主に実施。一部顧客折衝経験もあり。'
                },
                {
                    name:'その他',
                    content:'PHP、Pythonを個人開発で経験。またVue.js&Vuetifyにてポートフォリオサイトも作成。'
                },
            ]
        }
    }

    
}
</script>
<style scoped>
.profile-bg {
    background-image: url("~@/assets/profile.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: bold;
}
</style>