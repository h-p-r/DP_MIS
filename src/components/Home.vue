<template lang='pug'>
  v-container
    h1.text-xs-center Featured Companies
    v-layout
      v-flex.text-xs-center
        v-progress-circular.primary--text(indeterminate='', :width='5', :size='50', v-if='loading')
    v-layout.mt-2(row='', wrap='', v-if='!loading')
      v-flex(xs12)
        v-carousel(dark, style='cursor: pointer; height: 50vw; max-height: 500px')
          v-carousel-item(v-for='company in companies', :src='company.imageUrl', :key='company.id', @click.native='onLoadCompany(company.id)')
            .title.text-xs-center {{ company.title }}
    v-layout.mt-2(row='', wrap='')
      v-flex.text-xs-center(xs12='')
        p Join our awesome company!
</template>

<script>
  export default {
    computed: {
      companies () {
        return this.$store.getters.featuredCompanies
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadCompany(id) {
        this.$router.push('/companies/' + id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  .carousel__left .btn .btn__content .icon, .carousel__right .btn .btn__content .icon {
    /* background-color: rgba(0,0,0,02) !important;
     */
    color: black !important;
  }
</style>
