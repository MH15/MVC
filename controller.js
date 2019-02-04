class Controller extends Rotor {
    constructor(model, currentView) {
        super()
        this.model = model
        this.view = currentView
        // this.updateViewToMatch(model, view)


    }

    set view(View) {
        helpers.clear(document.body)
        console.log(View)
        document.body.appendChild(View.root.node)
        // document.body = View.node
        // this.view = View
    }

    updateViewToMatch() {
        // this.view.updateTopDisplay(this.model.top)
        // this.view.updateBottomDisplay(this.model.bottom)
    }

}

