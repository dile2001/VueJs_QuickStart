<template>
    <div>
        <h4 class="text-h1">Messages</h4>
        <v-list>
            <v-list-item 
                v-for="message in messages"
                @click=""
                :title="message"
            >
            </v-list-item>
        </v-list>
    </div>
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