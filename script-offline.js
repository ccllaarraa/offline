


//go home
  function GoToHomePage(){
    window.location = 'home.html';   
}
    //go to offline page
function GoToOffline(){
    window.location = 'offline.html';   
}

    //go to pdf
    function GoToPdf(){
        window.location = 'offline-access.html';   
    }


var myLilVar =  window.setInterval(isOffline, 500);

function isOffline() {
    if (window.navigator.onLine === false) {
            clearInterval(myLilVar);
            var book = document.getElementById("book");
            document.getElementById("offlineNote").style.display = "none";
            book.classList.add("reborn");
            var anotherVar = window.setInterval(goOnline, 500);
            function goOnline() {
                if (window.navigator.onLine === true) {
                clearInterval(anotherVar);
                GoToOffline();
                }
            }
    };
  }






//   function checkLoad() {
//     console.log('hi');
//     var myVar =  window.setInterval(isOffline, 500000);
//   }


