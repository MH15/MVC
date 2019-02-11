/**
 * The Model can have many different classes, etc
 */

class Model {
    constructor() {
        this.user = new User("Matt Hall", "matthew349hall", 1686, 423, 206)

    }
}



class TweetData {
    constructor() {
        this.user = new User("The Dude", "the_dude", 123, 456, 789)
        this.content = "Tweet Content!"
        this.likes = 1092
        this.retweets = 462
        this.comments = 36
    }
}

class User {
    constructor(fullname, username, tweets, following, followers) {
        this.fullname = fullname
        this.username = username
        this.tweets = tweets
        this.following = following
        this.followers = followers
    }
}