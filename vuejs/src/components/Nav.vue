<template>
    <div class="card relative z-2">
        <Menubar :model="this.items">
            <template #start>
                <span class="logo">LITEAPKS.COM</span>
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" />
            </template>
        </Menubar>
    </div>
</template>

<script >
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext'
import { ref } from "vue";
export default {
    name:"NavBar",
    data() {
        return {
            items : ref([
                {
                    label: 'Home',
                },
                {
                    label: 'App',
                },
                {
                    label: 'Game',
                },
                {
                    label: 'New',
                },
            ])
        }
    },
    components:{
        Menubar,
        InputText
    }
}
</script>

<style>
.logo{
    font-size: 24px;
    font-weight: bold;
    color: white;
}
.p-menubar{
    background-color: #7bbf3a;
}
.p-menuitem-text{
    color: white !important;
}
.p-menuitem-content{
    margin: 2px;
    background-color: #7bbf3a !important;
}
.p-menubar-button{
    color: white !important;
}
</style>1