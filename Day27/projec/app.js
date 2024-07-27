let url = "http://universities.hipolabs.com/search?name=india";


// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let collArr = await getColleges(country);
//     console.log(collArr);

//     show(collArr);
// });

// function show(collArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(college of collArr){
//         let li = document.createElement("li");
//         li.innerText = college.name;
//         list.appendChild(li);
//     }
//     let input = document.querySelector("input");
//     input.value = "";
// }

async function getColleges() {
    try{
        let res = await axios.get(url);
        // return res.data;
        console.log(res.data.name);
    }
    catch(e){
        console.log("error : ", e);
        // return [];
    }
}