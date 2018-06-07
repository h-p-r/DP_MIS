<template lang="pug">
	v-container
		v-layout(row='')
			v-flex(xs12='')
				h2.primary--text.text-xs-center Send Request
		v-layout(row='')
			v-flex(xs12='')
				v-card.pa-3(xs12,sm8='', offset-sm2='')
					form(@submit.prevent='onSendRequest')
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								// v-subheader DTLO unit
								v-select(:items='states', v-model='e1', label='DTLO Unit', single-line='', auto='', hide-details='')

						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								v-text-field(name='input-7-1', label='Detailed Request',v-model='req', multi-line='', required)
			
						v-layout(row='', v-if='tagAlert')
							v-flex(xs12='', sm8='', offset-sm2='')
								.input-group__details.error--text
									.input-group__messages.input-group__error Max 4 Tags
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
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
    },
    computed: {
      formIsValid () {
        return this.dunit !== '' &&
					this.req !== ''
			},
		
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
        // this.$router.push('/dashboard')
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

