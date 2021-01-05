// init Github class
const github = new Github();
// init ui
const ui = new UI();

// Search for input
const searchUser = document.getElementById('searchUser');

// Search for user, using input text
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // make http call

    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show alert -> UI js file
        // prikazi poruku ako user nije pronadjen, poruku i klasa
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show github profile -> UI js file
        ui.showProfile(data.profile);
        // console.log(data.profile);
        ui.showRepos(data.repos);
        // console.log(data.repos);
      }
    });
  } else {
    // Clear profile when input text is empty
    ui.clearProfile();
  }
});
