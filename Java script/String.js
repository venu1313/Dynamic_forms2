var title1='Welcome to angular 8'
var title2=''
var t1=title1.indexOf('a')
console.log(title1)
for (var str in title1)
{
  if(str==t1)
    {
        //console.log(title1[str].toUpperCase())
        //title2=title1[str].toUpperCase()
        title2=title2.concat(title1[str].toUpperCase())
    }
    else if(title1[str]=='W')
    {
       // console.log(title1[str].toLowerCase())
        //title2[str]=title1[str].toLowerCase()
        title2=title2.concat(title1[str].toLowerCase())
    }
    else{
   //console.log(title1[str])
   //[str]=title1[str]
   title2=title2.concat(title1[str])

    }
 }
 console.log(title2)
var title4=''
 var title3='    Welcome to angular 8    '
 title3=title3.trim()
 console.log(title3)
 for (var str in title3)
{
    if(title3[str]!=' ')
    {
       
        title4=title4.concat(title3[str])
    }
}
 console.log(title4)


 
 var t1='   welcome to angular 8  angular 8 angular 8 angular 8 angular 8 angular 8'
 console.log(t1)
 for (var str in t1)
 {
 t1=t1.replace('angular 8','python')
 }
 
 console.log(t1)


