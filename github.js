class Github {
  constructor() {
    this.clint_id = '5e62aa575b95b769cc18';
    this.clint_secret = '5304d5d4116d696fc3581718c0db107ee930cb24';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clint_id}&client_user=${this.clint_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clint_id}&client_user=${this.clint_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
