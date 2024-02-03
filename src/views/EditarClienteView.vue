<script setup>
import { onMounted, reactive } from 'vue'
import ClientesService from '../services/ClienteService'
import { FormKit } from '@formkit/vue'
import { useRouter, useRoute } from 'vue-router'
import RouterLink from '../components/UI/RouterLink.vue'
import Header from '../components/UI/Heading.vue'

const router = useRouter()
const route = useRoute()

const {id} = route.params

const formData = reactive({})
defineProps({
    titulo:{
        type:String
    }
})
onMounted(() => {
    ClientesService.obtenerCliente(id)
    .then(({data})=>{
        Object.assign(formData,data)
    })
    .catch((error)=>console.log(error))
})
const handleSubmit = (data) => {
    ClientesService.actualizarCliente(id,data)
    .then(()=>router.push({name:'listado-clientes'    }))
    
}
</script>

<template>
<div>
    <div>
       <div class="flex justify-end">
            <RouterLink to = "listado-clientes"> 
                Volver
            </RouterLink>
        </div>
    </div>
    <Header>{{ titulo }}</Header>
    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w-2/3 py-20 px-6"> 
            <FormKit
                type="form"
                submit-label="Guardar Cambios"
                incomplete-message="No se pudo enviar, revisa los mensajes"
                @submit="handleSubmit"
                :value="formData"
            >
                <FormKit
                    type="text"
                    label="Nombre"
                    name="nombre"
                    placeholder="Nombre del Cliente"
                    validation="required"
                    :validation-messages="{required: 'El nombre del Cliente es Obligatorio'}"
                    validation-visibility="blur"
                    v-model="formData.nombre"
                />
                <FormKit
                    type="text"
                    label="Apellido"
                    name="apellido"
                    placeholder="Apellido del Cliente"
                    validation="required"
                    :validation-messages="{required: 'El apellido del Cliente es Obligatorio'}"
                    validation-visibility="blur"
                    v-model="formData.apellido"
                />
                <FormKit
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Email del Cliente"
                    validation="required|email"
                    :validation-messages="{required: 'El Email es Obligatorio', email:'Introduce un email correcto'}"
                    validation-visibility="blur"
                    v-model="formData.email"
                />
                <FormKit
                    type="text"
                    label="Telefono"
                    name="telefono"
                    placeholder="Telefono: XXX-XXX-XXXX"
                    validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}/"
                    :validation-messages="{matches: 'El formato no es valido'}"
                    validation-visibility="blur"
                    v-model="formData.telefono"
                />
                <FormKit
                    type="text"
                    label="Empresa"
                    name="empresa"
                    placeholder="Empresa del Cliente"
                    v-model="formData.empresa"
                />
                <FormKit
                    type="text"
                    label="Puesto"
                    name="puesto"
                    placeholder="Puesto del Cliente"
                    v-model="formData.puesto"
                />
                
            </FormKit>
        </div>
    </div>
</div>
</template>
<style>
    .formkit-wrapper{
        max-width: 100%;
    }
</style>

