<template lang="pug">
  v-container
    v-layout.mb-2(row='', wrap='')
      v-flex(xs12='', sm10='', md8='', offset-sm1='', offset-md2='')
        v-card.secondary.lighten-2.mt-3(v-for='company in companies', :key='company.id')
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
                    v-flex.pa-1.ml-3(xs8,no-wrap,style='overflow-x: auto')
                      v-chip(disabled v-for='tag in company.tags') {{tag}}
                    v-flex(xs4)
                      div.text-xs-right
                        v-btn.accent(type='submit',:to="'/companies/' + company.id")
                          | Details
</template>

<script>
  export default {
    computed: {
      companies() {        
        return this.$store.getters.loadedCompanies;                
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