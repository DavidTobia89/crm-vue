<script setup>
import ClientesService from '../services/ClienteService'
import { onMounted, ref, computed } from 'vue';
import RouterLink from '../components/UI/RouterLink.vue'
import Header from '../components/UI/Heading.vue'
import Clientes from '../components/Clientes.vue'
const clientes = ref ([])
onMounted(() =>{
    ClientesService.obtenerClientes()
    .then(({data})=>clientes.value = data)
    .catch(error=>console.log('Hubo un error'))
})

defineProps({
    titulo:{
        type:String
    }
})

const existenClientes = computed(()=>{
    return clientes.value.length>0
})
const actualizarEstado= (({id, estado})=>{
ClientesService.cambiarEstado(id, {estado:!estado})
.then(()=>{
const i =clientes.value.findIndex(cliente=>cliente.id===id)
clientes.value[i].estado=!estado
})
})
const eliminarCliente = ((id) => {
    ClientesService.eliminarCliente(id)
    .then(()=>{
        clientes.value =clientes.value.fillter(cliente=>cliente.id!==id)

})
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
    <div v-if="existenClientes" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table class="min-w-full divide-y divide-gray-300">
                  <thead>
                  <tr>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa</th>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                      <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                        <Clientes
                            v-for="cliente in clientes"
                            :key="cliente.id"
                            :cliente="cliente"
                            @actualizar-estado="actualizarEstado"
                            @eliminar-cliente="eliminarCliente"
                        ></Clientes>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
  <p v-else class="text-center mt-10">No existen clientes</p>
</div>
</template>

