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
        super(document.body, "Feed Interface")
        let GridContainer = new GridLayout(14, 3)

        let LeftVerticalLayout = new VerticalLayout()
        // LeftVerticalLayout.insert(`<b>Menu</b>`)
        let bTrends = new DButton("Trends")
        let bFeed = new DButton("Feed")
        let bProfile = new DButton("Profile")
        LeftVerticalLayout.add(bTrends, bFeed, bProfile)

        let ContentVerticalLayout = new VerticalLayout()
        ContentVerticalLayout.insert(`aaa`)

        let RightVerticalLayout = new VerticalLayout()
        RightVerticalLayout.insert(`some followers`)
        let bFollow = new DButton("follow")
        RightVerticalLayout.add(bFollow)

        GridContainer.add(LeftVerticalLayout, ContentVerticalLayout, RightVerticalLayout)
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