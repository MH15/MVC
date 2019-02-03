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
let VALID_DOM_EVENTS = ["abort","abort","abort","afterprint","animationend","animationiteration","animationstart","appinstalled","audioprocess","audioend ","audiostart ","beforeprint","beforeunload","beginEvent","blocked","blur","boundary ","cached","canplay","canplaythrough","change","chargingchange","chargingtimechange","checking","click","close","complete","complete","The definition of '","compositionend","compositionstart","compositionupdate","contextmenu","copy","cut","dblclick","devicechange","devicelight","devicemotion","deviceorientation","deviceproximity","dischargingtimechange","DOMActivate ","DOMAttributeNameChanged ","DOMAttrModified ","DOMCharacterDataModified ","DOMContentLoaded","DOMElementNameChanged ","DOMFocusIn ","DOMFocusOut ","DOMNodeInserted ","DOMNodeInsertedIntoDocument","DOMNodeRemoved ","DOMNodeRemovedFromDocument ","DOMSubtreeModified ","downloading","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","durationchange","emptied","end ","end ","ended","ended","endEvent","error","error","error","error","error","error","error ","error","focus","focusin","focusout","fullscreenchange","fullscreenerror","gamepadconnected","gamepaddisconnected","gotpointercapture","hashchange","lostpointercapture","input","invalid","keydown","keypress","keyup","languagechange ","levelchange","load","load","loadeddata","loadedmetadata","loadend","loadstart","mark ","message","message","message","message","messageerror","message ServiceWorker","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","nomatch ","notificationclick","noupdate","obsolete","offline","online","open","open","orientationchange","pagehide","pageshow","paste","pause","pause ","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","pointerlockerror","pointermove","pointerout","pointerover","pointerup","play","playing","popstate","progress","progress","push","pushsubscriptionchange","ratechange","readystatechange","repeatEvent","reset","resize","result ","resume ","scroll","seeked","seeking","select","selectstart ","selectionchange ","show","slotchange","soundend ","soundstart ","speechend ","speechstart ","stalled","start ","start","storage","submit","success","suspend","SVGAbort","SVGError","SVGLoad","SVGResize","SVGScroll","SVGUnload","SVGZoom","timeout","timeupdate","touchcancel","touchend","touchmove","touchstart","transitionend","unload","updateready","upgradeneeded ","userproximity","voiceschanged ","versionchange ","visibilitychange","volumechange","waiting","wheel"]

/**
 * Base class... make this fast as FUCK
 */
class DOMElement {
    constructor(type) {
        if (VALID_DOM_ELEMENTS.includes(type)) {
            this.obj = document.createElement(type)
        } else {
            throw "Try a valid HTML tag next time."
        }
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
        if (VALID_DOM_EVENTS.includes(type)) {
            this.obj.addEventListener(type, callback, options)
        } else {
            throw "That's an invalid event type."
        }
    }

    /**
     * Append a DOMElement directly to this DOMElement
     * @param {DOMElement} element 
     */
    add(element) {
        this.obj.appendChild(element.obj)
    }
    /**
     * Removes this DOMElement from all places in the DOM
     */
    remove() {
        this.obj.remove()
    }

    duplicate() {
        // let newDOM = this.obj.cloneNode(true)
        // let newThis = this
        // newThis.obj = newDOM

    
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

    /**
     * Set the content of said textarea
     * @param {String} text 
     */
    setValue(text) {
        this.obj.value = text
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

    clone() {
        let copy = new this.constructor("asac")
        // switch this.constructor.name
        return copy
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

/**
 * Similar to the GridLayout above... this follows flexbox
 * instead of grid
 */
class FlexLayout extends Layout {
    constructor() {
        super()
        this.addStyle(`display: flex;`)
    }
}