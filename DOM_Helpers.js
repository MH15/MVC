class DOM_Helpers {
    constructor() {
        this.VALID_DOM_ELEMENTS = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]
        this.VALID_DOM_EVENTS = ["abort", "abort", "abort", "afterprint", "animationend", "animationiteration", "animationstart", "appinstalled", "audioprocess", "audioend ", "audiostart ", "beforeprint", "beforeunload", "beginEvent", "blocked", "blur", "boundary ", "cached", "canplay", "canplaythrough", "change", "chargingchange", "chargingtimechange", "checking", "click", "close", "complete", "complete", "The definition of '", "compositionend", "compositionstart", "compositionupdate", "contextmenu", "copy", "cut", "dblclick", "devicechange", "devicelight", "devicemotion", "deviceorientation", "deviceproximity", "dischargingtimechange", "DOMActivate ", "DOMAttributeNameChanged ", "DOMAttrModified ", "DOMCharacterDataModified ", "DOMContentLoaded", "DOMElementNameChanged ", "DOMFocusIn ", "DOMFocusOut ", "DOMNodeInserted ", "DOMNodeInsertedIntoDocument", "DOMNodeRemoved ", "DOMNodeRemovedFromDocument ", "DOMSubtreeModified ", "downloading", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "end ", "end ", "ended", "ended", "endEvent", "error", "error", "error", "error", "error", "error", "error ", "error", "focus", "focusin", "focusout", "fullscreenchange", "fullscreenerror", "gamepadconnected", "gamepaddisconnected", "gotpointercapture", "hashchange", "lostpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "languagechange ", "levelchange", "load", "load", "loadeddata", "loadedmetadata", "loadend", "loadstart", "mark ", "message", "message", "message", "message", "messageerror", "message ServiceWorker", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "nomatch ", "notificationclick", "noupdate", "obsolete", "offline", "online", "open", "open", "orientationchange", "pagehide", "pageshow", "paste", "pause", "pause ", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "pointerlockerror", "pointermove", "pointerout", "pointerover", "pointerup", "play", "playing", "popstate", "progress", "progress", "push", "pushsubscriptionchange", "ratechange", "readystatechange", "repeatEvent", "reset", "resize", "result ", "resume ", "scroll", "seeked", "seeking", "select", "selectstart ", "selectionchange ", "show", "slotchange", "soundend ", "soundstart ", "speechend ", "speechstart ", "stalled", "start ", "start", "storage", "submit", "success", "suspend", "SVGAbort", "SVGError", "SVGLoad", "SVGResize", "SVGScroll", "SVGUnload", "SVGZoom", "timeout", "timeupdate", "touchcancel", "touchend", "touchmove", "touchstart", "transitionend", "unload", "updateready", "upgradeneeded ", "userproximity", "voiceschanged ", "versionchange ", "visibilitychange", "volumechange", "waiting", "wheel"]

    }
    /**
     * Remove all children from a given node
     * @param {Node} parent 
     */
    clear(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }

    /**
     * If a Node is provided, use that node, else return document.body
     * @param {Node} node 
     */
    static selectParentNode(node) {
        if (node) {
            return node
        }
        return document.body
    }

    static autoGen(number) {
        return "auto ".repeat(number)
    }
}