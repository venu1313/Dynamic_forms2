

var btn=document.querySelector('button')



btn.addEventListener('click',function()
{
    
    var server=new XMLHttpRequest()

    //console.log(typeof server)
    //console.log(server)
    server.onreadystatechange=function()
    {
        if(server.status==200)
        {
            console.log('Request Success')
            //console.log(server.readyState)
            if(server.readyState==4)
            {

               var posts=JSON.parse(server.responseText)
             //console.log(posts.length)

           /* for(var post of posts)
            {
                console.log('ID :',post.id)
                console.log('Title :',post.title.toUpperCase())
                console.log('Body :',post.body)
                //document.getElementById('employeesData').innerHTML ='venu'
                
            }
                 */
             var text='' 
             text += "<table>"        
             text += "<tr><th>"  +"ID "+"</th>" +"<th>" +"TItle "+"</th>"+"<th>"+"Body"+ "</th></tr>"  
            for(var post in posts)
            {
                text += "<tr><td>"+posts[post].id +"<br>"+"</td>"
                + "<td>"+posts[post].title +"<br>"+"</td>"
                + "<td>"+posts[post].body +"<br>"+"</td></tr>"+"<br>"
            }
            text += "</table>"
            document.getElementById('employeesData').innerHTML=text  
         //for (post in posts) {
          //  txt += "<tr><td>" + post[x].id + "</td></tr>";
         //document.getElementById('employeesData').innerHTML = post.id
    
          // }
           //txt += "</table>"    
            // document.getElementById('employeesData').innerHTML = txt
            
            }
        }
    }
   
    //var userid=form.elements.userid.value
    
var userid=document.getElementById('userid').value
var id=document.getElementById('id').value
var title=document.getElementById('title').value
var body=document.getElementById('body').value

   var newPost=JSON.stringify({userId:userid,id:id,title:title,body:body})
    server.open('POST','https://jsonplaceholder.typicode.com/posts')
    server.setRequestHeader("Content-Type", "application/json");
    
    server.send(newPost)
})

