import mongoose from 'mongoose';
// import validator from 'validator';

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email :{

//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"');
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Age must be a positive number');
//             }
//         }
//     }
// });

// const me = new User({
//     name: '    Andrew   ',
//     password: 'phone098!',
//     email: '
//     age: 27
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error!', error);
// });

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// });

// const task = new Task({
//     description: '   Learn Node.js    ',
//     completed: false
// });

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log('Error!', error);
// });