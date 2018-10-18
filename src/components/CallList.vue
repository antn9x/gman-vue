<template lang="pug">
  v-layout(row='')
    v-flex(xs12='', sm6='', offset-sm3='')
      v-card
        v-toolbar(color='indigo', dark='')
          v-toolbar-side-icon
          v-toolbar-title Inbox
          v-spacer
          v-btn(icon='')
            v-icon search
          v-btn(icon='')
            v-icon more_vert
        v-list
          v-list-tile(v-for='item in items', :key='item.title', avatar='', @click='')
            v-list-tile-action
              v-icon(v-if='item.icon', color='pink') star
            v-list-tile-content
              v-list-tile-title(v-text='item.title')
            v-list-tile-avatar
              img(:src='item.avatar')
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ]
      }
    }
  }
</script>