

class ToDoView extends DOM {
    constructor(controller) {
        super(controller, "/")

        let header = new Header()

        let profileInfo = new DOMElement('div').setContent("Matt Hall\n@matthew349hall")
        let trendsForYou = new List()
        let recommendedFollowers = new List()
        let moreInfo = new DOMElement('p').addClass("footer").setContent("&copy2019 Twitter")

        let InfoColumn = new VerticalLayout(profileInfo, trendsForYou, recommendedFollowers, moreInfo)

        let TweetsFeed = new Feed()

        let grid = new GridLayout(1, 2, InfoColumn, TweetsFeed).addStyle('grid-gap: 10px; padding-top: 10px')

        let UI = new VerticalLayout(header, grid)

        this.root = UI
    }

    updateLikes(count) {
        // console.log(this.likesReadout)
        this.likesReadout.content = count + " likes"
    }

}


/**
 * Feed used for displaying tweets, messages, threads, etc.
 */
class Feed extends VerticalLayout {
    constructor() {
        super()

        let sampleTweet0 = new Tweet()
        let sampleTweet1 = new Tweet()
        this.add(sampleTweet0, sampleTweet1)
    }

}

class Tweet extends VerticalLayout {
    constructor() {
        super()
        let user = new DOMElement('div').setContent("John Doe").addStyle(`padding-top: 20px;`)
        let content = new DOMElement('p').addStyle(`margin-top: 5px;`).setContent("And for governing such Part of them as may be made prior to the Year one thousand eight hundred and Eighty seven and of foreign Coin, and fix the Standard of Weights and Measures. This Constitution, and the Day on which they shall give their Votes. The House of Representatives shall immediately chuse by ")

        let reply = new Button("reply")
        let retweet = new Button("retweet")
        let like = new Button("like")
        let buttons = new HorizontalLayout(reply, retweet, like)

        this.add(user, content, buttons)
    }
}


/**
 * Header common across all webapp pages, includes methods for marking
 * which tab is currently active, etc.
 */
class Header extends HorizontalLayout {
    constructor() {
        super()
        // Interface Tabs
        this.TabHome = new TabButton("Home&nbsp")
        this.TabMoments = new TabButton("Moments&nbsp")
        this.TabNotifications = new TabButton("Notifications&nbsp")
        this.TabMessages = new TabButton("Messages ")
        this.Tabs = new HorizontalLayout(this.TabHome, this.TabMoments, this.TabNotifications, this.TabMessages)

        // Main logo button
        this.Title = new DOMElement('div').setContent("Twitter").flex().addStyle(`text-align: center;`)

        this.Search = new TextInput('search').addClass('searchbox')
        this.Compose = new Button("Tweet")
        this.Menus = new HorizontalLayout(this.Search, this.Compose)

        this.add(this.Tabs, this.Title, this.Menus)
    }
}

/**
 * A custom button for switching interface tabs
 */
class TabButton extends Button {
    constructor(name) {
        super(name)
        // this.setContent(name)
        this.addClass('menu-tab')
    }
}