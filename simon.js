var randNumb=Math.floor(Math.random()*4)+0;
// alert(randNumb);
function seqNext(){
     
}

var arr= new Array();
arr.push("red","blue","green","yellow");
// alert(arr);  

var randCol= arr[randNumb]
// alert(randCol);
var mainArr= new Array();
mainArr.push(randCol);
// alert(mainArr);
// mainArr.fadeOut();

var newArr= new Array();
$('.btn').click(function() {
    alert(this.id);

  
  // (".btn").push(newArr); 
    // alert(newArr);
  });



// $('.btn').click(function() {
//     $(green).fadeOut(250).fadeIn(250); 
//   });





$("#green").click(function(){
    alert("YEs");

});
