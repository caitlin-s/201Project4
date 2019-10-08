var searchBy;

function myFunction() {
    var search = document.getElementById("myText").value;

    var mydata = JSON.parse(instadata);

    var needle = search;

    console.log(option);

var html = "<table border='1|1'>";
let foundSomething = false;
for (var i = 0; i < mydata.length; i++){
    var x = document.getElementById("instaSelect").selectedIndex;
    var y = document.getElementById("instaSelect").options;
    var option = y[x].value;

    if(option == "numberPosts"){
        var searchBy = numberPosts;
    }

    if(option == "username"){
        var searchBy = username;
    }

    if(option == "numberFollowers"){
        var searchBy = numberFollowers;
    }

    if(option == "descriptionProfile"){
        var searchBy = descriptionProfile;
    }

    if(option == "tags"){
        var searchBy = tags;
    }

    var numberPosts = mydata[i].numberPosts;
    var username = mydata[i].username;
    var numberFollowers = mydata[i].numberFollowers;
    var descriptionProfile = mydata[i].descriptionProfile;
    var tags = mydata[i].tags;

    if (searchBy == needle){
        console.log(mydata[i]);
            html+="<ul>";
            html+="<li> <span class='bold'> Number of posts: </span>"+mydata[i].numberPosts+"</li>";
            html+="<li> <span class='bold'> Username: </span>" +mydata[i].username+"</li>";
            html+="<li> <span class='bold'> Number of followers: </span>" +mydata[i].numberFollowers+"</li>";
            html+="<li> <span class='bold'> descriptionProfile: </span>" +mydata[i].descriptionProfile+"</li>";
            html+="<li> <span class='bold'> Tags: </span>"+mydata[i].tags+"</li>";
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


