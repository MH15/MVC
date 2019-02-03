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
        super("name")
        
        this.tTop = new DTextArea("0", TEXT_AREA_HEIGHT, TEXT_AREA_WIDTH)
        this.tBottom = new DTextArea("0", TEXT_AREA_HEIGHT, TEXT_AREA_WIDTH)
        this.tTop.setEditable(false)
        this.tBottom.setEditable(false)

        this.bAdd = new DButton("+")
        this.bSubtract = new DButton("-");
        this.bMultiply = new DButton("*");
        this.bDivide = new DButton("/");
        this.bRoot = new DButton("√");
        this.bSwap = new DButton("⇅");
        this.bPower = new DButton("^");
        this.bEnter = new DButton("↵");
        this.bClear = new DButton("clear");

        this.bDivide.setEnabled(false);
        this.bRoot.setEnabled(false);

        this.bDigits = []
        for (let i = 0; i < DIGIT_BUTTONS; i++) {
            this.bDigits[i] = new DButton(i.toString());
        }

        this.bClear.addClass("clear")
        this.bSwap.addClass("swap", "disabled")

        let mainButtonPanel = new GridLayout(MAIN_BUTTON_PANEL_GRID_ROWS, MAIN_BUTTON_PANEL_GRID_COLUMNS)
        console.log(mainButtonPanel)

        /*
         * Add the buttons to the main button panel, from left to
         * right and top to bottom
         */
        mainButtonPanel.add(this.bDigits[7]);
        mainButtonPanel.add(this.bDigits[8]);
        mainButtonPanel.add(this.bDigits[9]);
        mainButtonPanel.add(this.bAdd);
        mainButtonPanel.add(this.bDigits[4]);
        mainButtonPanel.add(this.bDigits[5]);
        mainButtonPanel.add(this.bDigits[6]);
        mainButtonPanel.add(this.bSubtract);
        mainButtonPanel.add(this.bDigits[1]);
        mainButtonPanel.add(this.bDigits[2]);
        mainButtonPanel.add(this.bDigits[3]);
        mainButtonPanel.add(this.bMultiply);
        mainButtonPanel.add(this.bDigits[0]);
        mainButtonPanel.add(this.bPower);
        mainButtonPanel.add(this.bRoot);
        mainButtonPanel.add(this.bDivide);

        console.log(mainButtonPanel.obj)

        /*
         * Create side button panel
         */
        let sideButtonPanel = new GridLayout(
            SIDE_BUTTON_PANEL_GRID_ROWS, SIDE_BUTTON_PANEL_GRID_COLUMNS)

        /*
         * Add the buttons to the side button panel, from left to
         * right and top to bottom
        */

        sideButtonPanel.add(this.bClear);
        sideButtonPanel.add(this.bSwap);
        sideButtonPanel.add(this.bEnter);

        /*
         * Create combined button panel organized using flow layout, which is
         * simple and does the right thing: sizes of nested panels are natural,
         * not necessarily equal as with grid layout
         */

        let combinedButtonPanels = new FlexLayout()

        /*
         * Add the other two button panels to the combined button panel
         */
        combinedButtonPanels.add(mainButtonPanel);
        combinedButtonPanels.add(sideButtonPanel);

        let all = new GridLayout(3, 1)
        all.add(this.tTop);
        all.add(this.tBottom);
        all.add(combinedButtonPanels);
        this.add(all)

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


    // Events
    
    



    /**
     * TODO: Event listeners, hooks into Model and View
     */

}