class Github{
    constructor(){
        this.client_id = 'f4e08be55c7ff8809fc7';
        this.client_secret = '2203bc2757b9904073e097cd8e46c2d85af80b77';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user){
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }

    
}