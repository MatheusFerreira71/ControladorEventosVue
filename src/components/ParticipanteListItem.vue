<template>
    <div>
        <p>{{participanteInfo.nome}}</p>
        <p>Presença: {{participante.presenca ? 'Sim' : 'Não'}}</p>
    </div>
</template>

<script>
import data from '../data'
export default {
    props: {
        participante: {
            required: true,
            type: Object
        }
    },
    computed: {
        participanteInfo() {
            return data.participantes[this.participante.key];
        }
    }
}
</script>