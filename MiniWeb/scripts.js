var span = document.getElementsByTagName('span');
console.log(span)
for (var i = 0; i < span.length; i++) {
    span[i].style.cursor = "pointer";
    
}

window.onclick = e => {
    console.log(e.target.id);
    switch(e.target.id) {
        case "phone":
            window.open("tel:+34902112233");
          break;
        case "mail":
            window.location.href = "mailto:aim.analyticssl@gmail.com?subject=Consulta";
          break;
        case "address":
            open('https://www.google.com/maps/place/Av.+del+General+Per%C3%B3n,+28,+28020+Madrid,+Espa%C3%B1a/@40.452051,-3.6970757,17z/data=!3m1!4b1!4m5!3m4!1s0xd4228fd0e4f30b9:0x3fc2585f4b7282f7!8m2!3d40.452051!4d-3.694887')
        default:
          // code block
      }
    
}


var logoElement = $('footer .logo');

$(window).scroll(function() {
  
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     
       $(logoElement).addClass('show');
     
   } else if($(logoElement).hasClass('show') && $(window).scrollTop() + $(window).height() > $(document).height() - 150) {
     
      $(logoElement).removeClass('show');
     
   }
});