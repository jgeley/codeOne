// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name : {type : String, default: ''}
});

// var nerd = new Nerd({
//        title: 'Thor',
//        rating: 'PG-13',
//        releaseYear: '2011' // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
//            ,
//        hasCreditCookie: true
//    });
//
//    thor.save(function (err, thor) {
//        if (err) return console.error(err);
//        console.dir(thor);
//    });