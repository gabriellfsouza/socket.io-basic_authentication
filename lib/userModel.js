var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@localhost/admin',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    password: { type: String, select: false },
    email: String
});

module.exports = mongoose.model('User', userSchema);
