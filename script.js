function w3_open() {
    var w= $(window).width();
    console.log("width:",w);
    if ( $(window).width() <500){
        document.getElementById("mySidebar").style.width = "75%";
        console.log("working1");
    }
    else {
        document.getElementById("mySidebar").style.width = "20%";
        console.log("working");
    }
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}

{

}

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}



$('#card1').hide();
$('#card2').hide();
$('#card3').hide();
$('#card4').hide();
$('#card5').hide();
$('#sub').hide();
$("#h1").animate({left: '250px'});
$(document).ready(function(){
    $('div.hidd').show();
    $('div.hidd').animate({fontSize: '20em'}, "slow", function(){
        $('div.clck').fadeIn(1000);

    });







    $('#clck').click(function(){
        $('#clck').hide();
        $('#clck1').hide();
        $('#clck2').hide();
        $('#card1').fadeIn(1000);

    });
    var flag=0;

    $('#c1').click(function disp(){

        var firstName = $('#first_name').val();
        var lastName = $('#last_name').val();
        if(firstName == "")
        {    //$('.modal').modal();
            console.log("1");
            window.alert("Enter full Name");
        }
        else if(lastName == "")
        {
            // $('.modal').modal();
            console.log("2");
            window.alert("Enter full Name");
        }
        else
        {    flag=1;console.log("change");}
        console.log(firstName, lastName, "flag=", flag);
        if(flag){
            $('#card1').hide();
            $('#card2').fadeIn(1000);}
    });

    $('#c2').click(function(){

        var p1 = $('#ps1').val();
        var p2 = $('#ps2').val();
        console.log(p1);
        console.log(p2);
        if (p1 != p2 )
        {
            window.alert("Passwords not matching. Please re-enter");
        }

        else {
            $('#card2').hide();
            $('#card3').fadeIn(1000);
            $('.datepicker').pickadate({
                selectMonths: true,   // Creates a dropdown to control month
                selectYears: 15   // Creates a dropdown of 15 years to control year
            });
        }
    });
    $('#c3').click(function(){
        $('#card3').hide();
        $('#card4').fadeIn(1000);
        var m = $('#email').val();
        flag=1;
        // if( validateEmail(m)== false  && flag==1)
        //     window.alert("Enter a valid email.");
        // else {
        $('#sub').fadeIn("slow", function () {
            $('#sub').animate({top: '10px'}, "slow");
        });

    });

});
