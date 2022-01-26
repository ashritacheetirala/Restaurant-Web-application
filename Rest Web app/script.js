function dayOfTheWeek()
{
    var date = new Date();
    var day_of_week = date.getDay();
    switch (day_of_week)
    {
    case 0: 
        popup = window.open("menu1.html");
    case 1: 
        popup = window.open("menu2.html");
    case 2: 
        popup = window.open("menu3.html");
    case 3: 
        popup = window.open("menu4.html");
    case 4: 
        popup = window.open("menu5.html");
    case 5:
        popup = window.open("menu6.html");
    default: 
        popup = window.open("menu7.html");
    }
}

