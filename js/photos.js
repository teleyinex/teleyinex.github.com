var photography; 

function shuffle(array) {
    var currentIndex = array.length
        , temporaryValue
        , randomIndex
        ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

if ($("#photos").length) {
    var xhr = $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&",
        dataType: "json",
        data: {"api_key": "3a3eaf0da1caa6463ab4ce99d76dd6ff",
            "photoset_id":  "72157618769763161",
            "format": "json",
            "nojsoncallback" :1}
    });
    
    xhr.done(function(photos){
        var random_photos = shuffle(photos.photoset.photo);
        var items = [];
    
        for(var i=0;i<random_photos.length;i++){ 
            var owner = photos.photoset.owner;
            var photo = photos.photoset.photo[i];
            var div = $("<div/>", {'class': 'col-sm-12 col-md-4'})
            var card = $("<div/>", {'class': 'thumbnail card item'});
            var cover = $("<div/>", {'class': 'post-pic'});
            var a = $("<a/>");
            var url = "http://farm" + photo['farm'] + ".staticflickr.com/" + photo['server']+ "/" + photo['id']+"_"+photo['secret']+".jpg";
            cover.css("background", 'black url(' + url + ') no-repeat center top/ cover');
            var p = $("<p/>", {'class': 'readmore'});
            var h2 = $("<h2/>");
            var length = 15;
            if (photo['title'].length > length) {
                photo['title'] = photo['title'].substring(0, length) + "...";
            }
            h2.text(photo['title']);
            a.attr("href", "http://flickr.com/photos/" + owner + "/" + photo['id']);
            a.text("Source");
            var caption = $("<div/>", {'class': 'caption photography'});
            p.append(a);
            card.append(cover);
            caption.append(h2);
            caption.append(p);
            card.append(caption);
            div.append(card)
            items.push(div);
        }
    
        $("#photos").append(items);
        $("#spinner").hide();
    });

}
export default photography;
