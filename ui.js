class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">Go to Profile</a>
          </div>
          <div class="col-md-9 mt-3">
            <span class="badge badge-primary">Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Repos: ${user.public_gists}</span>
            <span class="badge badge-info">Repos: ${user.followers}</span>
            <span class="badge badge-success">Repos: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Blog: ${user.blog}</li>
              <li class="list-group-item">Date of creating: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
            <a target="_blank" href="${repo.html_url}">${repo.full_name}</a>            
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_url}</span>
            <span class="badge badge-secondary">Commits: ${repo.commits_url}</span>
            <span class="badge badge-info">Created at: ${repo.created_at}</span>
            </div>
          </div>
        </div>
      `;
      document.getElementById('repos').innerHTML = output;
    });
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = `${className}`;
    div.appendChild(document.createTextNode(message));

    const parentElement = document.querySelector('.searchContainer');
    const element = document.querySelector('.search');

    parentElement.insertBefore(div, element);

    //ugasi se posle 3 sec
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  // Clear alert
  clearAlert() {
    const alert = document.querySelector('.alert');

    // ako vec postoji neki alert, on ce ga obrisati i napraviti novi
    if (alert) {
      alert.remove();
    }
  }
}
