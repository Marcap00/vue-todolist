const { createApp } = Vue;

createApp({
    data() {
        return {
            // Array di oggetti degli elementi della to do list
            todoItems: [
                { title: 'Completare esercizi JS', done: false },
                { title: 'Completare esercizi Vue', done: true },
                { title: 'Leggere 100 pagine di un libro', done: true },
                { title: 'Comprare nuove cuffie', done: true },
                { title: 'Leggere 5 pagine di documentazione', done: false },
                { title: "Ripassare argomenti dell'ultima lezione", done: false },
                { title: 'Portare a fare una passeggiata il cane', done: true },
                { title: 'Aggiungere una pagina alle note personali', done: false }
            ]
        }
    }
}).mount('#app');