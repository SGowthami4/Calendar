document.addEventListener('DOMContentLoaded',function(){
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    const totalDaysOfTheWeek=6;
    const today=new Date();
    
    const currentMonth=today.getMonth();
    document.getElementById("current-month").textContent=months[currentMonth];
    document.getElementById("full-date").textContent=today.toDateString();

    const firstDayOfTheMonth=new Date(today.getFullYear(),today.getMonth(),1).getDay();
    console.log(firstDayOfTheMonth);

    const numberOfDaysInMonth=new Date(today.getFullYear(),today.getMonth()+1,0).getDate();
    console.log(numberOfDaysInMonth);

    const lastDay=new Date(today.getFullYear(),today.getMonth()+1,0).getDay();

    let daysHTML="";

    const daysElement=document.querySelector(".days");

    for (let index=0; index<firstDayOfTheMonth; index++){
        daysHTML+="<p class=\"date\">"+"</p>"
        console.log(daysHTML);
    }
    for (let date=1;date<=numberOfDaysInMonth;date++){
        if (today.getDate()==date){
            daysHTML+="<p class=\"date today\">"+date+"</p>"
        }else{
            daysHTML+="<p class=\"date\">"+date+"</p>"
        }
    }

    if (lastDay<totalDaysOfTheWeek){
        console.log(lastDay)
        for (let index=lastDay;index<totalDaysOfTheWeek;index++){
            daysHTML+="<p class=\"date\">"+"</p>" 
        }
    }

    
    
    daysElement.innerHTML=daysHTML;


})