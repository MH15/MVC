class DOM_Helpers {
    clear(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
}