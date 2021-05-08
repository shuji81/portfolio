<template>
    <v-main>
        <v-card>
            <v-card-title>お問い合わせ</v-card-title>
            <v-form ref="contact_form">
                <v-card-text>
                    <v-text-field 
                        v-model="text1" 
                        placeholder="お名前（必須）"
                        :rules="[rules.required]">
                    </v-text-field>
                    <v-text-field 
                        v-model="text2" 
                        placeholder="メールアドレス（必須）"
                        :rules="[rules.required]">
                    </v-text-field>
                    <v-textarea 
                        v-model="text3" 
                        placeholder="お問い合わせ内容（必須）"
                        :rules="[rules.required,rules.limit_length]">
                    </v-textarea>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn text v-on:click="submit">送信する</v-btn>
                    <span v-if="success">送信成功！</span>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-main>
</template>
<script>
export default {
    name: 'Contact',
    data(){
        return{
            text1:"",
            text2:"",
            text3:"",
            success:false,
            // 入力規則
            rules:{
                required: value => !!value || "必ず入力してください", // 入力必須の制約
                limit_length: value => value.length <= 400 || "400文字以内で入力してください" // 文字数の制約

            }
        }
    },methods: {
    // 送信を試みるメソッド（「送信する」がクリックされたときに呼ばれる）
    submit() {

        if(this.$refs.contact_form.validate()){
            this.success = true;
            this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then((response) => {
                    alert(response.data.time.updated + this.text1);
                })
                .catch((e) => {
                    alert(e);
                });
        }else{
            this.success = false;
        }
      
    }
  }
    
}
</script>