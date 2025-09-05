/*Object literals:


//const blogs = [
  //  {title: 'why mac & cheese rules', likes: 30},
    //{title: '10 things to make with marmite', likes: 50},
//];

//console.log(blogs);


let user = {
    Name: 'crystal',
    age: 30,
    email: 'crystal@theninja.co.uk',
    location: 'berlin',
    blogs: [{title: 'why mac & cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50},],
 login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        console.log('this user has written the following blogs:'  );
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }

};


user.login();
user.logout();
const Name = 'mario';
Name.toUpperCase();
user.logBlogs();
console.log(this);

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['name']);
console.log(typeof user);

const key = 'location';
console.log(user[key]); user['location']

user['name'] = 'chun-li';
console.log(user['name'])


//Math object:

console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random number
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

;

let scoreOne = 50;
let scoreTwo = scoreOne;
const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);  

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);  
console.log(userOne, userTwo);

userOne.name = 'shagan';
console.log(userOne, userTwo);*/
