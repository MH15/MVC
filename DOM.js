
class DOM {
    /**
     * Create the root of your app
     * @param {Node} rootNode 
     * @param {String} name 
     */
    constructor(rootNode, name) {
        this.title = name
        this.node = rootNode
    }
    /**
     * Attach the Controller to the View
     * @param {Controller} controller 
     */
    registerObserver(controller) {
        this.controller = controller;
    }
    // Manage the Document Title
    get title() { return document.title }
    set title(text) { document.title = text }

    add(...nodes) {
        nodes.forEach(node => {
            this.node.appendChild(node.node)
        })
    }

}


class Element {
    /**
     * Encapsulate the given Node in an Element
     * @param {Node} node 
     */
    constructor(node) {
        this.node = node
    }


    set content(text) { this.node.innerHTML = text }
    get content() { return this.node.innerHTML }

    /**
     * Add classes to a given DOM element
     * @param {String} classNames because of Javascript's
     * wonderful "rest parameter" mode, you may add as many
     * classes as you'd like
     */
    addClass(...classNames) {
        classNames.forEach(c => {
            this.node.classList.add(c)
        })
    }

    flex(value = 1) {
        this.addStyle(`flex: ${value}`)
    }

    /**
     * Add CSS to the 'style' attribute of the DOMElement
     * TODO: validate user-provided CSS
     * @param {String} style valid CSS Styles please
     */
    addStyle(style) {
        this.node.style.cssText += style
    }
}

class DOMElement extends Element {
    /**
     * Create a new DOMElement of type `tag`
     * @param {String} tag a valid HTML tag
     */
    constructor(tag) {
        if (helpers.VALID_DOM_ELEMENTS.includes(tag)) {
            super(document.createElement(tag))
        } else {
            throw "Try a valid HTML tag next time."
        }
    }
}

class Control extends DOMElement {
    constructor(tag) {
        super(tag)
    }

    set enabled(mode) { this.node.disabled = !mode }
    get enabled() { return !this.node.disabled }

    focus(preventScroll) {
        this.node.focus(preventScroll)
        return this
    }
    blur() {
        this.node.blur()
        return this // for chaining
    }
}

class Button extends Control {
    constructor(text) {
        super('button')
        this.content = text
        this.focus()
    }
}

class Input extends Control {
    constructor(tag) { super(tag) }

    set value(text) { this.node.value = text }
    get value() { return this.node.value }

    set placeholder(text) { this.node.placeholder = text }
    get placeholder() { return this.node.placeholder }
}

class TextInput extends Input {
    constructor(placeholder, type = 'text') {
        super('input')
        this.node.type = type
        this.placeholder = placeholder
    }
}

class TextArea extends Input {
    constructor(placeholder, content = '') {
        super('textarea')
        this.placeholder = placeholder
        this.value = content
    }
}

class Anchor extends Control {
    constructor(content = "DefaultAnchorText", href = "/") {
        super('a')
        this.content = content
        this.href = href
    }

    set href(href) { this.node.href = href }
    get href() { return this.node.href }
}

class Layout extends DOMElement {
    constructor(...nodes) {
        super('div')
        this.add(...nodes)
    }


    /**
     * Add nodes to the parent Layout after creation
     * @param  {...Node} nodes 
     */
    add(...nodes) {
        nodes.forEach(node => {
            this.node.appendChild(node.node)
        })
    }

    set maximized(mode) {
        if (mode) {
            this.addStyle(`height: 100%;`)
        } else {
            this.addStyle(`height: auto;`)
        }
    }

    get children() {
        return [...this.node.children]
    }

    hasChild(element) {
        let children = this.children
        return this.children.includes(element.node)
    }
}

class GridLayout extends Layout {
    constructor(rows, cols, ...nodes) {
        super(nodes)
        this.addStyle(`display: grid; width: 100%`)
        this.addStyle(`grid-template-rows: ${helpers.autoGen(rows)};`)
        this.addStyle(`grid-template-columns: ${helpers.autoGen(cols)};`)
    }
}


class HorizontalLayout extends Layout {
    constructor(...nodes) {
        super(...nodes)
        this.addStyle(`display: flex; width: 100%`)
    }

}

class VerticalLayout extends HorizontalLayout {
    constructor(...nodes) {
        super(...nodes)
        this.addStyle(`display: flex; width: 100%`)
        this.addStyle(`flex-direction: column;`)
    }
}

class List extends VerticalLayout {
    constructor(...nodes) {
        super(...nodes)
    }
}