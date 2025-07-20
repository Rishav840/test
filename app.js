// // let url = "https://catfact.ninja/fact";
// let url = "https://icanhazdadjoke.com/";
// // let url = "https://dog.ceo/api/breeds/image/random";


// // let getFact = async () => {
// //     try {
// //         let res = await fetch(url);
// //         let data = await res.json();
// //         console.log(data.fact);


// //         let res2 = await fetch(url);
// //         let data2 = await res2.json();
// //         console.log(data2.fact);
// //     }
// //     catch (err) {
// //         console.log("err:", err);
// //     }


// // }

// // getFact();

let btn = document.querySelector("button");
// let p = document.getElementById("p");

// // btn.addEventListener("click", async () => {
// //     console.log("clicked");
// //     let fact = await getFact();
// //     console.log(fact);
// //     p.innerText = fact;
// // });


// // let getFact = async () => {
// //     try {

// //         let res = await axios.get(url,{
// //             headers:{
// //                 Accept:"application/json",
// //             }
// //         });
// //         return res.data.joke;
// //         // return res.data.fact;
// //     }
// //     catch (err) {
// //         console.log("err:", err);
// //         return "No Fact Found";
// //     }
// // }


// // btn.addEventListener("click", async()=>{
// //     let fact = await ranomImage();
// //     // console.log(fact);
// //     console.log(fact);
// //     p.src = fact;
// //     // console.log(fact);
// // })


// // let ranomImage = async ()=>{
// //     try{
// //         let res = await axios.get(url);
// //         return res.data.message
// //         // return res.data;

// //     }
// //     catch(err){
// //         console.log("err:",err);
// //     }
// // }

// btn.addEventListener('click', async()=>{
//     let fact = await getJoke();
//     console.log(fact);
//     p.innerText = fact.joke;
// })


// async function  getJoke(){

//     try{
//         let config ={
//             headers:{
//                 Accept: "application/json"
//             }
//         }
//         let res = await axios.get(url, config);
//         console.log(res.data.joke);
//         return res.data
//     }
//     catch(err){
//         console.log("err:",err);
//     }
// }


let url = "http://universities.hipolabs.com/search?name=";



btn.addEventListener('click', async () => {

    let country = document.getElementById("input").value;

    let colleges = await getCollege(country);
    show(colleges);
})
function show(colleges) {
    let list = document.getElementById("list");
    list.innerText = "";
    for (collist of colleges) {
        console.log(collist);
        let li =document.createElement("li");
        li.innerText = collist.name;
        list.append(li);
    }

}

// let country = "India";

async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    }
    catch (err) {
        console.log("err:", err);
    }
}


getCollege();