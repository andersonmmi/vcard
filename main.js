console.log("talking");

let login = '';
let name = '';
let url = '';
let email = '';
let company = '';
let storyContent = '';
let header = '';
let headerName = '';
let bio = '';
let bioContent = '';
let story = '';
let image = '';
let picture = '';

fetch('https:/api.github.com/users/andersonmmi')
  .then(
    function (response){
      //if (response.stauts !== 200){
      //  console.log(`There is an error # ${response.status}`);
      //return;
    //} else

      response.json().then(function(data) {
        console.log(data);
        login = data.login;
        console.log(login);
        name = data.name;
        console.log(name);
        url = data.html_url;
        console.log(url);
        email = data.email;
        console.log(email);
        company = data.company;
        console.log(company);
        picture = data.avatar_url;
        console.log(picture);
        storyContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        populateHeader();
        populateBio();
        populateStory();
        populateImage();
      })
    }
  )

function populateHeader(){
  header = document.getElementById('header');
  console.log(`the header thing is ${header}`);
  headerName = document.createTextNode(`${name}`);
  console.log(`the header_name thing is ${headerName}`);
  header.appendChild(headerName);
}

function populateBio(){
  bio = document.getElementById('bio');
  console.log(`the bio thing is ${bio}`);
  //bioContent = document.createTextNode(`
  //  The Basics\n
  //    Name: ${name}\n
  //    Github URL: ${url}\n
  //    Email: ${email}\n
  //    Company: ${company}\n
  //    Website: pages.github/andersonmmi\n

  //`);
  //console.log(bioContent);
  //bio.appendChild(bioContent);
  bio.innerHTML = `
    <h2>The Basics</h2>\n
    <ul>
      <li>Name: ${name}</li>\n
      <li>Github URL: <a href=${url}>${login}<a/></li>\n
      <li>Email: ${email}</li>\n
      <li>Company: ${company}</li>\n
      <li>Website: pages.github/${login}</li>\n
    </ul>
  `
}

function populateStory(){
  story = document.querySelector('.story');
  console.log(`the story thing is ${story}`);
  story.innerHTML = `
    <h2>The Story</h2>\n
      ${storyContent}\n
  `;
}

function populateImage() {
  image = document.querySelector('img');
  image.setAttribute('src',picture);
}
