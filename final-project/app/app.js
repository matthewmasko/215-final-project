function initListeners(){
    $("a").click(function(e){
        let btnID=e.currentTarget.id;
   MODEL.changePageContent(btnID);
    });
}

$(document).ready(function(){
    initListeners();
    MODEL.changePageContent("home");
});