const express = require('express');
let app = express();
const session = require("express-session");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport')
global.logger = require('tracer').colorConsole();

const puretext = require('puretext');
let User = require("./app/models/user");
let Contact = require("./app/models/contact");
let Call = require("./app/models/call");

app.use(session({ secret: 'Pookie', proxy: true, resave: true, saveUninitialized: true }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'goldFishApp', 'dist')))
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost/gfish');
mongoose.Promise = global.Promise;

require('./app/config/passport')(passport);
// require('./app/config/routes.js')(app)

//Puretext
app.post('/sendText', (req, res) => {
    
    puretext.send(req.body, function (err, response) {
        console.log("puretext")
        if(err) console.log(err);
        else res.json(response)
    });
})

// login
app.post('/login', passport.authenticate('local-login', {
    failWithError: true
}),
    function (req, res, next) {
        // handle success
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            return res.status(200).json({ id: req.user.id });
        }
        return res.redirect('/');
    },
    function (err, req, res, next) {
        // handle error
        console.log(err)
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            return res.status(400).json(err);
        }
        else { }
        //return res.redirect('/login');
    }
);

// register
app.post('/user', passport.authenticate('local-signup', { failWithError: true }),
    function (req, res, next) {
        // handle success
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            return res.status(200).json({ id: req.user.id });
        }
        return res.redirect('/');
    },
    function (err, req, res, next) {
        // handle error
        console.log(err)
        if (req.xhr || req.headers.accept.indexOf('json') > -1) {
            return res.status(400).json(err);
        }
        else { }
        //return res.redirect('/login');
    }
);

// if session?
app.get('/whoami', (req, res) => {
    console.log(res)
    if (req.user) {
        return res.json(req.user)
        // return res.json(req.user._id)
    }
    else return res.sendStatus(401)
})

// createContact
app.post('/contact', (req, res) => {
    if (req.user) {
        User.findOne({ _id: req.user._id }, function (err, user) {
            let contact = new Contact(req.body);
            contact._user = user._id;
            user.contact.push(contact);
            contact.save(function (err, data) {
                user.save(function (err) {
                    if (err) {
                        res.json(err);
                    }
                    else{
                        res.json(user);
                    }
                })
            })
        })
    }
    else return res.sendStatus(401);
})

app.get('/random', (req, res)=>{
    Contact.find({}, (err, contacts)=>{
        return res.json(contacts)
    })
})

// createCall
app.post('/call/:id', (req, res) => {
    Contact.findOne({ _id: req.params.id }, function (err, contact) {
        let call = new Call(req.body);
        call._contact = contact._id;
        call._user = contact._user;
        contact.call.push(call);
        call.save(function (err) {
            contact.save(function (err) {
                user.save(function (err) {
                    if (err) {
                        {
                            console.log('Error');
                        }
                    }
                })
            })
        })
    })
})



// show all contacts of a user
app.get('/contacts', (req, res) => {
    if (req.user) {
        User.findOne({ _id: req.user._id }).populate("contact").exec(function (err, contacts) {
            if (err) {
                res.json({ message: 'Error!', error: err })
            } else {
                console.log(contacts)
                res.json({ message: 'Success!', data: contacts })
            }
        });
    }
    else return res.sendStatus(401);

})
//show one contact
app.get('/contact/:id', (req, res) => {
    if (req.user) {
        Contact.findOne({ _id: req.params.id },(function (err, contact) {
            if (err) {
                res.json({ message: 'Error!', error: err })
            } else {
                console.log(contact)
                res.json({ message: 'Success!', data: contact })
            }
        }));
    }
    else return res.sendStatus(401);
})

// Edit contact
app.put('/contact/:id', (req, res) => {
    // console.log("req.body: " , req.body)
    if (req.user) {
        Contact.findByIdAndUpdate(req.params.id, req.body,{runValidators:true},(function (err, contact) {
                if (err) {
                    console.log(err)
                    res.json(err);
                }
                else{
                    console.log("Success")
                    res.json("sucess");
                }
        }));
    }
    else return res.sendStatus(401);
//  if (req.user) {
//    User.findOne({ _id: req.user._id }, function (err, user) {
  //      contact.update({_id: req.params.id}, req.body, (err,contact) => {
   //         if (err) {
   //             res.json(err);
   //         }
  //          else{
  //              res.json(user);
  //          }
  //      })

        // let contact = new Contact(req.body);
        // contact._user = user._id;
        // user.contact.push(contact);
        // contact.save(function (err, data) {
        //     user.save(function (err) {
        //         if (err) {
        //             res.json(err);
        //         }
        //         else{
        //             res.json(user);
        //         }
        //     })
        // })
})
// // show one
// app.get('/product/:id', (req,res) =>{
//     console.log('server',req.params.id)
//     PPM.findOne({_id:req.params.id}, (err, data) => {
//         console.log(data);
//         if (err){
//             res.json({message: 'Error!', error:err})
//         }else{
//             res.json({message: 'Success!', data:data})
//         }
//     })
// })
// // edit
// app.put('/product/:id',(req,res) => {
//     PPM.update({_id:req.params.id}, req.body, { runValidators: true }, (err,data) => {
//         if (err){
//             res.json(err);
//         }else{
//             res.json({message: 'Success!', result:data})
//         }
//     })
// })
// // delete
// app.delete('/product/:_id',(req,res) => {
//     console.log('dlklkl')
//     PPM.remove({_id:req.params._id}, (err,data) => {
//         if (err){
//             res.json({message:'Error!', message:err})
//         }else{
//             res.json({message:'Deleted!!'})
//         }
//     })
// })

app.all("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'goldFishApp', 'dist', 'index.html'))
});

app.listen(8000, () => {
    console.log('on 8000');
}) 