let TEXT_AREA_HEIGHT = 5,
    TEXT_AREA_WIDTH = 20,
    DIGIT_BUTTONS = 10,
    MAIN_BUTTON_PANEL_GRID_ROWS = 4,
    MAIN_BUTTON_PANEL_GRID_COLUMNS = 4,
    SIDE_BUTTON_PANEL_GRID_ROWS = 3,
    SIDE_BUTTON_PANEL_GRID_COLUMNS = 1;

class View extends DOM {
    /**
     * Create the html DOM here.
     */
    constructor() {
        super(document.body, "Tabbed Interface")
        let GridContainer = new GridLayout(1, 3)

        let LeftVerticalLayout = new VerticalLayout()
        let user = new Layout()
        user.insert(`<b>aaaa</b>`)
        let trends = new Layout()
        trends.insert(`<b>Trends</b>`)
        LeftVerticalLayout.add(user, trends)

        let TweetsVerticalLayout = new VerticalLayout()
        TweetsVerticalLayout.insert(`aaa`)

        let RightVerticalLayout = new VerticalLayout()
        RightVerticalLayout.insert(`some followers`)

        GridContainer.add(LeftVerticalLayout, TweetsVerticalLayout, RightVerticalLayout)
        this.add(GridContainer)

    }
    /**
     * Attach the Controller to the View
     * @param {Controller} controller 
     */
    registerObserver(controller) {
        this.controller = controller;
    }


    /**
     * Updates input display based on String provided as argument.
     * @param input new value of input display
     */
    updateTopDisplay(n) {
        this.tTop.setValue(n);
    }
    updateBottomDisplay(n) {
        this.tBottom.setValue(n);
    }

    updateSubtractAllowed(allowed) {
        this.bSubtract.setEnabled(allowed);
    }
    updateDivideAllowed(allowed) {
        this.bDivide.setEnabled(allowed);
    }
    updatePowerAllowed(allowed) {
        this.bPower.setEnabled(allowed);
    }
    updateRootAllowed(allowed) {
        this.bRoot.setEnabled(allowed);
    }



}