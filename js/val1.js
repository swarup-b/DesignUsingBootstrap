/**
 * File : val1.js
 * Path : E:\ProjectWork1\BootStrapDemo\js\val1.js
 * Purpose : It will add formdata and also check email uniqueness.
 * Created : 7-july-2017
 * Author : Swarup.
 * Comments :
 */
/**
 * This is a  function.
 *
 * @param {} n - not take any param
 * @return {} not return value
 *  
 * 
 *
 * append the form data in table
 */
 function updateTable() {

/**
**
* @type {String}
*/
var tr = "<tr>";
/**
**
* @type {String array}
*/

var x = $("form").serializeArray();
for(var i=0;i<x.length;i++){
 if(x[i].value.length == 0){
    return false;
}else{
    if(x[i].value=="Select"){
       $('#selectSpan').html("please select country");
       $('#selectSpan').css('color','red')
       return false;
   }
}
}
//check the email whether present in table or not
var checkUser = checkEmail(x);
if (checkUser == true) {
    $('#emailSpan').show();
    $('#emailSpan').text('Email alredy exist');
    $('#emailSpan').css('color','red');
    return false;
} else {
    $('#emailSpan').hide();
	var y=sortFormData(x);
    $.each(x, function(i, field) {
        tr = tr + "<td>" + field.value + "</td>"

    });
}
/**
**
* @type {String}
*/
var editBtn="<td><button type=\"button\"class=\"btn btn-primary a-btn-slide-text edit\"> <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span><span><strong></strong></span></button>";
var deleteBtn="<button type=\"button\" class=\"btn btn-labeled btn-danger delete\"><span class=\"btn-label\"><i class=\"glyphicon glyphicon-trash\"></i></span></button></td></tr>";

        $('#tbl')   .append(tr +editBtn+ deleteBtn);               //Adding the form data to the table
       $("#myform").trigger('reset');
        return false;
    }




 $(document).ready(function() {
	 var rowObj=holdTableInstanse();
    /**
 * This is a button click function.
 *
 * @param {} n - not take any param
 * @return {} not return value
 *  
 * 
 *
 * put the edit row data of table
 */


 //Editing the form data
    $("#tbl tbody").on("click",".edit",function(){ 
        $('#submitBtn').hide();
        $('#updateBtn').show();
        var data=$(this).closest('tr');
        setTheFormData(data);
		rowObj.setRowInstanse(data);
        //setRowObject(data);

    });
    /**
 * This is a button click function.
 *
 * @param {} n - not take any param
 * @return {} not return value
 *  
 * 
 *
 * delete the selected row
 */
 $("#tbl tbody").on("click",".delete",function(){ 
            /**
**
* @type {object}
*/
var data=$(this).closest('tr');
if(confirm("Are you sure to delete the row ?")){
$(this).closest('tr').remove();
}
else{
	return false;
}
});

    /**
 * This is a button click function.
 *
 * @param {} n - not take any param
 * @return {} not return value
 *  
 * 
 *
 * delete the selected row
 */
 $("#update").on("click",function(){ 
               /**
**
* @type {object}
*/
var data=rowObj.getRowInstanse();
               /**
**
* @type {string array}
*/
var arr=$("form").serializeArray();

$(data.find('td:eq(0)')).html(arr[0].value);
$(data.find('td:eq(1)')).html(arr[1].value);
$(data.find('td:eq(2)')).html(arr[2].value);
$(data.find('td:eq(3)')).html(arr[3].value);
$(data.find('td:eq(4)')).html(arr[4].value);
$(data.find('td:eq(5)')).html(arr[5].value);
$(data.find('td:eq(6)')).html(arr[6].value);

return false; 
});
});
/**
 * This is a function.
 *
 * @param {Array} n - A string type array param
 * @return {string} A good string
 *
 * @example
 *
 *     foo(a[])
 */
//checking email for uniqueness
function checkEmail(x) {
    /**
**
* @type {object}
*/
var table = $('#tbl tr');
    /**
**
* @type {String}
*/
var result;
outerloop: for (var i = 0; i < table.length; i++) {
    for (var j = 0; j < table[i].children.length; j++) {
        if (table[i].children[j].innerHTML != x[1].value) {
            result = false;
        } else {
            result = true;
            break outerloop;
        }

    }
}

return result;
}

/**
 * This is a function.
 *
 * @param {Array} n - A string type array param
 * @return {} Return nothing
 *
 * @example
 *
 *     foo(a[])
 */
 function setTheFormData(data){
   $('#nameval').val(data.find('td:eq(0)').text());          
   $('#email1').val(data.find('td:eq(1)').text());
   $('#password').val(data.find('td:eq(2)').text());
/**
**
* @type {String}
*/
var gender=data.find('td:eq(3)').text();
$("input[name='gndr']").prop("checked", true).val(gender);
     /**
**
* @type {String}
*/
var lannguage=data.find('td:eq(4)').text().split(",");
     /**
**
* @type {object}
*/
var languageDtls=$("[name='lang']");
$.each(languageDtls, function(i, langData){
   for(var j=0;j<lannguage.length;j++){
    var check=langData.value==lannguage[j] ?langData.checked=true:false ;    
}
})
$('#country').val(data.find('td:eq(5)').text());
$('#address').val(data.find('td:eq(6)').text());

}
/**
 * This is a function.
 *
 * @param {} n - take no param
 * @return {} Return object
 *
 * @example
 *
 *     foo()
 *   reveled module 
 */
function holdTableInstanse(){
	     /**
**
* @type {object}  variable 
*/
	var rowInstanse;
	function setRowInstanse(rowInstanse){
		this.rowInstanse=rowInstanse;
	}
	function getRowInstanse(){
		return this.rowInstanse;
	}
	var rowObj={
		setRowInstanse:setRowInstanse,
		getRowInstanse:getRowInstanse
	}
	return rowObj;
}

function sortFormData(x){
	var laguage="",arr=[];
	$.each(x,function(i,el){
		if(x[i].name==='lang[]') language=language+" "+el.value;
		else arr.push(el.value);
	})
	if(language!=="") arr.push(language);
	return arr;
}

