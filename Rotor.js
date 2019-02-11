
class Rotor {
    constructor(model) {
        this.model = model
        this.RegisteredViews = []
    }

    register(View) {
        // console.log(View)
        this.RegisteredViews.push(View)
    }

    set currentView(View) {
        this.view = View

        helpers.clear(document.body)
        document.body.appendChild(View.root.node)

        var stateObj = { foo: "bar" };

        history.pushState({}, null, window.location.origin + View.path);
    }

    route(path) {
        let view = this.RegisteredViews.find(view => {
            return view.path === path
        })
        this.view = view
    }

}