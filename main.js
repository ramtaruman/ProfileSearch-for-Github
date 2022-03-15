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
        <img src="https://img.wattpad.com/e056b4a8161b61a28317f1532b26e26d095c3555/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5377374d65316164394c6b4a58673d3d2d3934303536323235352e313632643539633863656333336639323237313536313731343031392e6a7067?s=fit&w=720&h=720" alt="" class="avatar">
    </div>
    <div class="userinfo">
        <h2>JohnDoe</h2>
        <p>Bruh moment and sis momentBruh moment and sis momentBruh moment and sis momentBruh moment and sis momentBruh moment and sis momentBruh moment and sis moment</p>
        <ul>
            <li>300 <strong>Followers</strong></li>
            <li>100 <strong>Following</strong></li>
            <li>30 <strong>Repos</strong></li>

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