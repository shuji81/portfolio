<template>
    <v-main class="top-bg">
        <v-row row wrap>
            <v-col class="white--text text-center">
                <h1 class="welcome">Welcome to Shuji's Portfolio!! </h1>
            </v-col>
        </v-row>
    </v-main> 
</template>
<script>

export default {
    name:'Top',
    data(){
        return{
        }
    }

}
</script>


<style scoped>
.top-bg {
    background-image: url("~@/assets/top_area.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: bold;
}

.welcome{
    margin:10% 0 10% 0;
}
</style>