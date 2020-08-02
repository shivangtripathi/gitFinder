import React,{useState,useEffect} from 'react';
import tachyons from 'tachyons';
require('dotenv').config();

const client_id =process.env.REACT_APP_CLIENT_ID;
const secret_key =process.env.REACT_APP_SECRET_KEY ;
const url = 'https://api.github.com/users/'



function App() {
  const [search,setSearch] =  useState('')
  const [user,setUser] = useState('')

  useEffect(() => {
    const alert= document.getElementById('alert');
    const card = document.getElementById('profile');
    card.innerHTML = '';
    alert.innerHTML = '';
    async function fetch_data(){

      
            if(user!==''){
              
              const response = await fetch(url+String(user)+`?client_id=${client_id}&client_secret=${secret_key}`)
              if(response.statusText==='OK')
             { const data = await response.json();
              card.innerHTML = `
              <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
               <div class="tc">
              <img src=${data.avatar_url} class="br-100 h3 w3 dib" title='' />
              <h1  class="f3 user_header">${data.login}</h1>
              <hr class="mw5 bb bw1 b--black-10" />
              <h5 class="lh-copy measure center f6 black-70"> ${data.bio} </h5>
            </div>
            <h5 class="lh-copy measure center f5 black">Public Repos : ${data.public_repos} </h5>
            <h5 class="lh-copy measure center f5 black-70"> Followers : ${data.followers} </h5>
            <h5 class="lh-copy measure center f5 black-70"> Following : ${data.following} </h5>
            <h5 class=" lh-copy measure center f5 black-70"> ${data.bio} </h5>
            <a class="lh-copy center btn-know-more" href=${data.html_url}> Visit Profile  </a>
          </article>`
      }
    else if(response.statusText==='Not Found') {
      alert.innerHTML=`
      <div class="flex items-center justify-center pa2 white">
      <span class="lh-title ml3 f3">User not found</span>
      </div>
`;
    }
  else{
    alert.innerHTML=`
    <div class="flex items-center justify-center pa2 white">
    <span class="lh-title ml3 f2">Please check you internet connection!</span>
    </div>
`;
  }}
      else{
        card.innerHTML='';
      }
    }
    fetch_data();
  }, [user])



  return (
    <>
    <div className="App_heading">
     <h1>Github Finder</h1>
    </div>
    <div id='alert'></div>
        <div className="pa4-l">
          <form className=" mw7 center pa4 br2-ns ">
            <fieldset className="cf bn ma0 pa0">
              <div className="cf">
                <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Enter username" type="text" name="username" id="username" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Search" onClick={(e)=>{
                  e.preventDefault();
                  setUser(search)}}/>
              </div>
            </fieldset>
          </form>
    </div>
      <div id='profile'></div>

    </>
  );
}

export default App;
