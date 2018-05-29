<template lang="pug">
  v-container.my-5
    v-layout(row='', v-if='error')
      v-flex(xs12='', sm6='', offset-sm3='')
        app-alert(@dismissed='onDismissed', :text='error.message')
    v-layout(row='')
      v-flex(xs12='', sm6='', offset-sm3='')
        v-card
          v-card-text
            v-container(grid-list-xl fluid)
              form(@submit.prevent='onSignup')
                v-layout(row,wrap)
                  v-flex(xs12='', sm6='')
                    v-text-field(v-model='firstName', label='First name', required='')
                  v-flex(xs12='', sm6='')
                    v-text-field(v-model='lastName', label='Last name')
                v-layout(row='')
                  v-flex(xs12='')
                    v-text-field#email(name='email', label='E-Mail', v-model='email', type='email', required='')
                v-layout(row='')
                  v-flex(xs12='')
                    v-text-field#password(name='password', label='Password', v-model='password', type='password', required='')
                v-layout(row='')
                  v-flex(xs12='')
                    v-text-field#confirmPassword(name='confirmPassword', label='Confirm Password', v-model='confirmPassword', type='password', :rules='[comparePasswords]', required='')
                v-layout(row='')
                  v-flex(xs12='')
                    .text-xs-right
                      v-btn.accent(type='submit', :disabled='loading', :loading='loading')
                        | Sign up
                        span.custom-loader(slot='loader')
                          v-icon(light='') cached
</template>

<script>
  export default {
    data () {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
      },
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignup () {
        this.$store.dispatch('signUserUp', {fName: this.firstName, lName: this.lastName, email: this.email, password: this.password})
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>
