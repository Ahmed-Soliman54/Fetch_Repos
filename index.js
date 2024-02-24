let Text = document.getElementById("Text");
let Button = document.querySelector(".Fetch-Container .Inputs span");
let TextDiv = document.querySelector(".Data-Show span");
let theDataShow = document.querySelector(".Data-Show")


Button.onclick=()=>{
    getRepos()
}

function getRepos(){
if(Text.value==""){
    TextDiv.innerHTML ="Enter The Reposatory";
    TextDiv.style.cssText="font-size:20px; color:#ff5722;font-weight:Bold"

}else{
    fetch(`https:api.github.com/users/${Text.value}/repos`)
    .then((result)=>{
        let DataResult = result.json();
        return DataResult ;
    }).then((result)=>{
        TextDiv.innerHTML="";
        for(let i = 0 ; i<result.length ; i++){
            console.log(result[i].name)
            let div = document.createElement("div");
            let Text = document.createTextNode(result[i].name)
            div.appendChild(Text);
            theDataShow.append(div)
            let ReposDiv = document.createElement("div");
            div.appendChild(ReposDiv);
            let Url = document.createElement("a");
            Url.innerHTML="Visit";
            Url.href=`https://github.com/${document.getElementById("Text").value}/${result[i].name}`;
            Url.setAttribute("target","_blank")
            ReposDiv.appendChild(Url);
            let stars = document.createElement("span");
            let starscount = document.createTextNode(`Stars ${result[i].stargazers_count}`)
            stars.append(starscount);
            ReposDiv.append(stars)
            div.className="DivBox";
            ReposDiv.className="Rep"
        }
    }
    
    )    
}

    

}





// "https://api.github.com/users/ElzeroWebSchool/repos"