<template lang="pug">
	v-container
		v-layout(row='')
			v-flex(xs12='')
				h2.primary--text.text-xs-center Send Request
		v-layout.mt-3(row='')
			v-flex(xs12='')
				v-card.pa-3(xs12,sm8='', offset-sm2='')
					form(@submit.prevent='onSendRequest')
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								v-select(:items='dunits', v-model='dunit', label='DTLO Unit', single-line='', auto='', hide-details='', required)
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								v-text-field(name='input-7-1', label='Detailed Request',v-model='req', multi-line='', required)
						v-layout.mt-2(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								.text-xs-right
									v-btn.accent(:disabled='!formIsValid', type='submit') Send Request
</template>

<script>
  export default {
    data () {
      return {
        dunit: null,
        req: '',
        dunits: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
        ]
      }
    },
    mounted: function() {
      var reqData = this.$store.getters.dtloReq
      if(reqData!=null) {
        this.dunit=reqData.dunit
        this.req=reqData.req
        
        this.$store.dispatch('clearDtloReq')
      }
    },
    computed: {
      formIsValid () {
        return this.dunit != '' &&
          this.dunit != null &&
					this.req != ''
			}
    },
    methods: {
      onSendRequest () {
        if (!this.formIsValid) {
          return
        }
        const requestData = {
          dunit: this.dunit,
          req: this.req
        }
        this.$store.dispatch('sendRequest', requestData)
        this.$router.push('/dtloSearch')
      }
    }
  }
</script>

<style>
	.subheader-normal {
		color: rgba(0,0,0,0.54);
		margin: 10px 0;
		font-weight: 400 !important;
	}

  @media(max-width: 850px) {
    .width-fix .editr--toolbar a{
      width: 2.6vw !important;
    }
  }

  @media(max-width: 600px) {
    .width-fix .editr--toolbar a{
      width: 3.5vw !important;
    }
  }

	@media(max-width: 450px) {
		.width-fix .editr--toolbar{
			justify-content: space-between
    }

    .width-fix .editr--toolbar a.vw-btn-separator{
      display: none !important;
    }
  }
</style>
