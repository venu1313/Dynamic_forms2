var data1=''
 var request1=new XMLHttpRequest()
 var allEmployeesbtn=document.getElementById('allEmployeesbtn')
allEmployeesbtn.addEventListener('click',function()
{

   
    request1.open('GET',"employee.json",true)
    
   

    request1.onload=function()
    {
        var allEmployees=JSON.parse(request1.responseText)

        allEmployees.map(function(employee)
        {

           data1+='<ul class="list-group"><li class="list-group-item bg-primary text-white">Employee ID :'+employee.eid+'</li><li class="list-group-item">Employee Name :'+employee.ename+'</li><li class="list-group-item text-danger">Employee City :'+employee.ecity+'</li><li class="list-group-item">Employee Email :'+employee.email+'</li></ul>'
         //document.getElementById('allEmployeesData').innerHTML=data1

        })
       
        
        document.getElementById('allEmployees').innerHTML='All Employees Information'

    }

    request1.send()


    //window.onload = timedRefresh(5000);
})
setInterval(function()
        {
           
            document.getElementById('allEmployeesData').innerHTML=data1
})