const apiurl='https://api.github.com/users/'
const main=document.getElementById('main')
const form=document.getElementById('form')
const search=document.getElementById('search')

async function getuser(username)
  {
    try{
        const {data} = await axios(apiurl +username)

        createusercard(data)
    }
    catch(err){
        console.log(err)
    }

}

function createusercard(user){
    const cardhtml=`<div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="userinfo">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers} <strong>Followers </strong></li>
            <li>${user.following} <strong>Following </strong></li>
            <li>${user.public_repos}<strong>Repos </strong></li>

        </ul>
        <div class="repos">
            <a href="#" class="repo">Repo 1</a>
            <a href="#" class="repo">Repo 2</a>
            <a href="#" class="repo">Repo 3</a>
        </div>
    </div>
</div>`


    main.innerHTML=cardhtml
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const user = search.value;
    if(user){
        getuser(user)
        search.value='';
    }
})