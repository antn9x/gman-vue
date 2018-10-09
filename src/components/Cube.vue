<template lang="pug">
  #view
    counter
    cube-base
    #cube
      .face.one
      .face.two
      .face.three
      .face.four
      .face.five
      .face.six
</template>

<script>
import CubeBase from '@/components/CubeBase';
import Counter from '@/components/Count';

export default {
  name: 'Cube',
  components: { CubeBase, Counter },
  mounted: () => {
    const cube = document.getElementById('cube');
    let dg = 0;
    const update = () => {
      cube.style.transform = `rotateY(${dg}deg)`;
      cube.style['-ms-transform'] = `rotateY(${dg}deg)`;
      cube.style['-moz-transform'] = `rotateY(${dg}deg)`;
      cube.style['-webkit-transform'] = `rotateY(${dg}deg)`;
      dg = dg === 360 ? 0 : dg + 1;
    };
    setInterval(update, 1000 / 60);
  },
  data() {
    return {
      msg: 'Welcome to Your Cube',
    };
  },
};
</script>

<style scoped>
#view {
  position: absolute;
  right: 60px;
  perspective: 1200px;
  width: 100px;
  /*height: 100px;*/
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d; /* Chrome, Safari, Opera */
  top: 10px;
  z-index: 1000;
  transform: translateY(30px) rotateX(-30deg);
  -moz-transform: translateY(30px) rotateX(-30deg);
  -ms-transform: translateY(30px) rotateX(-30deg);
  -webkit-transform: translateY(30px) rotateX(-30deg);
}
#cube {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d; /* Chrome, Safari, Opera */
}
.face {
  position: absolute;
  background: rgba(255, 0, 0, 0.5);
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: block;
  font-size: 50px;
  text-align: center;
}
.one {
  transform: rotateX(90deg) translateZ(50px);
  -moz-transform: rotateX(90deg) translateZ(50px);
  -ms-transform: rotateX(90deg) translateZ(50px);
  -webkit-transform: rotateX(90deg) translateZ(50px);
  background: rgba(0, 255, 0, 0.5);
}
.two {
  transform: rotateX(270deg) translateZ(50px);
  -moz-transform: rotateX(270deg) translateZ(50px);
  -ms-transform: rotateX(270deg) translateZ(50px);
  -webkit-transform: rotateX(270deg) translateZ(50px);
  background: rgba(0, 255, 0, 0.5);
}
.three {
  transform: rotateY(90deg) translateZ(50px);
  -moz-transform: rotateY(90deg) translateZ(50px);
  -ms-transform: rotateY(90deg) translateZ(50px);
  -webkit-transform: rotateY(90deg) translateZ(50px);
  background: rgba(0, 0, 255, 0.5);
}
.four {
  transform: rotateY(-90deg) translateZ(50px);
  -moz-transform: rotateY(-90deg) translateZ(50px);
  -ms-transform: rotateY(-90deg) translateZ(50px);
  -webkit-transform: rotateY(-90deg) translateZ(50px);
  background: rgba(0, 255, 255, 0.5);
}
.five {
  transform: rotateY(180deg) translateZ(50px);
  -moz-transform: rotateY(180deg) translateZ(50px);
  -ms-transform: rotateY(180deg) translateZ(50px);
  -webkit-transform: rotateY(180deg) translateZ(50px);
  background: rgba(200, 0, 200, 0.5);
}
.six {
  transform: translateZ(50px);
  -moz-transform: translateZ(50px);
  -ms-transform: translateZ(50px);
  -webkit-transform: translateZ(50px);
}
</style>
