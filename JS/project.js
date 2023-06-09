function init(){
    window.addEventListener("hashchange",function(){
        console.log(location.hash)
    })

    function loadPage(){
        const projectPage = document.querySelector('.project-temp')
        fetch("/project/index.html")
        .then(function(response){
return response.text()
        })
        .then(function(page){

        })
    }
    loadPage()
}
init()