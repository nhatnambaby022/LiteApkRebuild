<template>
  <div class="home">
    <BoxContent :items=news nameBox="News" />
  </div>
</template>

<script>
// @ is an alias to /src
import { getAllNew, getAllGame } from '@/api';
import BoxContent from '@/components/Grid.vue';

export default {
  data(){
    return {
      news: [],
      games: [],
    }
  },
  name: 'HomeView',
  async created(){
    await this.getAllNewFunc();
    await this.getAllGameFunc();
  },
  components:{
    BoxContent
  },
  methods:{
    async getAllNewFunc(){
      const response = await getAllNew();
      if (response.request.statusText == "OK"){
        this.news = response.data;
      }
    },
    async getAllGameFunc(){
      const response = await getAllGame();
      if (response.request.statusText == "OK"){
        this.games = response.data;
        console.log(this.games);
      }
    }
  }

}
</script>
