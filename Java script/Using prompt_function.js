var element=[]
var name=prompt('Enter youer Name')
var id=prompt('Enter youer Id')
var city=prompt('Enter youer City')
Details(name,id,city)
function Details(name,id,city)
{
    //element.push({Name:name})
        element.push({Name:name,Id:id,City:city})
}
console.log(element)
for(var ele of element)
{
    console.log(ele)
}

