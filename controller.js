class Controller extends Rotor {
    constructor(model) {
        super(model)
        // this.updateViewToMatch(model, view)

    }


    updateViewToMatch() {
        // this.view.updateTopDisplay(this.model.top)
        // this.view.updateBottomDisplay(this.model.bottom)
    }

    loadSettings() {
        let view = this.RegisteredViews.find(view => {
            return view.path === '/settings'
        })
        // console.log(this.controller)
        this.currentView = view
    }

    updateLikes() {
        this.model.likes++
        this.view.updateLikes(this.model.likes)
    }
}

