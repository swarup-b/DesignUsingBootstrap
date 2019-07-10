    /**
 * File : validation.js
 * Path : E:\ProjectWork1\BootStrapDemo\js\validation.js
 * Purpose : It will validate the form using jquery validation plugin.
 * Created : 7-july-2017
 * Author : Swarup.
 * Comments :
 */



 // add the rule here

 $(document).ready(function() {
  $('#f1').validate({
    rules:{  
     name:'required',
     email:{  
      required:true,
      email:true
    },
    password:{  
      required:true,
      minlength:5
    },
    address:'required',
    'lang[]': {
      required: true,
      maxlength: 2
    },
    
    messages:{  
     name:'required',
     email:'Invalid email',
     address:'required',
     password:{  
      minlength:'min 5 characters'
    }  
  } 
  
} 

});
});