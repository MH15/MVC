

class ToDoApp extends Rotor {
    constructor() {
        super(document.body, "Rotor Exploration")
        let input = new Text("yeet")
        let textarea = new TextArea("yeet")
        let button = new Button("tt")
        let anchor = new Anchor("link", "/a")

        let left = new VerticalLayout(input, textarea)
        let right = new VerticalLayout(button, anchor)
        let H = new HorizontalLayout(left, right)

        // let grid = new GridLayout(2, 2, input, textarea, button, anchor)

        this.add(H)
    }






}

