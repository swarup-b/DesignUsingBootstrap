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
  jQuery.validator.addMethod('selectTag', function (value, element, param) {
        return (param != value);
    }, 'this field is required');

  $('#f1').validate({
rules:{  
   name:'required',
   address:'required',
   country:{  
      selectTag:"Select"
   },
   password:{  
      required:true,
      minlength:3
   },
   //'lang[]':{  
    //  required:true
  // },
   email:{
    required:true,
    email:true
   },
   errorPlacement: function(error, element) {
    if ( element.is(":radio") ) {
        error.prependTo( element.parent() );
    }
    else { // This is the default behavior of the script
        error.insertAfter( element );
    }
}
}
});
});
