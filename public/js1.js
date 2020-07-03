// JavaScript source code



var info = document.getElementById("info")

info.onclick = getname;



function getname() {

    console.log("getname")
    var text = document.getElementById("value").value
    sendname(text)
}

async function sendname(ref) {


    var data = {"name": ref,"Date":"today" };
    var route = "/name";


        const options = {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data),

        };

        const response =  await fetch(route, options);
        var resdata = await response.json();
        console.log(resdata)


    document.getElementById("value").value = resdata.result;
    

}


//function getname1() {

//    console.log("getname")
//    document.getElementById("value").value= "blue"
//}