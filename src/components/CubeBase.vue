<template lang="pug">
    canvas#mycanvas
</template>

<script>
const mounted = () => {
  const canvas = document.getElementById('mycanvas');
  const context = canvas.getContext('2d');
  const w = 200;
  const h = 200;
  canvas.width = w;
  canvas.height = h;
  // Create gradient circle
  const grd = context.createRadialGradient(100, 100, 60, 100, 100, 90);
  grd.addColorStop(0.75, 'red');
  grd.addColorStop(0.4, 'navy');
  grd.addColorStop(1, 'cyan');
  grd.addColorStop(0.85, 'white');
  context.beginPath();
  context.strokeStyle = grd;
  context.lineWidth = 20;
  context.arc(100, 100, 80, 0, Math.PI * 2);
  context.stroke();
};
export default {
  name: 'CubeBase',
  mounted,
};
</script>

<style scoped>
#mycanvas {
  position: absolute;
  width: 200px;
  height: 200px;
  /*background: rgba(255,0,0,0.5);*/
  transform: rotateX(270deg) translate3d(-50px, -0px, 0px);
  -moz-transform: rotateX(270deg) translate3d(-50px, -0px, 0px);
  -ms-transform: rotateX(270deg) translate3d(-50px, -0px, 0px); /* IE 9 */
  -webkit-transform: rotateX(270deg) translate3d(-50px, -0px, 0px); /* Chrome, Safari, Opera */
}
</style>
