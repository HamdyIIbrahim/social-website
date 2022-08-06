let x=document.querySelectorAll(".menu-item");
let q=document.querySelector('#messages');
let rmactive =function(){
    x.forEach(function(el){
        el.classList.remove("active")
    })
}
x.forEach(item=>{   
    item.addEventListener("click",()=>{
        rmactive();
        item.classList.add("active")
        if(item.id != 'notification'){
            document.querySelector('.notifications-popup').style.display='none';
        }else{
            document.querySelector('.notifications-popup').style.display='block';
        }
    })
})

q.addEventListener('click',()=>{
    document.querySelector('.messages').style.boxShadow='0 0 1rem var(--color-primary)';
    setTimeout(() => {
        document.querySelector('.messages').style.boxShadow='none';
    }, 2000);
})

let messages= document.querySelector('.messages');
let message=document.querySelectorAll('.message');
let messagesearch=document.querySelector('#message-search');

const messsearch =()=>{
    const val =messagesearch.value.toLowerCase();
    console.log(val)
    message.forEach(name => {
        let chat= name.querySelectorAll('h4').textContent.toLowerCase();
        console.log(chat)
        if(chat.indexOf(val) != -1){
            name.style.display='flex';
        }else{
            name.style.display='none';
        }
    })
}

messagesearch.addEventListener('keyup',messsearch);

let dark =document.querySelector('#dark');
dark.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
})
// document.addEventListener('click',function(el){
//     console.log(el)
//     if(el.path[0].style.color == 'red'){
//         el.path[0].style.color='currentColor';
//     }else{
//         el.path[0].style.color='red';
//     }
// })