// JavaScript source code



var info = document.getElementById("info")

info.onclick = getname;



function getname() {

    console.log("getname")
    var text = document.getElementById("value").value
    sendname(text)
}

function sendname(ref) {


    var data = {"name": ref,"Date":"today" };
    var route = "/name";


        const options = {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data),

        };

        const response =  fetch(route, options);
        //return resdata = await response.json();

    

}


//function getname1() {

//    console.log("getname")
//    document.getElementById("value").value= "blue"
//}