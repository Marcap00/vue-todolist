/* 
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */


const { createApp } = Vue;

createApp({
    // Inizializzazione dei dati
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
            ],
            // Inizializzo l'elementto che voglio aggiungere alla lista
            newTodoItem: "",
        }
    },
    // Metodi 
    methods: {
        // Metodo per rimuovere un elemento dalla to do list (ricevendo come parametro l'indice dell'elemento)
        removeItem(i) {
            // Rimuovo l'elemento dalla lista utilizzando il metodo splice
            this.todoItems.splice(i, 1);
        },
        // Metodo per aggiungere un elemento alla to do list
        addElement() {
            // Controllo che il campo di input non sia vuoto
            if (!this.newTodoItem) return;
            // Aggiungo l'elemento alla to do list
            this.todoItems.push({ title: this.newTodoItem, done: false });
            // Resetto il campo di input
            this.newTodoItem = '';
        },
        // Metodo per cambiare la proprietà done dell'elemento (done: true/false)
        toggleDone(i) {
            // Cambio la proprietà dell'elemento
            this.todoItems[i].done = !this.todoItems[i].done;
        }
    },
}).mount('#app');