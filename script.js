                                                                  // Challenge 1:
let user = document.getElementById('user')
user.innerHTML="Khushi";
                                                                 // Challenge 2:
let changeBtnBg= document.getElementById('btn-click')
changeBtnBg.addEventListener('click',()=>{
    changeBtnBg.style.backgroundColor="red";
})
                                                                // Challenge 3:
                                                                                                                      
let buildBtn=document.getElementById('build-button');
let statement=document.getElementById('statement')
buildBtn.addEventListener('click',makeSentence);
function makeSentence(){
    let value1=document.getElementById('noun').value;
    let value2=document.getElementById('verb').value;
    let value3=document.getElementById('adverb').value;
    statement.innerHTML='"'+value1+" "+value2+" "+value3+'"';
}
                                                                 // Challenge 4.1:
let grandp=document.getElementById('grandparent');
let parent=document.getElementById('parent');
let child=document.getElementById('child');
grandp.addEventListener('click',()=>{
    console.log("Granparent clicked")
},{capture: true})
parent.addEventListener('click',()=>{
    console.log("parent clicked")
},{capture: true})
child.addEventListener('click',()=>{
    console.log("Child clicked")
},{capture: true})
                                                                  // Challenge 4.2:
                                                                                
grandp.addEventListener('click',()=>{
    console.log("Granparent clicked")
})
parent.addEventListener('click',()=>{
    console.log("parent clicked")
})
child.addEventListener('click',()=>{
    console.log("Child clicked")
})
                                                                  // Challenge 5:
                                                                                
document.querySelector("#category").addEventListener("click",(e)=>{console.log(e.target.innerHTML)})
                                        
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                                        