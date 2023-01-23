//download page
document.getElementById("download-button").addEventListener("click", function(){
    var index = document.getElementById("result").innerHTML;
    var data = new Blob([index], { type: 'text/html' });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(data);
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
});

//delete selected element
let delmode = false
let delbtn = document.getElementById('delelem')
function lookelem() {
    if (delmode == true) {
        delbtn.style.border = ''
        delmode = false
    } else{
    delmode = true
    delbtn.style.border = '2px solid green'}
}
var index = document.getElementById("result");
const elempressed = e => { 
    if(delmode == true){
        e.target.remove()
        delbtn.style.border = ''
        delmode = false
    }
  }
index.addEventListener("dblclick", elempressed);

// sort elements

var sortable = Sortable.create(index)
var state = sortable.option("disabled"); // get
sortable.option("disabled", !state)
let sortbtn = document.getElementById('sortelem')
function sortelems() {
    if(sortable.option("disabled") == true){
        sortbtn.style.border = '2px solid green'
        sortable.option("disabled", state); // set
    }
    else{
        sortbtn.style.border = ''
        sortable.option("disabled", !state); // set
    }
}