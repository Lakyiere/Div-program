// function init(){
//     window.addEventListener("hashchange",function(){
//         console.log(location.hash)
//     })

//     function loadPage(){
//         const projectPage = document.querySelector('.project-temp')
//         fetch("/project/index.html")
//         .then(function(response){
// return response.text()
//         })
//         .then(function(page){

//         })
//     }
//     loadPage()
// }
// init()
function init() {
  window.addEventListener("hashchange", function () {
    console.log(location.hash);
    if (location.hash) {
      loadPage(location.hash.slice(1) + ".html");
    } else {
      loadPage("index.html");
    }
  });

  function loadPage(projectFile) {
    const projectPage = document.querySelector(".project-temp");
    fetch(`/projects/${projectFile}`)
      .then(function (response) {
        return response.text();
      })
      .then(function (page) {
        projectPage.innerHTML = page;
        switch (projectFile) {
          case "classAttendance.html":
            classAttendance();
            break;
          case "calc.html":
            calc();
            break;
          case "sum-of-numbers.html":
            sum();
            break;
          case "usd-cedi-converter.html":
            usd();
            break;
          case "toDoList.html":
            toDo();
            break;
          case "invoiceGenerator.html":
            invoiceGenerator();
            break;
        }
      });
  }
  loadPage("index.html");
}
init();