var text = document.getElementById('Text')
var arr = [
    ["T","H","I","S"],
    ["I","S"],
    ["T","Y","P","I","N","G"],
    ["E","F","F","E","C","T",]
 ]
function fname(arr) {
   var i = 0           //Number of Text
   var arrvalu = 0     //Number Of Arrays 
   setInterval(()=>{   //Call function After Few Seconds
    if (i < arr[arrvalu].length) {
        text.innerHTML += arr[arrvalu][i] //show words one by one
        i++                               //increased Text valu 
    } else if (arrvalu < arr.length-1) {
        text.innerHTML = ""               //Clear Provous Text
        arrvalu++                         //ChangeNext  Arrey if Available 
        i = 0                             //Start Typing 
    } else {
        text.innerHTML = ""               //Clear Provous Text
        i = 0                               
        arrvalu = 0                       //When Next Arreay Is not Available then restart typing 
    }},300);
  }
fname(arr)