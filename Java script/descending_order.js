var employees=[
    {eid:1,ename:'raj',ecity:'Bangalore',esalary:78000.6464},
    {eid:2,ename:'rajeev',ecity:'Bangalore',esalary:78000.6464},
    {eid:3,ename:'ravi',ecity:'Bangalore',esalary:78000.6464},
    {eid:4,ename:'john',ecity:'Bangalore',esalary:78000.6464},
    {eid:5,ename:'clarke',ecity:'Bangalore',esalary:78000.6464},
    {eid:6,ename:'time',ecity:'Bangalore',esalary:78000.6464},
    {eid:7,ename:'raja',ecity:'Bangalore',esalary:78000.6464}

]
//for(var emp in employees)
//{ 
/*employees[0].eid.sort(function(a,b)
{
   if(a>b)
      return -900
   else if (a<b)
      return 11111
  else
      return 0
})
//}*/
console.log(employees)
for(var emp in employees)
{   
    console.log('esalary:',employees[emp].esalary,'ecity:',employees[emp].ecity,'ename:',employees[emp].ename,'eid:',employees[emp].eid)
}
/*for(var emp=employees.length-1;0<=emp;emp--)
{  
    console.log(employees[emp])
}*/


/*var employee=[]

for(var emp in employees)
{   
    employee.push({esalary:employees[emp].esalary,ecity:employees[emp].ecity,ename:employees[emp].ename,eid:employees[emp].eid})
}

console.log(employee)*/


