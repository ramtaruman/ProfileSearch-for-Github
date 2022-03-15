const apiurl='https://api.github.com/users/'
const main=document.getElementById('main')
const form=document.getElementById('form')
const search=document.getElementById('search')

async function getuser(username)
  {
    try{
        const {data} = await axios(apiurl +username)

        createusercard(data)
        addrepostocard(username)
    }
    catch(err){
        if(err.response.status==404) createerrorcard('Not found')
    }

}

async function getrepos(username)
{
    {
        try{
            const {data} = await axios(apiurl +username +'/repos')

            addrepostocard(data)
        }
        catch(err){
            if(err.response.status==404) createerrorcard('Not found')
        }

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
        <div id="repos" class="repos">
        </div>
    </div>
</div>`


    main.innerHTML=cardhtml
}

function createerrorcard(msg)
{
    const cardhtml=`<div class="card">
    <h1>${msg}</h1>
    </div>`
    main.innerHTML=cardhtml
}


function addrepostocard(repos)
{
    const reposel=document.getElementById('repos')
    repos
        .slice(0,10)
        .forEach(repo => {
            const repolink=document.createElement('a')
            repolink.classList.add('repo')
            repolink.href=repo.html_url;
            repolink.target='_blank'
            repolink.innerText=repo.name
            reposel.appendChild(repolink)
        })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const user = search.value;
    if(user){
        getuser(user)
        search.value='';
    }
})