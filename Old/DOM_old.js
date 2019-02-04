/**
 * Methods for manipulating the overall DOM structure
 */
class DOM {
    /**
     * @param {Node} name the name your DOM model    
     */
    constructor(node, name) {
        this.title = name
        console.log(`Instantiating a new DOM named '${name}'`)
        this.obj = helpers.selectParentNode(node)
    }
    /**
     * Manage the document title
     */
    get title() {
        return document.title
    }
    set title(text) {
        document.title = text
    }

    /**
     * Append a DOMElement directly to the browsers DOM
     * @param {DOMElement} elements 
     */
    add(...elements) {
        elements.forEach(el => {
            this.obj.appendChild(el.obj)
        })
    }

    /**
     * Clear the DOM. This and add() are the seeds for the
     * routing parts of this library
     */
    clear() {
        helpers.clear(this.obj)
    }


}


/**
 * Base class... make this fast as FUCK. A DOMElement may
 * exist in multiple locations in the browser DOM, this is
 * by design.
 */
class Element {
    constructor(node) {
        this.obj = node
    }
    /**
 * Add classes to a given DOM element
 * @param {String} classNames because of Javascript's
 * wonderful "rest parameter" mode, you may add as many
 * classes as you'd like
 */
    addClass(...classNames) {
        classNames.forEach(c => {
            this.obj.classList.add(c)
        })
    }

    /**
     * Add CSS to the 'style' attribute of the DOMElement
     * TODO: validate user-provided CSS
     * @param {String} style valid CSS Styles please
     */
    addStyle(style) {
        this.obj.style.cssText += style
    }
    /**
     * Basically like calling innerHTML
     * @param {String} text 
     */
    set content(text) {
        this.obj.innerHTML = text
    }
    get content() {
        return this.obj.innerHTML
    }
    /**
     * This is literally just a wrapper for addEventListener
     * @param {String} type 
     * @param {Function} callback 
     */
    registerEvent(type, callback, options) {
        if (helpers.VALID_DOM_EVENTS.includes(type)) {
            this.obj.addEventListener(type, callback, options)
        } else {
            throw "That's an invalid event type."
        }
    }

    /**
     * Append a DOMElement directly to this DOMElement
     * @param {DOMElement} elements 
     */
    add(...elements) {
        elements.forEach(el => {
            this.obj.appendChild(el.obj)
        })
    }
    /**
     * Insert HTML as a child to the DOMElement
     * @param {String} HTMLString 
     */
    insert(HTMLString, position = 'beforeend') {
        this.obj.insertAdjacentHTML(position, HTMLString)
    }

    // Removes this DOMElement from all places in the DOM
    remove() {
        this.obj.remove()
    }
    // Removes all children from the DOMElement
    clear() {
        helpers.clear(this.obj)
    }

    // Creates a new DOMElement
    clone() {
        return new this.constructor()
    }
}

/**
 * for elements created using JavaScript
 */
class DOMElement extends Element {
    constructor(type) {
        if (helpers.VALID_DOM_ELEMENTS.includes(type)) {
            super(document.createElement(type))
        } else {
            throw "Try a valid HTML tag next time."
        }
    }

}


/**
 * for elements created using HTML
 */
class HTMLElement extends DOMElement {

}

/**
 * Just a textarea, nothing fancy
 */
class DTextArea extends DOMElement {
    /**
     * Creates a textarea based on the parameters supplied
     * @param {String} content 
     * @param {Number} height optional
     * @param {Number} width optional
     */
    constructor(content, height = 5, width = 20) {
        super("textarea")
        this.obj.rows = height
        this.obj.cols = width
        this.obj.value = content
    }
    /**
     * Set the editing avalability of the textarea
     * @param {Boolean} toggle 
     */
    setEditable(toggle) {
        this.obj.disabled = !toggle;
    }

    /**
     * Set the content of said textarea
     * @param {String} text 
     */
    setValue(text) {
        this.obj.value = text
    }

    /**
     * Creates a copy of the caller DTextArea
     */
    clone() {
        return new this.constructor(this.content, this.obj.rows, this.obj.value)
    }
}

/**
 * Just a standard HTML button, no layout or anything.
 */
class DButton extends DOMElement {
    /**
     * Creates a new button
     * @param {String} content 
     */
    constructor(content) {
        super("button")
        this.content = content
    }
    /**
     * Set the avalability of the button
     * @param {Boolean} toggle 
     */
    setEnabled(toggle) {
        this.obj.disabled = !toggle;
    }
    /**
     * Creates a copy of the caller DButton
     */
    clone() {
        return new this.constructor(this.content)
    }
}

/**
 * Here's where it gets interesting - the Layout class
 * serves as the base for FlexLayout, GridLayout,
 * VerticalLayout, and HorizontalLayout. They are similar to
 * their CSS cousins, but not identical.
 */
class Layout extends DOMElement {
    constructor() {
        super("div")
    }
}

/**
 * If you are familiar with CSS Grid (or any other grid
 * libraries) this will be easy to understand. GridLayout
 * creates a new DOMElement acting as a grid of given
 * dimensions rows*columns.
 */
class GridLayout extends Layout {
    constructor(rows, cols) {
        super()
        this.addStyle(`display: grid; width: 100%`)
        this.addStyle(`grid-template-rows: ${this.autoGen(rows)};`)
        this.addStyle(`grid-template-columns: ${this.autoGen(cols)};`)
    }

    autoGen(number) {
        return "auto ".repeat(number)
    }
}

/**
 * Similar to the GridLayout above... this follows flexbox
 * instead of grid, this is a 'horizontal laytout'
 */
class FlexLayout extends Layout {
    constructor() {
        super()
        this.addStyle(`display: flex; width: 100%;`)
    }
}


class VerticalLayout extends FlexLayout {
    constructor() {
        super()
        this.addStyle(`flex-direction: column;`)
    }
}