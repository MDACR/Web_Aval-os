'use strict';

/* import { reset } from "nodemon"; */


$('.carousel').carousel()




$('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top-100;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
  });





//NavBar
  

$(window).scroll(function() {

  if ($(this).scrollTop() >1){  
    $('.navbar-light').addClass("expand");
    $('.imgeL').addClass("ext");
  /*   $('.imgeL').removeClass("imgeL.largeI"); */
}
else{
    $('.navbar-light').removeClass("expand");
    $('.imgeL').removeClass("ext");
  
    
} 



});


let registrar_comentario = (pnombre, pcorreo, pcomentario) => {
  let request = $.ajax({
    url: "http://localhost:4000/registrar_comentario",
    method: "POST",
    data: {
      name: pnombre,
      email: pcorreo,
      
      comentario: pcomentario
    },
    dataType: "json",
    /* contentType: 'application/x-www-form-urlencoded; charset=UTF-8' */
  });

 /*  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El comentario fue enviado',
      text: 'Nos comunicaremos con usted tan pronto como sea posible'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El comentario no pude ser enviado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  }); */
};





$('form.contactForm').submit(function(){

  const input_nombre = document.querySelector('#name');
  const input_correo = document.querySelector('#email');

  const input_comentario = document.querySelector('#comentario');


    var f = $(this).find('.form-group'), 
    ferror = false, 
    emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function(){ // run all inputs

        var i = $(this); // current input
        var rule = i.attr('data-rule');

        console.log(rule);

        if( rule !== undefined ){
        var ierror=false; // error flag for current input
        var pos = rule.indexOf( ':', 0 );
        console.log(pos);
        if( pos >= 0 ){
            var exp = rule.substr( pos+1, rule.length );
            console.log(exp);
            rule = rule.substr(0, pos);
            console.log(rule);
        }else{
            rule = rule.substr( pos+1, rule.length );
        }
        
        switch( rule ){
            case 'required':
            if( i.val()==='' ){ ferror=ierror=true; }
            break;
            
            case 'minlen':
            if( i.val().length<parseInt(exp) ){ ferror=ierror=true; }
            break;

            case 'email':
            if( !emailExp.test(i.val()) ){ ferror=ierror=true; }
            break;

            case 'checked':
            if( !i.attr('checked') ){ ferror=ierror=true; }
            break;
            
            case 'regexp':
            exp = new RegExp(exp);
            if( !exp.test(i.val()) ){ ferror=ierror=true; }
            break;
        }
            i.next('.validation').html( ( ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
        }
       });
    f.children('textarea').each(function(){ // run all inputs

        var i = $(this); // current input
        var rule = i.attr('data-rule');

        if( rule !== undefined ){
        var ierror=false; // error flag for current input
        var pos = rule.indexOf( ':', 0 );
        if( pos >= 0 ){
            var exp = rule.substr( pos+1, rule.length );
            rule = rule.substr(0, pos);
        }else{
            rule = rule.substr( pos+1, rule.length );
        }
        
        switch( rule ){
            case 'required':
            if( i.val()==='' ){ ferror=ierror=true; }
            break;
            
            case 'minlen':
            if( i.val().length<parseInt(exp) ){ ferror=ierror=true; }
            break;
        }
            i.next('.validation').html( ( ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
        }
    });
      if( ferror ) return false; 

   

         else {


        

          let nombre = input_nombre.value;
          let correo = input_correo.value;
          
          let comentario = input_comentario.value;


console.log(nombre,correo,comentario);

        registrar_comentario(nombre,correo,comentario); 


        let timerIntervall
        Swal.fire({
          title: 'Formulario enviado',
          html: 'Nos pondremos en contacto con ud',
          timer: 2000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading()
            timerIntervall = setInterval(() => {
              const content = Swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          onClose: () => {
            clearInterval(timerIntervall)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        }   
        
           
        
        
        
        )





  $('.form-control').val(""); 






         };


    return false;
});




 //Divs animated



function scrollWaypointInit( items, trigger ) {
    items.each( function() {
      var element = $(this),
          osAnimationClass = element.data("animation"),
          osAnimationDelay = element.attr('data-animation-delay');
   
      element.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
      });
   
      var trigger = ( trigger ) ? trigger : element;
   
      trigger.waypoint(function() {
          element.addClass('animated').addClass(osAnimationClass);
      },{
         // triggerOnce: true,
          offset: '80%'
      });
    });
  }
  
  //Call the init
  
  $(document).ready(function(){
  
  scrollWaypointInit( $('.animateMe') );
  
  });


  
  $('#nPisos').hide();

  $("#tipoInm").change(function() {
   

    if ($(this).val() == "viv"|| $(this).val() == "edi"  ) {
      $('#nPisos').show();
    /*   $('#otherField').attr('required', '');
      $('#otherField').attr('data-error', 'This field is required.'); */
    } else {
      $('#nPisos').hide();
     /*  $('#otherField').removeAttr('required');
      $('#otherField').removeAttr('data-error'); */
    }
  });





  $("#seeAnotherField").change(function() {
    if ($(this).val() == "yes") {
      $('#otherFieldDiv').show();
      $('#otherField').attr('required', '');
      $('#otherField').attr('data-error', 'This field is required.');
    } else {
      $('#otherFieldDiv').hide();
      $('#otherField').removeAttr('required');
      $('#otherField').removeAttr('data-error');
    }
  });
  $("#seeAnotherField").trigger("change");
  
  $("#seeAnotherFieldGroup").change(function() {
    if ($(this).val() == "yes") {
      $('#otherFieldGroupDiv').show();
      $('#otherField1').attr('required', '');
      $('#otherField1').attr('data-error', 'This field is required.');
      $('#otherField2').attr('required', '');
      $('#otherField2').attr('data-error', 'This field is required.');
    } else {
      $('#otherFieldGroupDiv').hide();
      $('#otherField1').removeAttr('required');
      $('#otherField1').removeAttr('data-error');
      $('#otherField2').removeAttr('required');
      $('#otherField2').removeAttr('data-error');
    }
  });
  $("#seeAnotherFieldGroup").trigger("change");
  




  /* Whatsapp Chat Widget by www.bloggermix.com */







$(document).on("click", "#send-it", function() {




  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://api.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=50688184364" + e + f;
    window.open(g, "_blank");
  }
}),
  $(document).on("click", ".informasi", function() {
    (document.getElementById("get-number").innerHTML = $(this)
      .children(".my-number")
      .text()),
      $(".start-chat,.get-new")
        .addClass("show")
        .removeClass("hide"),
      $(".home-chat,.head-home")
        .addClass("hide")
        .removeClass("show"),
      (document.getElementById("get-nama").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-nama")
        .text()),
      (document.getElementById("get-label").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-label")
        .text());
  }),
  $(document).on("click", ".close-chat", function() {
    $("#whatsapp-chat")
      .addClass("hide")
      .removeClass("show");
  }),
  $(document).on("click", ".blantershow-chat", function() {

    btn.removeClass('show');
    $("#whatsapp-chat")
      .addClass("show")
      .removeClass("hide");
  });



/* Back to top button */


  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




//Imgupload

$(".imgAdd").click(function(){
  $(this).closest(".row").find('.imgAdd').before('<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
});




$(document).on("click", "i.del" , function() {
	$(this).parent().remove();
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
     e.target.result
        
    };
    reader.readAsDataURL(input.files[0]);
  }
}




$ ( function() {
  $(document).on("change",".uploadFile", async function()
  {







    
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

      const imageFile = event.target.files[0];
      console.log(imageFile);

      if (/^image/.test( imageFile.type)){ // only image file
          var reader = new FileReader(); // instance of the FileReader
          

 

          


   console.log(imageFile.size)

 const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true
}
try {
  const compressedFile = await imageCompression(imageFile, options);

  console.log(compressedFile);
  console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
  console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

  reader.readAsDataURL(compressedFile); // read the local file

  reader.onloadend = function(){ // set image data as background of div
      //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
  }
  

  /* await uploadToServer(compressedFile);  */// write your own logic
} catch (error) {
  console.log(error);
} 


      }
    
  });
});






 /* formulario cotizar*/

 const slt_tipo = document.querySelector('#tipoInm');
 const input_area = document.querySelector('#areaInm');
 const input_pisos = document.querySelector('#nPisos');
 const slt_provincia = document.querySelector('#slt_provincias');
 const slt_cantones = document.querySelector('#slt_cantones');
 const slt_distritos = document.querySelector('#slt_distritos');
 const input_comentarios = document.querySelector('#comment');

 const input_nombre = document.querySelector('#UserName');

 const input_email = document.querySelector('#email');

 const input_telefono = document.querySelector('#telephone');

 const input_foto = document.querySelector('#foto');


        
    /*     let tipo = slt_tipo.selectedOptions[0].textContent;
        let area = input_area.value;
        let pisos = input_pisos.value;
        let provincia = slt_provincia.selectedOptions[0].textContent;
        let canton = slt_cantones.selectedOptions[0].textContent;

        let distrito = slt_cantones.selectedOptions[0].textContent;
        let comentario = input_comentarios.value;
        let nombre = input_nombre.value;
        let email = input_nombre.value;
        let telefono = input_telefono.value; */



 
    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
      $(this).on('blur', function(){
          if($(this).val().trim() != "") {
              $(this).addClass('has-val');
          }
          else {
              $(this).removeClass('has-val');
          }
      })    
  })

  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');




  




 let registrar_foto = (purl) => {

  let fotosUrl ;
  let request = $.ajax({
    url: "http://localhost:4000/registrarPhotos",
    method: "POST",
    data: {
     
      imageURL: purl
      
      
    },
    
    dataType: "json",
    async : false ,
    success : function (response) {
    
     fotosUrl= response;

    /*  console.log(fotosUrl); */
}
    
    /* contentType: 'application/x-www-form-urlencoded; charset=UTF-8' */
  });

 /*  let resp = request.;
  console.log(resp); */

/*   request.done(function (res) {

    console.log("estamos bien");
    fotosUrl = res;

    console.log(fotosUrl);
  
}); */

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El comentario no pude ser enviado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });


  return fotosUrl;

};



let registrar_foto_Urls = (purl) => {
  let request = $.ajax({
    url: "http://localhost:4000/registrarPhotosUrl",
    method: "GET",
    data: {
     
      imageURL: purl
      
      
    },
    dataType: "json",
    /* contentType: 'application/x-www-form-urlencoded; charset=UTF-8' */
  });

/*   request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El comentario fue enviado',
      text: 'Nos comunicaremos con usted tan pronto como sea posible'
    });
  }); */

/*   request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El comentario no pude ser enviado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  }); */
};


function objToString (obj) {
  var str = '';
  for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
          str += p + '::' + obj[p] + '\n';
      }
  }
  return str;
}



let comprimir = ()=>{


  console.log(fotosV.join());




  
}




let registrar_Inmueble = (ptipo,parea,ppisos,pprovincia,pcanton,pdistrito,pcomentario,pnombre,pemail,ptelefono,pfotos) => {
  let request = $.ajax({
    url: "http://localhost:4000/registrarInmueble",
    method: "POST",
    data: {
      tipo: ptipo,
      area : parea,
      pisos: ppisos,
      
      provincia: pprovincia,
      canton: pcanton,
      distrito: pdistrito,
      comentario: pcomentario,
      nombre: pnombre,
      email : pemail,
      telefono : ptelefono,
      fotos : pfotos



    },
    dataType: "json",
    /* contentType: 'application/x-www-form-urlencoded; charset=UTF-8' */
  });

  request.done(function (msg) {
    let timerInterval
    Swal.fire({
      title: 'Formulario enviado',
      html: 'Estaremos comunicandonos con ud',
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  });

/*   request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El comentario no pude ser enviado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  }); */
};


let inputsValidate = () => {




      var check = true;
      

      for(var i=0; i<input.length; i++) {
          if(validate(input[i]) == false){
              showValidate(input[i]);
              check=false;
          } else {
           


            /* check=true; */
            




   /* subir fotos */


   /* subir fotos */


            
        
        
       


          } 
      }




      return check;
     
     


    }




  $('.contact100-form-btn').click(async function(){


    var jub    = document.querySelectorAll('input[type=file]');

 


  

   console.log(jub.length);


   var fotosV = [];


   console.log(fotosV.length);
  
  /*  var imaFiles = jub.files[0];

   console.log(imaFiles); */



   /* while ( fotosV.length < jub.length) 
   {  */

    for(var i=0; i<jub.length ; i++){
 
 
     var imageFile = jub[i].files[0];

     console.log(imageFile);

     



     
 
 var cuen =0;
 
     try {

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      }

       const compressedFile = await imageCompression(imageFile, options);
     
       console.log(compressedFile);
       console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
       console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
       var reader = new FileReader(); 
       reader.readAsDataURL(compressedFile); // read the local file
     
       reader.onloadend =   function () {
        




  

         let prie =   registrar_foto(this.result);  

            let conv = objToString(prie);

           

         
            console.log(conv);
           

           if(conv != null){


   while(fotosV.length < jub.length){


  

          
            fotosV.push(conv);

          }

          };

         /*  } */
            /* fotosV.push(cuen++);
    */
       }
       
       console.log(typeof conv);

 

      
       
     } catch (error) {
       console.log(error);
     } 
 
 
 
 
    

    

 /*  }  */

}

/*   if (fotosV.length >1){


    delete fotosV[0];



  }; */


    console.log(fotosV.join());


    let fotos = fotosV.join();

    console.log(typeof fotosV);

    console.log(fotosV);






    var strArray  =  objToString(fotosV);

    var strArray2  =  toString(fotosV);

    console.log(strArray); 
    console.log(strArray2 ); 
    


var valid = inputsValidate();

console.log(valid);


switch(valid) {
  case true:
    let tipo = slt_tipo.selectedOptions[0].textContent;
    let area = input_area.value;
    let pisos = input_pisos.value;
    let provincia = slt_provincia.selectedOptions[0].textContent;
    let canton = slt_cantones.selectedOptions[0].textContent;

    let distrito = slt_cantones.selectedOptions[0].textContent;
    let comentario = input_comentarios.value;

    let foto = input_foto.value;
    let nombre = input_nombre.value;
    let email = input_email.value;
    let telefono = input_telefono.value;


    console.log(tipo,area,pisos,provincia,canton,distrito,comentario,nombre,email,telefono,fotos);

    registrar_Inmueble(tipo,area,pisos,provincia,canton,distrito,comentario,nombre,email,telefono,fotos);






    
    let timerIntervall
    Swal.fire({
      title: 'Formulario enviado',
      html: 'Nos pondremos en contacto con ud',
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerIntervall = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerIntervall)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    }     )



    $('.form-control').val(""); 














    
    break;
  case false:
    


    
    let timerInterval
    Swal.fire({
      title: 'Algun campo requerido está sin llenar',
      html: '',
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    }     )





    break;
  default:
    // code block
}




/* if (valid=true){




 

    
  }else if (valid=false) {
console.log("es falso");
  }; */



  });






  $('.validate-form .input100').each(function(){
      $(this).focus(function(){
         hideValidate(this);
      });
  });

  function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
              return false;
          }
      }
      else {
          if($(input).val().trim() == ''){
              return false;
          }
      }
  }

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }
  
