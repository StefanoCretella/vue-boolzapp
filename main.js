new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        ],
        activeContact: null,
    },
    computed: {
        contactsWithLastMessage() {
            return this.contacts.map(contact => {
                const lastMessage = contact.messages[contact.messages.length - 1];
                return {
                    ...contact,
                    lastMessage: lastMessage.message,
                    lastMessageTime: lastMessage.date
                };
            });
        }
    },
    methods: {
        selectContact(contact) {
            this.activeContact = contact;
        },
        sendMessage(event) {
            if (this.activeContact && event.target.value.trim()) {
                const newMessage = {
                    date: new Date().toLocaleString(),
                    message: event.target.value.trim(),
                    status: 'sent'
                };
                this.activeContact.messages.push(newMessage);
                event.target.value = '';
            }
        }
    }
});
