<template>
    <div>
        <PalestraList
        :palestras="palestras"/>
        <button>Criar nova</button>
    </div>
</template>

<script>
import PalestraList from "../components/PalestraList";
import data from "../data";
export default {
  components: {
    PalestraList
  },
  data() {
    return {
        palestras: Object.values(data.palestras)
    };
  }
};
</script>