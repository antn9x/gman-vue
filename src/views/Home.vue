<template lang="pug">
  v-container(fluid)
    v-slide-y-transition(mode="out-in")
      v-layout(column align-center)
        img(src="@/assets/logo.png" alt="Vuetify.js" class="mb-5")
        blockquote &#8220;First, solve the problem. Then, write the code.&#8221;
          footer
            small
              em &mdash;John Johnson
    v-container(grid-list-md, text-xs-center)
      v-layout(row, wrap)
        v-flex(lg8)
          call-list
        v-flex(lg4)
          input-board
    cube
</template>

<script>
import Cube from '@/components/Cube';
import InputBoard from '@/components/InputBoard';
import CallList from '@/components/CallList';

export default {
  name: 'Home',
  components: { Cube, InputBoard, CallList },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
