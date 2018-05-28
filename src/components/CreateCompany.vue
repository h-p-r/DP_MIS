<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm7 offset-sm3>
        <h4>Create a new Company</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateCompany">
          <v-layout row>
            <v-flex xs12 sm7 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm7 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm7 offset-sm3>
              <v-text-field
                name="logUrl"
                label="Logo URL"
                id="log-url"
                v-model="logUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm7 offset-sm3>
              <img :src="logUrl" height="150">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm7 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm7 offset-sm3>
              <img :src="imageUrl" height="150">
            </v-flex>
          </v-layout>
          <v-layout row>
              <v-flex xs12 sm7 offset-sm3>
                <label >Description*</label>
                <wysiwyg v-model="description" />
              </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm7 offset-sm3>
              <v-select
              v-model="chips"
              label="Technology Description Tags"
              chips
              tags
              solo
              required
              prepend-icon="filter_list"
              append-icon=""
              clearable
              >
                <template slot="selection" slot-scope="data">
                  <v-chip
                  :selected="data.selected"
                  close
                  @input="remove(data.item)"
                  >
                    <strong>{{ data.item }}</strong>&nbsp;
                  </v-chip>
                </template>
              </v-select>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm7 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Create Company</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        logUrl: '',
        imageUrl: '',
        description: '',
        date: new Date(),
        chips: []
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.logUrl !== '' &&
          this.imageUrl !== '' &&
          this.description !== '' &&
          this.chips.length != 0
      }
    },
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
      onCreateCompany () {
        if (!this.formIsValid) {
          return
        }
        const companyData = {
          title: this.title,
          location: this.location,
          logUrl: this.logUrl,
          imageUrl: this.imageUrl,
          description: this.description,
          chips: this.chips,
          date: this.date
        }
        this.$store.dispatch('createCompany', companyData)
        this.$router.push('/companies')
      }
    }
  }
</script>
