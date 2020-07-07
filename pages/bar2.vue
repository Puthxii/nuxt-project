<template>
  <div>
    <div v-for="bar in bars" class="row mb-1">
      <div class="col-sm-2">{{ bar.variant }}:</div>
      <div class="col-sm-10 pt-1">
        <b-progress :value="bar.value" :variant="bar.variant" :key="bar.variant"></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue'

  export default {
    components : { 'b-progress' : BProgress},
    data() {
      return {
        bars: [
          { variant: 'success', value: 82.66 },
          { variant: 'info', value: 55.10 },
          { variant: 'warning', value: 75 },
          { variant: 'danger', value: 75 },
          { variant: 'primary', value: 75 },
          { variant: 'secondary', value: 75 },
          { variant: 'dark', value: 75 }
        ],
        timer: null
      }
    }
  }
</script>