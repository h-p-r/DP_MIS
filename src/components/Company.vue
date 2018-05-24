<template lang="pug">
  v-container
    v-layout.mb-2(row='', wrap='')
      v-flex(xs12='', sm10='', md8='', offset-sm1='', offset-md2='')
        v-card.secondary.lighten-2
          v-container.pa-2(fluid='')
            v-layout(row='')
              v-card-media
                img.logo(:src='meetup.imageUrl')
              v-card-title.pa-1.ml-3(style='align-items: flex-start')
                h2.black--text {{ meetup.title }}
      v-layout(row='', wrap='')
        v-flex(xs12='', sm10='', md8='', offset-sm1='', offset-md2='')
          img(:src='meetup.imageUrl', width='100%')
    v-layout(row='', wrap='')
      v-flex(xs12='', sm10='', md8='', offset-sm1='', offset-md2='')
        v-card
          v-card-text
            div {{ meetup.description }}
            | Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia itaque consectetur accusamus enim. Eos, accusantium voluptatibus expedita nemo sequi fugiat! Dolorum dignissimos repudiandae nesciunt molestiae soluta quo dolores. Quidem.
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedCompany(this.id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .logo {
    width: 16vw !important
    height: 16vw !important
    max-width: 8rem
    max-height: 8rem
  }
</style>
