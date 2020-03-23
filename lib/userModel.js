var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user',{ 
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
