const fs = require('fs');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
const generatePage = require('./src/page-template.js');


fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;
  
  console.log('Portfolio complete! Check out index.html to see the output!');
});
// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// const generatePage =() => 'Name: Jane, Github: Gsimon5841 ';
// console.log(generatePage());