<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h2 class="primary--text">Create New Company</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                
                <form @submit.prevent="oncreateCompany">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="Company Name"
                            label="Company Name"
                            id="cname"
                            v-model="cname"
                            required></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="Image URL"
                            label="Image URL"
                            id="imgurl"
                            v-model="imgurl"
                            required></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imgurl" height="200">
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="Description"
                            label="Description"
                            id="desc"
                            v-model="desc"
                            multi-line
                            required></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="Contact Details"
                            label="Contact Details"
                            id="contact"
                            v-model="contact"
                            multi-line
                            required></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn color="primary" 
                            :disabled="!formIsvalid"
                            type="submit">
                                Create Company
                            </v-btn> 
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
           cname: '',
           imgurl: '',
           desc: '',
           contact: ''
       }
    },

    computed: {
        formIsvalid () {
            return this.cname != '' && 
            this.imgurl != '' && 
            this.desc != '' && 
            this.contact != ''
        }
    },
    methods: {
        oncreateCompany () {
            if (!this.formIsvalid){
                return
            }
            const companydata = {
                cname: this.cname,
                imgurl: this.imgurl,
                desc: this.desc,
                date: new Date()
            }
            this.$store.dispatch('createCompany', companydata)
            this.$router.push('/companies')
        }
    }
}
</script>
