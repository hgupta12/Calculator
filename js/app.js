const toggleBtns = document.querySelectorAll('.toggle');
const input = document.querySelector('#screen');
const body = document.querySelector('body');
// content
toggleBtns.forEach((btn,index)=>{
    btn.setAttribute('data-content', `${index+1}`)
})


toggleBtns.forEach((toggleBtn ,index)=>{
    toggleBtn.addEventListener('click',()=>{
        toggle(toggleBtn);
        toggleTheme(index);
    })
})

function toggle(currentBtn){

    toggleBtns.forEach((btn)=> btn.classList.remove('active'));
    currentBtn.classList.add('active');
}

function toggleTheme(index){
   for (let i = 1; i < 4; i++) {
       document.querySelector('body').classList.remove(`theme${i}`);
       
   }
    document.querySelector('body').classList.add(`theme${index+1}`);
}

// functioning calculator

const btnsNum = document.querySelectorAll('.btn_num');
btnsNum.forEach(btn=>{
    btn.addEventListener('click', ()=>{
            
            inputVal(btn);
        
    })
})
const btnsOpr = document.querySelectorAll('.btn_operator');
btnsOpr.forEach(btn => {
    btn.addEventListener('click', () => {
            inputVal(btn);
        
    })
})
const btnsRD = document.querySelectorAll('.btn_rd');
btnsRD.forEach(btn => {
    btn.addEventListener('click', () => {
        inputVal(btn);
    })
})

btnEq = document.querySelector('.btn_eq');
btnEq.addEventListener('click', ()=>{
    try {
        calc();
    } catch (error) {
        errorAlert();
    }
})




function inputVal(btn){
   
    if(btn.id=='reset'){
        reset();

    }
    else if(btn.id == 'delete'){
            deleteLast();
    }
    else{

        input.value+=btn.textContent;
    }
}

function calc(){
    const result = eval(input.value);
    if (result == undefined) {
        input.value='';
    }
    else if(result == Infinity || result== -Infinity){
        input.value = 'infinity';
        setTimeout(()=>{
            input.value ='';
        },500)
    }
    else{
        input.value=result;
    }
}
function reset(){
    input.value='';
}
function deleteLast(){
    input.value = input.value.slice(0,input.value.length-1);
}

function errorAlert(){
    div = document.createElement('div');
    div.classList.add('error');
    div.innerHTML ='Please enter valid input!';
    document.querySelector('body').appendChild(div);
    input.value ='';
    setTimeout(()=>{
        div.remove();
    },1000)
}
