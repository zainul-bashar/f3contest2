const fetchbtn=document.getElementById('btn');
fetchbtn.addEventListener('click',fetchingData);
//console.log('apis');

function fetchApi(url,delayed){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                resolve(data);
            })
        },delayed);
    });
}

function fetchingData(){
function promiseApi1(){
    return fetchApi("https://dummyjson.com/posts",1000);
}

function promiseApi2(){
    return fetchApi("https://dummyjson.com/products",1000);
}

function promiseApi3(){
    return fetchApi("https://dummyjson.com/todos",1000);
 }
 promiseApi1()
 .then((data1)=>{
    console.log(data1);
    const myhtml=data1.posts.map((item)=>{
       return `<div class='post'>
       <h2>ID:${item.id}<h2>
       <h2>Title:${item.title}<h2>
       </div>` 
    });
    document.getElementById('post').innerHTML=
    "<h1>Posts<h1><div class='post-flex'>"+myhtml.join("")+"</div>"
    return promiseApi2();
 }).then((data2)=>{
    console.log(data2);
    const myhtml=data2.products.map((item)=>{
        return `<div class='post'>
        <h2>ID:${item.id}<h2>
        <h2>Title:${item.title}<h2>
        <img src='${item.images[0]}' width='100%'/>
        </div>` 
     });
     document.getElementById('products').innerHTML=
     "<h1>Products<h1><div class='post-flex'>"+myhtml.join("")+"</div>"
    return promiseApi3();
 }).then((data3)=>{
    console.log(data3);
    const myhtml=data3.todos.map((item)=>{
        return `<div class='post'>
        <h2>ID:${item.id}<h2>
        <h2>Title:${item.todo}<h2>
        </div>` 
     });
     document.getElementById('todos').innerHTML=
     "<h1>todos<h1><div class='post-flex'>"+myhtml.join("")+"</div>"
 })
}

