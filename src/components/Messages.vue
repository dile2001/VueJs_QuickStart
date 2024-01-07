<template>
    <v-flex sm8 offset-sm2>
    <v-card>
        <v-toolbar dark>
            <v-toolbar-title>Messages</v-toolbar-title>
        </v-toolbar>
        <v-list>
            <v-list-item 
                v-for="message in messages"
                @click=""
                :title="message"
            >
            </v-list-item>
        </v-list>
    </v-card>
    </v-flex>
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
        //this.messages = (await axios.get('http://localhost:3000/messages')).data;
        //Vue 2
        // this.$root.$on('newMessage', message => {
        //     console.log(message);
        //     this.messages.push(message);
        // } );
        this.emitter.on('newMessage', message => {
            console.log(message);
            this.messages.push(message);
        } );

    }
};
</script>