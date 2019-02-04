

class ToDoApp extends Rotor {
    constructor() {
        super(document.body, "Rotor Exploration")
        let input = new Text("yeet")
        let textarea = new TextArea("yeet")
        let button = new Button("Submit")
        let anchor = new Anchor("Submit", "/a")

        let left = new VerticalLayout(input, textarea)
        let right = new VerticalLayout(anchor, button)
        let H = new HorizontalLayout(left, right)

        // let grid = new GridLayout(2, 2, input, textarea, button, anchor)
        H.maximized = true
        // H.maximized = false
        // input.flex()
        textarea.flex(4)

        button.flex(4)

        this.add(H)
    }






}

