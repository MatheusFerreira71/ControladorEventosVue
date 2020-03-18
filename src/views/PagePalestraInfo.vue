<template>
  <div>
    <p>Descrição: {{palestra.descricao}}</p>
    <p>Data e Hora: {{Date(palestra.data_hora)}}</p>
    <p>Máximo de Participantes: {{palestra.maxParticipantes}}</p>
    <hr />
    <p>Participantes Matriculados:</p>
    <ParticipanteList :participantes="participantes"/>
  </div>
</template>

<script>
import data from "../data";
import ParticipanteList from '../components/ParticipanteList'

export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    palestra() {
      return data.palestras[this.id];
    },
    participantes () {
        return Object.values((data.palestras[this.id]).participantes)
    }
  },
  components: {
      ParticipanteList
  }
};
</script>