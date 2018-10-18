<template lang="pug">
    v-btn(@click="onClickButton") {{ text }}
        v-icon(large color="orange darken-2" v-if="icon") {{ icon }}
</template>

<script>

export default {
  name: 'ButtonInput',
  props: {
    onClickButton: Function,
    text: String,
    icon: String,
  },
};
</script>
