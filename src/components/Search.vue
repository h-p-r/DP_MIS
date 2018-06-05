<template>
  <v-container>
    <v-layout row wrap v-for="company in filteredCompanies" :key="company.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="company.imageUrl"
                  height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">{{ company.title }}</h5>
                    <div>{{ company.date | date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat :to="'/companies/' + company.id">
                    <v-icon left light>arrow_forward</v-icon>
                    View Company
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['sKey'],
    computed: {
      filteredCompanies: function() {
        return this.$store.getters.loadedCompanies.filter((company)=>{
            return company.title.toLowerCase().match(this.sKey.toLowerCase())
        });
        }
    }
  }
</script>
