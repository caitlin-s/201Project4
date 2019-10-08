var searchBy;

function myFunction() {
 	var search = document.getElementById("myText").value;

 	var mydata = JSON.parse(data);

	var needle = search;

    console.log(option);

var html = "<table border='1|1'>";
let foundSomething = false;
for (var i = 0; i < mydata.length; i++){
    var x = document.getElementById("fbSelect").selectedIndex;
    var y = document.getElementById("fbSelect").options;
    var option = y[x].text;

    if(option == "age"){
        var searchBy = age;
    }

    if(option == "gender"){
        var searchBy = gender;
    }

    if(option == "dob_year"){
        var searchBy = dob_year;
    }

    if(option == "friend_count"){
        var searchBy = friend_count;
    }

    var age = mydata[i].age;
    var gender = mydata[i].gender;
    var dob_year = mydata[i].dob_year;
    var friend_count = mydata[i].friend_count;

	if (searchBy == needle){
    	console.log(mydata[i]);
       		html+="<ul>";
        	html+="<li> <span class='bold'> Birth year: </span>"+mydata[i].dob_year+"</li>";
        	html+="<li> <span class='bold'> Likes: </span>" +mydata[i].likes+"</li>";
        	html+="<li> <span class='bold'> Age: </span>" +mydata[i].age+"</li>";
        	html+="<li> <span class='bold'> Gender: </span>" +mydata[i].gender+"</li>";
        	html+="<li> <span class='bold'> Friend Count: </span>"+mydata[i].friend_count+"</li>";
        	html+="</ul>";
        foundSomething = true;
	} 
}

if (!foundSomething){
    html+="<p> No data found </p>";
}
    html+="</table>";
	document.getElementById("box").innerHTML = html;
}


