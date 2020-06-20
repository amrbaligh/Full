$(document).ready(function(){

    $(".toggler-container").on("click",function(){
       console.log($(".side-elements").width())
       if($(".side-elements").width()>0){
            console.log("true");
            $(".side-elements").width(0);
            $(".side-element").css("display","none");
       }
       else{
        $(".side-elements").css("width","80vw");
        $(".side-element").css("display","block");
       }
    });
  });