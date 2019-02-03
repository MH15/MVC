/**
 * Methods for manipulating the overall DOM structure
 */
class DOM {
    /**
     * @param {String} name the name your DOM model    
     */
    constructor(name) {
        this.name = name
        console.log(`Instantiating a new DOM named '${name}'`)
        
    }

    /**
     * Append a DOMElement directly to the browsers DOM
     * @param {DOMElement} element 
     */
    add(element) {
        document.body.appendChild(element.obj)
    }


}

let VALID_DOM_ELEMENTS = ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]


/**
 * Base class... make this fast as FUCK
 */
class DOMElement {
    constructor(type) {
        if (VALID_DOM_ELEMENTS.includes(type)) {
            this.obj = document.createElement(type)
        } else {
            throw "invalid HTML tag type"
        }
    }
    /**
     * Add classes to a given DOM element
     * @param {String} classNames because of Javascript's
     * wonderful "rest parameter" mode, you may add as many
     * classes as you'd like
     */
    addClass(...classNames) {
        console.log(classNames)
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
}

/**
 * Just a textarea, nothing fancy
 */
class DTextArea extends DOMElement {
    /**
     * Creates a textarea based on the parameters supplied
     * @param {String} content 
     * @param {Number} height 
     * @param {Number} width 
     */
    constructor(content, height, width) {
        super("textarea")
        this.obj.rows = height
        this.obj.cols = width
        this.obj.value = content
        // console.log(this.obj)
    }
    /**
     * Set the editing avalability of the textarea
     * @param {Boolean} toggle 
     */
    setEditable(toggle) {
        this.obj.disabled = !toggle;
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
        this.obj.innerHTML = content
    }
    /**
     * Set the avalability of the button
     * @param {Boolean} toggle 
     */
    setEnabled(toggle) {
        this.obj.disabled = !toggle;
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
    /**
     * Add a DOMElement as child to a Layout
     * @param {DOMElement} element 
     */
    add(element) {
        this.obj.appendChild(element.obj)
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
        this.addStyle(`display: grid;`)
        this.addStyle(`grid-template-rows: ${this.autoGen(rows)};`)
        this.addStyle(`grid-template-columns: ${this.autoGen(cols)};`)
    }

    autoGen(number) {
        return "auto ".repeat(number)
    }
}

class FlexLayout extends Layout {
    constructor() {
        super()
        this.addStyle(`display: flex;`)
    }
}