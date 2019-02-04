class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.updateViewToMatch(model, view)
    }

    updateViewToMatch() {
        // this.view.updateTopDisplay(this.model.top)
        // this.view.updateBottomDisplay(this.model.bottom)
    }

    processClearEvent() {
        this.model.bottom = 0;
        this.updateViewToMatch()
    }

    processSwapEvent() {
        let temp = this.model.top
        this.model.top = this.model.bottom
        this.model.bottom = temp
        this.updateViewToMatch()
    }

    processEnterEvent() {
        this.model.top = this.model.bottom
        this.updateViewToMatch()
    }

    processAddEvent() {
        this.model.bottom += this.model.top
        this.model.top = 0
        this.updateViewToMatch()
    }

    processSubtractEvent() {
        this.model.top -= this.model.bottom
        this.model.bottom = top
        this.model.top = 0
        this.updateViewToMatch()
    }

    processMultiplyEvent() {
        this.model.top *= this.model.bottom
        this.model.bottom = this.model.top
        this.model.top = 0
        this.updateViewToMatch()
    }

    processDivideEvent() {
        this.model.top /= this.model.bottom
        this.model.bottom = this.model.top
        this.model.top = 0
        this.updateViewToMatch()
    }

    processPowerEvent() {
        this.model.bottom = Math.pow(this.model.top, this.model.bottom)
        this.model.top = 0
        this.updateViewToMatch()
    }

    processRootEvent() {
        this.model.bottom = Math.pow(this.model.top, 1 / this.model.bottom)
        this.model.top = 0
        this.updateViewToMatch()
    }

    processAddNewDigitEvent(digit) {
        this.model.bottom = this.model.bottom * 10 + digit
        this.updateViewToMatch()
    }

}

