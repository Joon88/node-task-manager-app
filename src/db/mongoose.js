const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// const me = new User({
//   name: " Joon      ",
//   email: "   MYMAIL@gmail.COM",
//   password: "Something@123",
// });

// const t = new Task({
//   description: "Complete Node project",
//   completed: false,
// });

// me.save()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// t.save()
//   .then((task) => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });
