<template lang="pug">
  .input-board_container
    v-text-field(v-model="callValue" label="Call Number" outline readonly disabled class="callNumberInput")
    .input-board_wrapper
      button-input(v-for="i in 12" :key="`${i}`" :onClickButton="()=>onClickButton(i)" :icon="getIcon(i)" :text="transformText(i)")
</template>

<script>
import ButtonInput from './ButtonInput';

const mounted = () => {

};
export default {
  name: 'InputBoard',
  components: {
    ButtonInput,
  },
  mounted,
  data() {
    return {
      buttons: ['1', '2', '3', '^', '0', '<'],
      callValue: '',
    };
  },
  methods: {
    onClickButton(evt) {
      console.log(`clicked ${evt}`);
      if (!this.callValue) {
        this.callValue = evt;
      } else if (evt === 10) {
        console.log('push number');
        this.callValue = '';
      } else
      if (evt === 12) {
        this.callValue = Math.floor(this.callValue / 10);
      } else
      if (evt === 11) {
        this.callValue = (this.callValue * 10);
      } else {
        this.callValue = (this.callValue * 10) + evt;
      }
    },
    getIcon(i) {
      if (i === 10) {
        return 'publish';
      }
      if (i === 12) {
        return 'keyboard_backspace';
      }
      return '';
    },
    transformText(t) {
      if (t === 10 || t === 12) {
        return '';
      }
      if (t === 11) {
        return '0';
      }
      return `${t}`;
    },
  },
};
</script>

<style lang="scss" >
$width-board : 360px;

.input-board {
  &_wrapper {
    width: $width-board;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 50px;
  }
  &_container {
    width: $width-board;
    display: grid;
  }
}

.callNumberInput {
  input {
  color: purple !important;
  }
}
</style>
