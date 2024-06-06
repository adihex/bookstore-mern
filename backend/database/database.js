const mongoose = req("mongoose");

const MONGODB_URL = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
        userNewUrlParser: true
        useUnifiedTopology: true
    })
    .then()
    .catch((error) => {
      console.log(`DB connection FAILD`);
      console.log(error);
      process.exit(1);
    });
};
