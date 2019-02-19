var recipes = {object: "value", } 

function updateObjectWithKeyAndValue( recipes, object,value)
{

recipes[object]=value
return recipes
  
}

function updateObjectWithKeyAndValue(recipes, object,value)
{
  
return Object.assign ({}, recipes,{ [object]:value}  )
 
 } 
 
 function destructivelyUpdateObjectWithKeyAndValue(recipes,object,value)
 {
   recipes[object]=value
   return recipes
   
 }
 var newrecipes= {object2:'(Object.assign({},newrecipes)'}
 function deleteFromObjectByKey(newrecipes,object2)
 {
   
  
  delete newrecipes[object2]
  return newrecipes
  
 }
 
 function destructivelyDeleteFromObjectByKey(recipes,object)
  { 
   delete recipes[object]
   return recipes
  } 
 