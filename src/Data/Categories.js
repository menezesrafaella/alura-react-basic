export default class Categories {
    constructor() {
        this.categories = []
    }

    addCategory(name) {
        // const newArrayCategories = [...this.state.categories, name]
        // const newState = {...this.state, categories: newArrayCategories}
        // this.setState(newState)
        this.categories.push(name)
      }
}