// JavaScript source code



var info = document.getElementById("info")
info.onclick = sendname1;

var info2 = document.getElementById("info2")
info2.onclick = sendname;


// function getname() {

  /*  console.log("getname")
    var text = document.getElementById("value").value
    var text2 = document.getElementById("value2").value
    var text3 = document.getElementById("value3").value
    var text4 = document.getElementById("value4").value
    var text5 = document.getElementById("value5").value
    sendname(text,)
    */
//   document.getElementById("value2").value

//}




async function sendname(){

    var route = "/slots";
        const response =  await fetch(route);
        var resdata = await response.json();
        console.log(resdata)

}




async function sendname1() {

    var ref = document.getElementById("value").value
    var ref2 = document.getElementById("value2").value
    var ref3 = document.getElementById("value3").value

//    var data = [{"Car": ref,"Manufacturer":"A" },{"Car": ref,"Manufacturer":"A" },{"Car": ref,"Manufacturer":"A" },{"Car": ref,"Manufacturer":"A" },{"Car": ref,"Manufacturer":"A" }];
    var data =  {"Id" : ref, "phone" : ref2 ,"name" : ref3}

    var route = "/putname";


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


   document.getElementById("value4").value = resdata.result;  
    

}


var table = new Tabulator("#example-table", {
	data:tabledata,           //load row data from array
	layout:"fitColumns",      //fit columns to width of table
	responsiveLayout:"hide",  //hide columns that dont fit on the table
	tooltips:true,            //show tool tips on cells
	addRowPos:"top",          //when adding a new row, add it to the top of the table
	history:true,             //allow undo and redo actions on the table
	pagination:"local",       //paginate the data
	paginationSize:7,         //allow 7 rows per page of data
	movableColumns:true,      //allow column order to be changed
	resizableRows:true,       //allow row order to be changed
	initialSort:[             //set the initial sort order of the data
		{column:"name", dir:"asc"},
	],
	columns:[                 //define the table columns
		{title:"Name", field:"name", editor:"input"},
		{title:"Task Progress", field:"progress", hozAlign:"left", formatter:"progress", editor:true},
		{title:"Gender", field:"gender", width:95, editor:"select", editorParams:{values:["male", "female"]}},
		{title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100, editor:true},
		{title:"Color", field:"col", width:130, editor:"input"},
		{title:"Date Of Birth", field:"dob", width:130, sorter:"date", hozAlign:"center"},
		{title:"Driver", field:"car", width:90,  hozAlign:"center", formatter:"tickCross", sorter:"boolean", editor:true},
	],
});



//function getname1() {

//    console.log("getname")
//    document.getElementById("value").value= "blue"
//}