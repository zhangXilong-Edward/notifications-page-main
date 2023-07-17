const markAsRead = document.querySelector('#mark-as-read'); 
const count = document.querySelector('#unread-count'); 
const notificationsArr = document.querySelectorAll('.notification'); 
const container = document.querySelector('#container');
const readNotificationsArr = document.querySelectorAll('.read'); 

markAsRead.addEventListener('click', ()=>{
    console.log('mark as read clicked'); 
    notificationsArr.forEach((e)=>{
        e.classList.add('read'); 
    })
    count.innerText = '0'; 
})

let unreadCount = notificationsArr.length- readNotificationsArr.length; 
count.innerText = unreadCount; 

let newCount = unreadCount; 

notificationsArr.forEach(
    (e)=>{
        e.addEventListener('click', ()=>{
            if(e.classList.contains('read')){
                return
            }
            e.classList.add('read'); 
            newCount--; 
            console.log(newCount); 
            count.innerText = newCount; 
        })
    }
)

console.log(notificationsArr[5].classList.contains('read')); 

