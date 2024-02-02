<script setup>
import { FormKit } from '@formkit/vue'
import RouterLink from '../components/UI/RouterLink.vue'
import Header from '../components/UI/Heading.vue'

defineProps({
    titulo:{
        type:String
    }
})



const handleSubmit = (data) => {

}
</script>

<template>
<div>
    <div>
       <div class="flex justify-end">
            <RouterLink to = "inicio"> 
                Volver
            </RouterLink>
        </div>
    </div>
    <Header>{{ titulo }}</Header>
    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w-2/3 py-20 px-6"> 
            <FormKit
                type="form"
                submit-label="Agregar Cliente"
                incomplete-message="No se pudo enviar, revisa los mensajes"
                @submit="handleSubmit"
                
            >
                <FormKit
                    type="text"
                    label="Nombre"
                    name="nombre"
                    placeholder="Nombre del Cliente"
                    validation="required"
                    :validation-messages="{required: 'El nombre del Cliente es Obligatorio'}"
                    validation-visibility="blur"
                />
                <FormKit
                    type="text"
                    label="Apellido"
                    name="apellido"
                    placeholder="Apellido del Cliente"
                    validation="required"
                    :validation-messages="{required: 'El apellido del Cliente es Obligatorio'}"
                    validation-visibility="blur"
                />
                <FormKit
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Email del Cliente"
                    validation="required|email"
                    :validation-messages="{required: 'El Email es Obligatorio', email:'Introduce un email correcto'}"
                    validation-visibility="blur"
                />
                <FormKit
                    type="text"
                    label="Telefono"
                    name="telefono"
                    placeholder="Telefono: XXX-XXX-XXXX"
                    validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}/"
                    :validation-messages="{matches: 'El formato no es valido'}"
                    validation-visibility="blur"
                />
                <FormKit
                    type="text"
                    label="Empresa"
                    name="empresa"
                    placeholder="Empresa del Cliente"
              
                />
                <FormKit
                    type="text"
                    label="Puesto"
                    name="puesto"
                    placeholder="Puesto del Cliente"
              
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

