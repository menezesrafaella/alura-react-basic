export default class ArrayNotes {
    constructor(){
        this.notes = []
        this._subscribes = [];
    }

    subscribe(func){
        this._subscribes.push(func)
    }

    unsubscribe(func) {
        this._subscribes = this._subscribes.filter(f => f !== func)
    }

    notify() {
        this._subscribes.forEach(func => func(this.notes))
    }

    createNote(title, text, category) {
        const newNote = new Note(title, text, category)
        this.notes.push(newNote)
        this.notify();
    }

    deleteNote(index){
        this.notes.splice(index, 1)
        this.notify();
    }
}

class Note {
    constructor(title, text, category){
        this.title = title;
        this.text = text;
        this.category = category
    }
}