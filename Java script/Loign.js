var form=document.querySelector('form')
var cust=[]

form.addEventListener('submit',function(event)
{
    event.preventDefault()
})



function handleForm()
{

    
   var username=document.getElementById('username').value
   var password=document.getElementById('password').value
   var city=document.getElementById('city').value
   var mobile=document.getElementById('mobile').value
   //var gender=document.getElementById('gender').value
   var gender=form.elements.gender.value
   var skills=form.elements['skills']
   //var skill=document.getElementById('skill').value
   var cpassword=document.getElementById('cpassword').value
   
   
   
    if(username=='')
    {
        document.getElementById('username').focus()
        document.getElementById('error').innerHTML='Username is required'
    }
    else if( username.length < 6 || username.length > 15)
    {
        document.getElementById('username').focus()
        document.getElementById('error').innerHTML='Youer username length is : '+username.length+'   should  be contain minimum 6 characters and max 15 characters' 
    }
    else if(password=='')
    {
        document.getElementById('error1').innerHTML=''

        document.getElementById('password').focus()
        document.getElementById('error').innerHTML='Password is required' 
    }
    else if(cpassword=='')
    {
        document.getElementById('cpassword').focus()
        document.getElementById('error').innerHTML='Confrom Password is required' 
    }
     
    else if(!(cpassword==password)) 
    {
             document.getElementById('cpassword').focus()
             document.getElementById('error').innerHTML='Password is does not match' 
          
    }
    else if(mobile=='')
    {
        document.getElementById('mobile').focus()
        document.getElementById('error').innerHTML='mobile is required' 
    }
    else if( mobile.length < 10 || mobile.length > 10)
    {
        document.getElementById('mobile').focus()
        document.getElementById('error').innerHTML='mobile number should  be contain total 10 digits' 
    }
    else if(city=='')
    {
        document.getElementById('city').focus()
        document.getElementById('error').innerHTML='City is required' 
    }
    else if(gender=='')
    {
        
        document.getElementById('error').innerHTML='Gender is required'
    }
    else if(skill[0].checked==false && skill[1].checked==false && skill[2].checked==false)
    {
        document.getElementById('error').innerHTML='Atleast One Skill is required'  
    }
    else
    {document.getElementById("Button").style.visibility='visible'
        //console.log('form details captured')
        document.getElementById('error').innerHTML=''
        //console.log('username:',username)
        //console.log('password:',password)
        //console.log('mobile:',mobile)
        //console.log('city:',city)
       // console.log('Gender:',gender)
        //console.log('skill:',skill)
        var skillset=[]
        for(var i=0,len=skills.length;i<len;i++)
        {
            if(skills[i].checked)
            {
               skillset.push(skills[i].value)
            }
        }
        //console.log('Your Skill Set :'+skillset)

    }


}
function myFunction()
    {
        var x = document.getElementById("password")
        if (x.type == "password") {
          x.type = "text"
        } else {
          x.type = "password"
        }
      } 
      function handleForm1()
      {
        var username=document.getElementById('username').value
        var text='' 
        text += "<table>"        
           text += "<tr><td>"+username+"</td></tr>"
       text += "</table>"
       
        document.getElementById('error1').innerHTML=text
      }
    
function disable()
{
    document.getElementById("Button").style.visibility='hidden'
}



function disply()
{
    cust.push({username:username.value,password:password.value,mobile:mobile.value,city:city.value,gender:form.elements.gender.value,skills:skillset})
    var text=''
    var skills=form.elements['skills']
 //text+="<b>Disply All Detailis </b>"+"</br>"+"username :"+username.value+"</br>"+"Password :"+password.value+"</br>"+"mobile :"+mobile.value+"</br>"+"City :"+city.value+"</br>"+"Gender :"+form.elements.gender.value+"</br>"+"Skills :"
 var skillset=[]
 for(var i=0,len=skills.length;i<len;i++)
 {
     if(skills[i].checked)
     {
        skillset.push(skills[i].value)
     }
 }
 //text+=skillset
 text += "<table><tr><th>"  +"Username "+"</th>" +"<th>" +"Password "+"</th>"+"<th>"+"Mobile"+ "</th>"+"<th>"+"City"+ "</th></tr>"
 for(var post in cust)
            {
                text += "<tr><td>"+cust[post].username +"<br>"+"</td>"
                + "<td>"+cust[post].password+"<br>"+"</td>"
                + "<td>"+cust[post].mobile+"<br>"+"</td>"
                + "<td>"+cust[post].city+"<br>"+"</td></tr>"+"<br>"
            }
            text += "</table>"
 
    document.getElementById("Button1").innerHTML=text
    

console.log(cust)


}

