<template lang="pug">
    #count {{counter}}
</template>

<script>
export default {
  name: 'Counter',
  //   props: {
  //     counted: {
  //       type: Number,
  //       default: 20
  //     }
  //   },
  //   counted: 5,
  methods: {
    show() {
      console.log('test', this.counter);
    //   this.counter = 90
    },
    updateCount() {
    //   console.log('counter', this.counter)
      this.counter = this.counter === 360 ? 0 : this.counter + 1;
    },
  },
  //   watch: {
  //     counted: () => this.counter
  //   },
  mounted() {
    // console.log('mounted', this.counter)
    this.timer = setInterval(this.updateCount.bind(this), 1000 / 60);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  created() {
    console.log('created', this.counter);
    // this.show = this.show.bind(this)
    this.show();
  },
  data() {
    return {
      counter: 0,
      timer: '',
    };
  },
//   computed: {
//     counted: {
//       get: () => this.counter || 0,
//       set: (v) => { this.counter = v }
//     }
//   }
};
</script>

<style scoped>
#count {
  top: -15px;
  right: -35px;
  /*border: 2px;*/
  transform: translateY(30px) translateZ(60px);
  -moz-transform: translateY(30px) translateZ(60px);
  -ms-transform: translateY(30px) translateZ(60px);
  -webkit-transform: translateY(30px) translateZ(60px);
  font-size: 60px;
  height: 120px;
}
</style>
