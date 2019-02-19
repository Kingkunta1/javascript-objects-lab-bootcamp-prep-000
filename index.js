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
 var newrecipes= {object:'(Object.assign({},newrecipes)'}
 function deleteFromObjectByKey(recipes,object)
 {
   
  
  delete recipes[object]
  return recipes
  
 }
 
 function destructivelyDeleteFromObjectByKey(recipes,object)
  { 
   delete recipes[object]
   return recipes
  } 
 