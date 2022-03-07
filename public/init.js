$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  $(".categoryLink").click(function (e) { 
    e.preventDefault();
    $(`.endpoint`).addClass("hidden")
    $(`.endpoint[category=${$(e.target).attr("categoryname")}]`).removeClass("hidden")
})

$(".endpointLink").click(function (e) { 
    e.preventDefault();
    console.log($(e.target).attr("linkname"));
    $(`.endpoint`).addClass("hidden")
    $(`.endpoint[endpoint=${$(e.target).attr("linkname")}]`).removeClass("hidden")
})

$("#allEndpoints").click(function (e) { 
    e.preventDefault();
    $(`.endpoint`).removeClass("hidden")
});