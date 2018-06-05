<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h4 class="primary--text">{{ company.title }}</h4>
                    </v-card-title>
                    <v-card-media
                                :src="company.imageUrl"
                                height="160px"
                                
                                >

                                </v-card-media>
                                <v-card-text>
                                    <v-btn flat class="info--text">
                                  <v-icon left >info</v-icon>
                                  Technology Description
                                </v-btn>
                                    <div class="px-3" v-html="company.description"></div>
                                </v-card-text>
                                <v-card-text>
                                    <v-btn flat class="info--text">
                                  <v-icon left >supervisor_account</v-icon>
                                  Contact Persons
                                </v-btn>
                                    <div>
                                        Nishant Goyal<br>
                                        Head : Smart Cities, Embedded, Cloud, South Asia<br>
                                        NVIDIA Graphics Pvt. Ltd<br>
                                        (T) +91 80 66948400
                                        (C) +919810380467<br>
                                        ngoyal@nvidia.com<br>
                                        www.nvidia.com
                                    </div>
                                </v-card-text>
                                
                                    
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        company () {
            return this.$store.getters.loadedCompany(this.id)
        }
    }
}
</script>
