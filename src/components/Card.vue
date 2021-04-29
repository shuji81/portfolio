<template>
    <div class="card prewrap">
        <v-card 
         min-width="300px"
         height="90%"
         @click.stop="dialog = true">
            <v-card-title>{{ title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>{{ shortContent }}</v-card-text>
            <v-card-action></v-card-action>
        </v-card>
        <v-dialog 
         v-model="dialog"
         scrollable 
         max-width="600px">
            <v-card>
                <v-card-title>{{ title }}</v-card-title>
                <v-divider></v-divider>
                <v-card-text>{{ content }}</v-card-text>
                <v-card-action>
                    <v-space></v-space>
                    <v-btn color="primary" flat small @click="dialog = false">CLOSE</v-btn>
                </v-card-action>
            </v-card>
        </v-dialog>
    </div>    
</template>
<script>
export default {
    name : 'Card',
    props : {
        title: String,
        content : String,
    },
    data() {
        return {
            dialog : false
        }
    },
    computed : {
        shortContent() {
            let maxlength = 100;
            if ( this.content.length <= maxlength ){
                    return this.content
            } else {
                return this.content.subsr(0,90)+'...(続きを読む)'
            }

        }    
    }

}
</script>
<style scoped>
.card {
  margin:10px;
  height: 90%;
}

.pre-wrap {
  white-space: pre-wrap;
}

</style>