<template>
    <v-main class="bg-color">
        <v-container>
            <v-col xs="12" sm="12" md="12">
                <p class="text-h3">Skill Set</p>
            </v-col>
            <v-row cols="12">
                <v-col v-for="(skill,index) in skills" :key="index" xs="12" sm="6" md="6">
                    <Card
                    :title="skill.name"
                    :content="skill.content"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
import Card from '../components/Card.vue'

export default {
    name: 'Skills',
    components: {
        Card
    },
    data(){
        return{
            skills:[
                {
                    name:'Java',
                    content:'Javaを用いたWebアプリケーション開発で要件定義から実装まで幅広く経験。Webアプリだけでなくスマホアプリのサーバーサイドの経験も有。メインで使用していたFWはSpring'
                },
                {
                    name:'JavaScript',
                    content:'Webアプリケーションのフロント側で使用した経験あり。実装は経験自体は全て合計すると1〜2年程度。'
                },
                {
                    name:'Vue.js',
                    content:'SPAのアプリ開発でVue.jsを使用。実装経験は半年〜1年程度、またこのポートフォリオサイトもVue.jsとVuetifyを使用して作成。'
                },
                {
                    name:'PHP',
                    content:'業務での使用経験はなし。個人開発でPHPを勉強し、簡単な管理システムを作成しました。使用しているFWはLaravelです。'
                },
                {
                    name:'Python',
                    content:'クラウドサービス開発のバッチ処理でPythonを使用。FWはなし。個人開発でもPythonを使用して開発しています。メインで使用しているFWはDjangoです。'
                },
            ]
        }
    }

    
}
</script>
<style scoped>
.bg-color {
    background-color:#EEEEEE;
}
</style>