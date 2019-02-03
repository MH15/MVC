class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        updateViewToMatch(model, view)
    }



}

function updateViewToMatch(model, view) {
    let top = model.top
    let bottom = model.bottom
}