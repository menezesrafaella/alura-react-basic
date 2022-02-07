export default class Categories {
    constructor() {
        this.categories = []
        this._subscribes = [];
    }

    subscribe(func){
        this._subscribes.push(func)
    }

    unsubscribe(func) {
        this._subscribes = this._subscribes.filter(f => f !== func)
    }

    notify() {
        this._subscribes.forEach(func => func(this.categories))
    }

    addCategory(name) {
        // const newArrayCategories = [...this.state.categories, name]
        // const newState = {...this.state, categories: newArrayCategories}
        // this.setState(newState)
        this.categories.push(name)
        this.notify()
      }
}