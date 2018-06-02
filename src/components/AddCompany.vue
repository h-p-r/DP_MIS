<template lang="pug">
	v-container
		v-layout(row='')
			v-flex(xs12='')
				h2.primary--text.text-xs-center Add New Company
		v-layout(row='')
			v-flex(xs12='')
				v-card.pa-3(xs12,sm8='', offset-sm2='')
					form(@submit.prevent='onAddCompany')
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								v-text-field#cname(name='cname', label='Company Name', v-model='cname', required='')
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								v-text-field#location(name='location', label='Location', v-model='location', required='')
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								v-text-field#logo-url(name='logoUrl', label='Logo URL', v-model='logoUrl', required='')
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								img(:src='logoUrl', height='150')
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								v-text-field#image-url(name='imageUrl', label='Image URL', v-model='imageUrl', required='')
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								img(:src='imageUrl', height='150')
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								v-text-field(name='input-7-1', label='About The Company',v-model='about', multi-line='', required)
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								.subheading.subheader-normal Description*
								wysiwyg.width-fix(v-model='description')
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								.subheading.subheader-normal Tags*				
						v-layout(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								v-select(v-model='tags', label='Technology Description Tags(Max 4)', chips='', tags='', solo='', required='', prepend-icon='', append-icon='', clearable='')
									template(slot='selection', slot-scope='data')
										v-chip(:selected='data.selected', close='', @input='remove(data.item)')
											strong {{ data.item }}
						v-layout(row='', v-if='tagAlert')
							v-flex(xs12='', sm8='', offset-sm2='')
								.input-group__details.error--text
									.input-group__messages.input-group__error Max 4 Tags
						v-layout.mt-2(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								.subheading.subheader-normal Contacts*
								div
									v-stepper(v-model='e1')
										v-stepper-header.contacts-header-scroll(ref='contactsHeader')
											template(v-for='n in steps')
												v-stepper-step(:key='`${n}-step`', :step='n', :complete='e1 > n', editable='')
													| {{ n }}
												v-divider(v-if='n !== steps', :key='n')
										v-stepper-items
											v-stepper-content(v-for='n in steps', :step='n', :key='`${n}-content`')
												v-card
													v-text-field(name='pName',v-model='contacts[n-1].pName', label='Person Name', required)
													v-text-field(name='pDetails', v-model='contacts[n-1].pDetails', label='Details',multi-line)
													v-card-actions
														v-btn(flat, color='error', @click='removeContact(contacts[n-1].pKey)')
															v-icon(left) delete
															| Delete
														v-spacer
														v-btn(color='primary', @click='addPerson')
															v-icon(left,dark) add
															| Add
						v-layout.mt-2(row='')
							v-flex(xs12='', sm8='', offset-sm2='')
								.text-xs-right
									v-btn.accent(:disabled='!formIsValid', type='submit') Add Company

</template>

<script>
  export default {
    data () {
      return {
        cname: '',
        location: '',
        logoUrl: '',
        imageUrl: '',
				about: '',
        description: '',
        date: new Date(),
        tags: [],
				contacts: [
					{
						pName: '',
						pDetails: '',
						pKey: new Date().getTime()
					}
				],

				e1: 1
      }
    },
		watch: {
      steps (val) {				
        if (this.e1 > val) {
          this.e1 = val
        }
      }
    },
    computed: {
      formIsValid () {
        return this.cname !== '' &&
          this.location !== '' &&
          this.logoUrl !== '' &&
					this.imageUrl !== '' &&
					this.about !== '' &&
          this.description !== '' &&
          this.tags.length != 0 &&
					this.tags.length <= 4
			},
			tagAlert() {
				return (this.tags.length > 4)
			},
			steps() {
				return this.contacts.length
			}
    },
    methods: {
      remove (item) {
        this.tags.splice(this.tags.indexOf(item), 1)
        this.tags = [...this.tags]
      },
      onAddCompany () {
        if (!this.formIsValid) {
          return
        }
        const companyData = {
          cname: this.cname,
          location: this.location,
          logoUrl: this.logoUrl,
					imageUrl: this.imageUrl,
					about: this.about,
          description: this.description,
          tags: this.tags,
					date: this.date,
					contacts: this.contacts
        }
        this.$store.dispatch('addCompany', companyData)
        this.$router.push('/dashboard')
      },
      addPerson() {
				const person = {
					pName: '',
					pDetails: '',
					pKey: new Date().getTime()
				}

				this.contacts.push(person)
				setTimeout(() => {
					var elem=this.$refs.contactsHeader.lastChild.previousSibling
					elem.click()
				}, 10);
			},
			removeContact(pKey) {
				if(this.contacts.length==1) {
					return
				}
				this.contacts.splice(this.contacts.findIndex(function(i){
					return i.pKey == pKey;
				}), 1); 
			}
    }
  }
</script>

<style>
	.contacts-header-scroll {
		overflow-x: auto;
		display: flex;
		flex-wrap: nowrap;
	}
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

