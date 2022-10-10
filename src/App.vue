<template>
  <div class="h-screen">
    <HeaderComponent />
    <div class="max-w-[90rem] my-0 mx-auto px-24 py-20">
      <h1 class="font-semibold text-3xl text-white-600">
        Lista dos alunos do curso
      </h1>
      <div class="flex justify-between items-center mt-10">
        <div class="flex flex-col w-[48%]">
          <label class="font-semibold text-base text-grey-300">
            Pesquisar
          </label>
          <input
            type="text"
            placeholder="Nome do aluno"
            class="bg-dark-400 rounded-lg mt-2 border-none py-3 px-5 text-white-600 text-base"
          />
        </div>
        <div class="flex flex-col w-[48%]">
          <label class="font-semibold text-base text-grey-300">
            Nacionalidade
          </label>
          <select
            name="nacionalidade"
            id="nacionalidade"
            class="bg-dark-400 rounded-lg mt-2 border-none py-3 px-5 text-white-600 text-base hover:cursor-pointer"
          >
            <option value="">Todas</option>
          </select>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {HeaderComponent}
}
</script>

<style>
</style>
