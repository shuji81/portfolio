<template>
    <div>
    <Header/>
    <v-main>
        <h1 class="display-2 font-weight-bold mb-3">
            Skills
        </h1>
        <v-row row wrap>
            <v-col v-for="(skil,index) in skils" :key="index" xs12 sm6 md4>
                <v-card>
                    <v-card-title class="text-center">{{skil.name}}</v-card-title>
                    <v-card-text>経験年数：{{skil.years}}</v-card-text>
                    <v-card-text>備考：{{skil.content}}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-main>
    </div>
</template>
<script>
import Header from './Header.vue'
export default {
    name: 'App',

    components: {
        Header
    },
    data(){
        return{
            skils:[
                {
                    name:'Java',
                    years:'4年',
                    content:'Javaを用いたWebアプリケーション開発で使用。メインFWはSpring'
                },
                {
                    name:'JavaScript',
                    years:'1年',
                    content:'1年程度業務で使用。Jquery,Vue.jsも使用可。'
                },
                {
                    name:'PHP',
                    years:'半年',
                    content:'個人開発で使用。使用FWはLaravel。'
                },
                {
                    name:'Python',
                    years:'半年',
                    content:'個人開発で使用。使用FWはLaravel。'
                },
            ]
        }
    }

    
}
</script>