<template lang="pug">
  v-container
    v-layout.mb-2(row='', wrap='')
      v-flex(xs12='', sm10='', md8='', offset-sm1='', offset-md2='')
        v-card.secondary.lighten-2
          v-container.pa-2(fluid='')
            v-layout(row='')
              v-card-media
                img.logo(:src='company.logoUrl')
              v-layout(column)
                v-flex(xs12)
                  v-card-title.pa-1.ml-3(align-start)
                    .title.black--text {{ company.cname }}
                v-flex(xs12)
                  v-layout(row)
                    v-flex.pa-1.ml-3(xs12,no-wrap,style='overflow-x: auto')
                      v-chip(disabled v-for='tag in company.tags') {{tag}}
            v-divider.mt-2
            v-layout(row='', wrap='')
              v-flex.secondary.lighten-2.mt-2(xs12='')
                img(:src='company.imageUrl', width='100%')
    v-layout(row='', wrap='')
      v-flex(xs12='', sm10='', md8='', offset-sm1='', offset-md2='')
        .subheading.mt-2 About the Company
    v-layout(row='', wrap='')
      v-flex(xs12='', sm10='', md8='', offset-sm1='', offset-md2='')
        v-card
          v-card-text
            div.px-3(v-html='company.about')
    v-layout(row='', wrap='')
      v-flex(xs12='', sm10='', md8='', offset-sm1='', offset-md2='')
        .subheading.mt-2 Description
    v-layout(row='', wrap='')
      v-flex(xs12='', sm10='', md8='', offset-sm1='', offset-md2='')
        v-card
          v-card-text
            div.px-3(v-html='company.description')
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      company() {
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
