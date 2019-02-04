

class ToDoView extends DOM {
    constructor() {
        super(document.body, "Rotor Exploration")
        // let input = new TextInput("yeet")
        // let textarea = new TextArea("yeet")
        // let button = new Button("Submit")
        // let anchor = new Anchor("Submit", "/a")

        // let left = new VerticalLayout(input, textarea)
        // let right = new VerticalLayout(anchor, button)
        // let H = new HorizontalLayout(left, right)

        // // let grid = new GridLayout(2, 2, input, textarea, button, anchor)
        // H.maximized = true
        // // H.maximized = false
        // // input.flex()
        // textarea.flex(4)

        // button.flex(4)


        let input1 = new TextInput("a").focus()
        input1.focus()
        let input2 = new TextInput("b")
        let list = new List(input1, input2)

        // this.add(list)

        let input3 = new TextInput("c")
        // console.log(list.hasChild(input1))
        // console.log(list.hasChild(input3))
        console.log(this.node)

        this.root = list
    }

}

class SettingsView extends DOM {
    constructor() {
        super(document.body, "Settings")
        let input = new TextInput("yeet")
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

        this.root = H
    }

}

