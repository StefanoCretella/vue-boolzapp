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
        newMessageText: '',
        searchQuery: '',
        messageMenuIndex: -1
    },
    computed: {
        contactsWithLastMessage() {
            return this.contacts
                .filter(contact => {
                    return contact.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                })
                .map(contact => {
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
        sendMessage() {
            if (this.activeContact && this.newMessageText.trim()) {
                const newMessage = {
                    date: new Date().toLocaleString(),
                    message: this.newMessageText.trim(),
                    status: 'sent'
                };
                this.activeContact.messages.push(newMessage);
                this.newMessageText = '';
                setTimeout (() => {
                    const responseMessage = {
                        date: new Date().toLocaleString(),
                        message: 'Ok',
                        status: 'received' 
                    };
                    this.activeContact.messages.push(responseMessage);
                }, 1000);
            }
        },
        showMessageMenu(index) {
            this.messageMenuIndex = index;
        },
        deleteMessage(index) {
            if (confirm("Sei sicuro di voler cancellare questo messaggio?")) {
                this.activeContact.messages.splice(index, 1);
            }
            this.messageMenuIndex = -1
        }
    }
});
