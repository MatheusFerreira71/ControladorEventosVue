<template>
    <div>
        <ParticipanteListItem 
        v-for="participante in participantes" 
        :key="participante.key"
        :participante="participante"/>
    </div>
</template>

<script>
import ParticipanteListItem from './ParticipanteListItem';
export default {
    components: {
        ParticipanteListItem
    },
    props: {
        participantes: {
            required: true,
            type: Array
        }
    }
}
</script>