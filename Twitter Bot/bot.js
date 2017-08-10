console.log("Bot is running...");

var Twit = require("twit");

var config = require("./config");
var T = new Twit(config);

// search the hashtag
var searchParams = {
    q: "#rapmonster",
    result_type: "recent",
    count: 1
};

T.get('search/tweets', searchParams, getPost);

function getPost(err, data, response){
    if(data){
        // tweet id
        var retweetId = data.statuses[0].id_str;
        
        // retweet the hashtag
        T.post('statuses/retweet/:id', { id: retweetId }, function (err, data, response) {
            console.log("Retweeted!");
            if(!err){
                // reply the tweet
                var rtId = data.retweeted_status.id_str;
                var rtName = data.retweeted_status.user.screen_name;
                var tweetParams = {
                    in_reply_to_status_id: rtId,
                    status: '@' + rtName + ' <3'
                };
                T.post('statuses/update', tweetParams, tweeted);
                function tweeted(err, data, response){
                    console.log("Reply!");
                }
            }
        });
    }

} // end getHashtagPost