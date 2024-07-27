let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn1 = document.querySelector("#btn1");
let p1 = document.querySelector("#result");

let btn2 = document.querySelector("#btn2");
let img = document.querySelector("#dog-result");


//-----------------Cat Fact------------------
btn1.addEventListener("click", async () => {
    // p.innerText = "";
    let fact = await getFacts();
    // document.querySelector("p").append(fact);
    p1.innerText = fact;
});

async function getFacts(){
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error - ",e);
        return "No FAct found";
    }
}


//--------------Dog image------------
btn2.addEventListener("click", async () => {
    let link = await getImage();
   img.setAttribute("src",link);
});

async function getImage(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    } catch(e) {
        console.log("error - ", e);
        return "No Image found"
    }
}


//---------------