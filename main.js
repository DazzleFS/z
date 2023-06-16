function fun()
{
    console.log("PROCCESSING");
    window.location = "anotherpage.html";
}

function fun2()
{
    console.log("PROCCESSING");
    window.location = "index.html";
}


function numberonly(input)
{
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num, "");
}

function whatsapp()
{
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    var service = document.getElementById("service").value;
    var other = document.getElementById("th").value;
    var makeup = document.getElementById("makeup").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var branch = document.getElementById("branch").value;
    var ac = document.getElementById("ac").value;

    var url = "https://wa.me/9980469524?text=" +
    "Name : " + name + "%0a"
    +"Phone Number : " + phone + "%0a"
    +"Gender : " + gender + "%0a"
    +"Service : " + service + "%0a"
    +"Other Service Needed : " + other + "%0a"
    +"Makeup : " + makeup + "%0a"
    +"Date Of Service : " + date + "%0a"
    +"Time Service Needed : " + time + "%0a"
    +"Branch : " + branch + "%0a"
    +"Additional Comments : " + ac;

    window.open(url,'_blank').focus();
}