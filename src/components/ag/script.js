//download page
document.getElementById("button--download").addEventListener("click", function(){
    var index = document.getElementById("site");
    const styles = document.querySelectorAll("link[rel='stylesheet']")
    const newElement = document.createElement("div");
    newElement.innerHTML = index.innerHTML;
    
    const styleElement = document.createElement("style");
    const promises = [];
    for (const style of styles) {
        promises.push(fetch(style.getAttribute("href")));
    }
    
    Promise.all(promises)
    .then((responses) => {
        return Promise.all(responses.map((response) => {
            return response.text();
        }));
    })
    .then((texts) => {
        let styleContent = "";
        for (const text of texts) {
            styleContent += text;
        }
        styleElement.innerHTML = styleContent;
        newElement.appendChild(styleElement);
        var data = new Blob([newElement.outerHTML], { type: 'text/html' });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(data);
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
    });
});

//delete selected element
let delmode = false
let delbtn = document.getElementById('button--delete-component')
function lookelem() {
    if (delmode == true) {
        delbtn.style.border = ''
        delmode = false
    } else{
    delmode = true
    delbtn.style.border = '2px solid green'}
}
//delbtn.addEventListener('click', lookelem())
var index = document.getElementById("site");
const elempressed = e => { 
    if(delmode == true && e.target.id !== 'site'){
        let currentNode = e.target;
        while (currentNode.parentNode.id !== 'site') {
            currentNode = currentNode.parentNode;
        }
        currentNode.remove();
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