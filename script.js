document.querySelector("button").addEventListener("click",function(){
    fetch("https://random.dog/woof.json")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        myimg.src=data["url"];
    });
});