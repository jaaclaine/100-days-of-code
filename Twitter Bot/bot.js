console.log("Bot is running...");

// request giphy
var configGi = require("./configGi");
var giphy = require('giphy-api')(configGi);

// request twitter
var Twit = require("twit");
var configTw = require("./configTw");
var T = new Twit(configTw);

function twitBot(){
    // search hashtag
    var searchParams = {
        q: "#ReactsAsBTS",
        result_type: "mixed",
        count: 10
    };

    T.get('search/tweets', searchParams, getPost);

    function getPost(err, data, response){
        var dataStat = data.statuses;
        for(var i = 0; i < dataStat.length; i++){
            if(!err){
                var retweetId = data.statuses[i].id_str;
                T.post('statuses/retweet/:id', { id: retweetId }, function (err, data, response){
                    if(!err){
                        console.log(retweetId + " Retweeted now");

                        // search the gif
                        var gifRandom = ['namjoon rap monster bts kpop', 
                                        'jin seokjin bts kpop', 
                                        'yoongi suga bts kpop', 
                                        'hoseok hobi jhope j-hope bts kpop', 
                                        'jimin bts kpop', 
                                        'taehyung taetae v bts kpop', 
                                        'jungkook kookie bts kpop'];
                        var random = Math.floor(Math.random() * 7);
                        console.log("the member is " + gifRandom[random]);

                        var gifPost;
                        giphy.random(gifRandom[random]).then(function (res){
                            console.log("Picked random gif");
                            var thisGifId = res.data.id;

                            giphy.id(thisGifId, function (err, res){
                                var gifPost = res.data[0].bitly_gif_url;
                                var rtName = data.retweeted_status.user.screen_name;
                                var rtId = data.retweeted_status.id_str;
                                var tweetParams = {
                                    in_reply_to_status_id: rtId,
                                    status: '@' + rtName + ' ' + gifPost
                                };
                                T.post('statuses/update', tweetParams, tweeted);
                                function tweeted(err, data, response){
                                    console.log("Replied");
                                }
                            }); // giphy id
                        }); // giphy random

                    } else{
                        console.log(retweetId + " Already retweeted");
                    }
                }); // statuses retweet
            } // if !err
        } // for
    } // get post
}

setInterval( twitBot, 5*60*1000);