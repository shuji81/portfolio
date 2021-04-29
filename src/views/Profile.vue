<template>
    <div>
    <Header/>
    <v-main>
        <h1 class="display-2 font-weight-bold mb-3">
            しゅうじのプロフィール
        </h1>
        <v-row row wrap>
            <v-col v-for="(skil,index) in profiles" :key="index" xs12 sm6 md4>
                <v-card>
                    <v-card-title class="text-center">{{skil.name}}</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>内容：{{skil.content}}</v-card-text>
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