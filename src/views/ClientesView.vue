<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue';
import RouterLink from '../components/UI/RouterLink.vue'
import Header from '../components/UI/Heading.vue'

onMounted(() =>{
    axios.get('http://localhost:4000/clientes')
    .then(({data})=>{
        console.log(data)
    })
    .catch(error=>console.log('Hubo un error'))
})
defineProps({
    titulo:{
        type:String
    }
})
</script>

<template>
<div>
    <div class="flex justify-end">
        <RouterLink to = "agregar-cliente"> 
            Agregar Cliente
        </RouterLink>
    </div>
    <Header>{{ titulo }}</Header>
</div>
</template>

