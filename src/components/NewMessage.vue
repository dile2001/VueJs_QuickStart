<template>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              label="Message"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn @click="" block class="mt-2">Submit</v-btn>
    </v-form>
  </template>
<script> 
import axios from 'axios';
export default {
    data() {
        return {
            messages: [
                "he",
                "hi",
                "greeting!"
            ]
        };
    },
    async created() {
        this.messages = (await axios.get('http://localhost:3000/messages')).data;

    }
};
</script>