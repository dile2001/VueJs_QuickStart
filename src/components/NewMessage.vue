<template>
  <v-flex>
    <v-card>
      <v-toolbar dark>
            <v-toolbar-title>New Message</v-toolbar-title>
        </v-toolbar>
      <v-form>
        <v-container>
          <v-layout>
            <v-text-field
              v-model="messageBody"
              label="Message"
              required
            ></v-text-field>
        </v-layout>
        </v-container>
        <v-btn @click="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>
<script> 
import axios from 'axios';

export default {
    data() {
        return {
            messageBody: ""
        };
    },
    // async created() {
    //     this.messages = (await axios.get('http://localhost:3000/messages')).data;

    // },
    methods: {
      async submit() {
        try {
          let msg = (await axios.post("http://localhost:3000/messages", {
            message: this.messageBody
          })).data;
          console.log(this.messageBody);
          // axios.post("http://localhost:3000/messages", {message: this.messageBody});
          //this.$root.$emit('newMessage', this.messageBody); Vue 2
          this.emitter.emit('newMessage', this.messageBody);
        } catch (error) {
          console.error(error);
        }
      }
    }
};
</script>