<template>
  <div>
    <router-link :to="{name: 'PalestraInfo', params: {id: palestra.key}}">{{palestra.descricao}}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    palestra: {
      required: true,
      type: Object
    }
  }
};
</script>