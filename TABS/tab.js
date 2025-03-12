const products = [
    {
        id: 0,
        title: "History",
        category: "history",
        desc: "Histographical elaboration of the nature sit amet consectetur adipisicing elit. Ad adipisci ipsam voluptatem quisquam animi earum deleniti officia. Sunt at aspernatur nobis voluptate dolorum incidunt, temporibus debitis harum totam, voluptas facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati cum temporibus a, molestias eius quaerat corporis dolor cupiditate!"
    },
    {
        id: 1,
        title: "Vision",
        category: "vision",
        desc: "vision based on the insights enacted from the true story of nature sit amet consectetur adipisicing elit. Ad adipisci ipsam voluptatem quisquam animi earum deleniti officia. Sunt at aspernatur nobis voluptate dolorum incidunt, temporibus debitis harum totam, voluptas facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati cum temporibus a, molestias eius quaerat corporis dolor cupiditate!",
        list: "list item"
    },
    {
        id: 2,
        title: "Goals",
        category: "goal",
        desc: "Goal based on the insights enacted from the true story of nature sit amet consectetur adipisicing elit. Ad adipisci ipsam voluptatem quisquam animi earum deleniti officia. Sunt at aspernatur nobis voluptate dolorum incidunt, temporibus debitis harum totam, voluptas facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati cum temporibus a, molestias eius quaerat corporis dolor cupiditate!"
    }
];


const contentContainer = document.querySelector('.change-contents');
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        const checkID = e.currentTarget.dataset.id;
        const items = products.map(product => {
            if (product.category === checkID) {
                if (checkID === "vision"){
                    return `
                        <div class="page-title">${product.title}</div>
                        <div class="text-desc">${product.desc}</div>
                        <ul class="list-items">
                            <li class="lists">${product.list}</li>
                            <li class="lists">${product.list}</li>
                            <li class="lists">${product.list}</li>
                        </ul>
                    `;
                }else{
                    return `
                        <div class="page-title">${product.title}</div>
                        <div class="text-desc">${product.desc}</div>
                        <ul class="list-items">
                            <li class="lists"></li>
                            <li class="lists"></li>
                            <li class="lists"></li>
                        </ul>
                    `;
                }
            }
        }).join("");
        contentContainer.innerHTML = items;
    });
});

window.addEventListener("DOMContentLoaded", ()=>{
    const historybtn = document.querySelector('[data-id="history"]');
    products.forEach(product => {
        if (product.category === historybtn.getAttribute('data-id')) {
            contentContainer.innerHTML += `
                <div class="page-title">${product.title}</div>
                <div class="text-desc">${product.desc}</div>
                <ul class="list-items">
                    <li class="lists"></li>
                    <li class="lists"></li>
                    <li class="lists"></li>
                </ul>
            `;
        }
    })
})

// const contentContainer = document.querySelector('.change-contents');
// const buttons = document.querySelectorAll('.btn');
// buttons.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         const checkID = e.currentTarget.dataset.id;
//         const items = products.map(product => {
//             if(product.category === checkID){
//                 if (checkID === 'vision'){
//                     return `
//                         <div class="page-title">${product.title}</div>
//                         <div class="text-desc">${product.desc}</div>
//                         <ul class="list-items">
//                             <li class="lists">${product.list}</li>
//                             <li class="lists">${product.list}</li>
//                             <li class="lists">${product.list}</li>
//                         </ul>
//                 `;
//                 }else if(checkID === 'goal'){
//                     return `
//                         <div class="page-title">${product.title}</div>
//                         <div class="text-desc">${product.desc}</div>
//                         <ul class="list-items">
//                             <li class="lists"></li>
//                             <li class="lists"></li>
//                             <li class="lists"></li>
//                         </ul>
//                     `
//                 }else{
//                     return `
//                         <div class="page-title">${product.title}</div>
//                         <div class="text-desc">${product.desc}</div>
//                         <ul class="list-items">
//                             <li class="lists"></li>
//                             <li class="lists"></li>
//                             <li class="lists"></li>
//                         </ul>
//                     `;
//                 }
//             }
//         }).join("");
//         contentContainer.innerHTML = items;
//     });
// });

// window.addEventListener("DOMContentLoaded", ()=>{
//     const history = document.querySelector('[data-id="history"]');
//     const items = products.map(product => {
//         if (product.category === history.getAttribute('data-id')){
//             return `
//             <div class="page-title">${product.title}</div>
//             <div class="text-desc">${product.desc}</div>
//             <ul class="list-items">
//                 <li class="lists"></li>
//                 <li class="lists"></li>
//                 <li class="lists"></li>
//             </ul>
//             `;
//         }
//     }).join("");
//     contentContainer.innerHTML = items;  
// })