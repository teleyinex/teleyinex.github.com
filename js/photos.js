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
        // url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&",
        url: "https://api.unsplash.com/users/teleyinex/photos", 
        dataType: "json",
        data: {"client_id": "c0d2f2648f2467bdbfc2172761ce5330a4c2635c38cdca9102888e2ce5b8b72f",
            "order_by":  "popular"
            }

        // data: {"api_key": "3a3eaf0da1caa6463ab4ce99d76dd6ff",
        //     "photoset_id":  "72157618769763161",
        //     "format": "json",
        //     "nojsoncallback" :1}
    });
    
    xhr.done(function(photos){
      console.log(photos)
      // var random_photos = shuffle(photos.photoset.photo);
        var random_photos = shuffle(photos);
        var items = [];
    
      //for(var i=0;i<random_photos.length;i++){ 
        for(const photo of random_photos) {
          // var owner = photos.photoset.owner;
            var owner = photo.user.username;
          // var photo = photos.photoset.photo[i];
          //  var photo = photo.urls.small
            var div = $("<div/>", {'class': 'col-sm-12 col-md-4'})
            var card = $("<div/>", {'class': 'thumbnail card item'});
            var cover = $("<div/>", {'class': 'post-pic'});
            var a = $("<a/>");
          // var url = "http://farm" + photo['farm'] + ".staticflickr.com/" + photo['server']+ "/" + photo['id']+"_"+photo['secret']+".jpg";
            var url = photo.urls.small
            cover.css("background", 'black url(' + url + ') no-repeat center center/ cover');
            var p = $("<p/>", {'class': 'readmore'});
            var h2 = $("<h2/>");
            var length = 15;
          //   if (photo['title'].length > length) {
          //       photo['title'] = photo['title'].substring(0, length) + "...";
          //   }
          //  h2.text(photo['description']);
          // a.attr("href", "http://flickr.com/photos/" + owner + "/" + photo['id']);
            a.attr("href", photo.links.html)
            a.text("Download");
            var caption = $("<div/>", {'class': 'caption photography'});
            p.append(a);
            card.append(cover);
          //  caption.append(h2);
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
