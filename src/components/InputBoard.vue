<template lang="pug">
.wrapper
    v-btn(v-for="i in 12" :key="`3${i}`" @click="()=>onClickButton(i)") {{ transformText(i) }}
</template>

<script>
const mounted = () => {

};
export default {
  name: 'InputBoard',
  mounted,
  data() {
    return {
      buttons: ['1', '2', '3', '^', '0', '<'],
    };
  },
  methods: {
    onClickButton(evt) {
      console.log(`clicked ${evt}`);
    },
    transformText(t) {
      if (t === 10) {
        return '^';
      }
      if (t === 11) {
        return '0';
      }
      if (t === 12) {
        return '<=';
      }
      return t;
    },
  },
};
</script>

<style lang="stylus" scoped>
.wrapper {
width: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 50px;
}
</style>
