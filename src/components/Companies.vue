<template>
    <v-container>
        <v-layout row wrap v-for="company in companies" :key="company.id" class="mb-2">
            <v-flex xs12 sm10 md8 offset-sm1>
                <v-card color="grey shade">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-card-media
                                :src="company.imageUrl"
                                height="160px"
                                
                                >

                                </v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                              <v-card-title primary-title>
                                <div>
                                <div class="headline white--text mb-0">{{ company.title }}</div>
                                <div>{{ company.description }}</div>
                                </div>
                              </v-card-title>
                              <v-card-actions>
                                  <v-spacer></v-spacer>
                                <v-btn round color='blue' dark :to="'/companies/' + company.id">
                                  <v-icon left light>business</v-icon>
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
  computed: {
      companies () {
          return this.$store.getters.loadedComapanies
      }
  }
}
</script>