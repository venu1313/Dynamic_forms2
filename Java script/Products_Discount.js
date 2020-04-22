//3)take empty array representing prices of various products and display final price ,and price after discount
//4)discount should be given only when purchase value is greater than 6000rs.


var total=0
var dis
var product1=[]
console.log("array type is:",typeof product1)
product1.push({i_phone:Number(prompt('Enter youer i_phone price'))})
product1.push({hp:Number(prompt('Enter youer hp price'))})
product1.push({dell:Number(prompt('Enter youer dell price'))})
//product1.push({i_phone:878})
//product1.push({hp:883})
//product1.push({dell:2313})

for(var price of product1)
{
console.log(price)
}
var product=[]
product.push(product1[0].i_phone)
product.push(product1[1].hp)
product.push(product1[2].dell)


for(var price of product)
{
  total=total+price
 
}
console.log('Total price of products:',total)
if(total > 6000)
{
    dis=(total*5)/100
    console.log('discount of the products:',dis)
    console.log('purchase value:',total-dis)
}
else 
  console.log('discount applicable greater than 6000rs')
