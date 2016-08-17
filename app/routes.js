 // app/routes.js

// grab the palindrome model we just created
var Palindrome = require('./models/palindrome.js');

    module.exports = function(app) {

        app.get('/api/palindromes', function(req, res) {
            // console.log('INSIDE GET!!!');
            Palindrome.find(function(err, palindromes) {
                if (err) {
                    res.send(err);
                }
                res.json(palindromes);
            });
        });

        app.post('/api/palindromes', function(req, res) {
            // console.log('INPUT INSIDE SERVER POST!!: ', req.body)
            var userEntry = new Palindrome({
                name: req.body.entry
            });
            userEntry.save(function(err, resp) {
                if (err) {
                    res.send(err);
                    console.log(err);
                    // console.log('Fail saving to server');
                } else {
                   res.send({message:'the palindrome has been saved'}); 
                    // console.log('Success saving to server');
                }
            });
        });



        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load public/index.html file
        });

    };