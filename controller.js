class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.updateViewToMatch(model, view)
    }

    updateViewToMatch(model, view) {

        this.view.updateTopDisplay(model.top)
        this.view.updateBottomDisplay(model.bottom)
    }

}

