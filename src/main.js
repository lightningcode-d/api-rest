const URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_kandbkkH4vbzVXnu3348yIBxriCTImF82J3nsM6FiQfgeMnbbVg24zBcBz6zhHzL';

async function myCat () {
    const res = await fetch(URL);
    const data = await res.json();
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}

myCat();

const myButton = document.querySelector("button");
myButton.onclick = myCat;

