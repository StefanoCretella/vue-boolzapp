new Vue({
    el: '#app',
    data: {
        activeContact: {},
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 12:00',
                        message: 'Ciao, come va?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 12:01',
                        message: 'Tutto bene, grazie!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 12:02',
                        message: 'Che fai oggi?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 12:03',
                        message: 'Niente di speciale, tu?',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 12:00',
                        message: 'Ultimo messaggio inviato',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 12:00',
                        message: 'Ultimo messaggio inviato',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 12:00',
                        message: 'Ultimo messaggio inviato',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 12:00',
                        message: 'Ultimo messaggio inviato',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Claudia',
                avatar: 'img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 12:00',
                        message: 'Ultimo messaggio inviato',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Federico',
                avatar: 'img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 12:00',
                        message: 'Ultimo messaggio inviato',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Davide',
                avatar: 'img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 12:00',
                        message: 'Ultimo messaggio inviato',
                        status: 'received'
                    }
                ]
            },
           
        ]
    },
    methods: {
        selectContact(contact) {
            this.activeContact = contact;
        }
    },
    computed: {
        contactsWithLastMessage() {
            return this.contacts.map(contact => {
                const lastMessage = contact.messages[contact.messages.length - 1];
                const lastMessageTime = new Date(lastMessage.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                return {
                    ...contact,
                    lastMessage: lastMessage.message,
                    lastMessageTime: lastMessageTime
                };
            });
        }
    }
});
