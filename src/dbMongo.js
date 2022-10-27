const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://root:root@cluster0.lol3x.mongodb.net/helpdesk?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});