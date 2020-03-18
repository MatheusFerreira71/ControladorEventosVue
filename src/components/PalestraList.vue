<template>
  <div>
    <PalestraListItem v-for="palestra in palestras" :key="palestra.key" :palestra="palestra"/>
  </div>
</template>

<script>
import PalestraListItem from "./PalestraListItem";
export default {
  components: {
    PalestraListItem
  },
  props: {
    palestras: {
      required: true,
      type: Array
    }
  }
};
</script>