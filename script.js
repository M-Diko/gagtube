    
setTimeout(function() {
    document.getElementById('page1').style.display = 'block';
    document.querySelector('.Loader').style.display = 'none';
    document.body.style.visibility = 'visible';
}, 5000);


const gifContents = `
    <div class="card">
        <div class="card-content">
            <img src="Gifs/one.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <img src="Gifs/one.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <img src="Gifs/one.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <img src="Gifs/one.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <br>
`
;


const vidContents = `
    <div class="card">
        <div class="card-content">
            <img src="Gifs/one.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <img src="Gifs/one.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <img src="Gifs/one.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <img src="Gifs/one.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    <br>
`
;

const memeContents = `
    <div class="card">
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>  
        <div class="card-content">
            <img src="memes/one.jfif" style="width: 100%; height: 100%;"></img>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="card-content">
            <img src="memes/one.jfif" style="width: 100%; height: 100%;"></img>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>  
        <div class="card-content">
            <img src="memes/one.jfif" style="width: 100%; height: 100%;"></img>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>Card 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="card-content">
            <img src="memes/one.jfif" style="width: 100%; height: 100%;"></img>
        </div>
    </div>
    <br>
`
;

  const btnGifs = document.getElementById("gifs");
  const btnMemes = document.getElementById("memes");
  const btnVids = document.getElementById("vids");
  const tabContent = document.getElementById("tab-content");
  
  
  function highlightButton(btn) {
    // Clear all existing styling / highlights
    btnGifs.className = "";
    btnMemes.className = "";
    btnVids.className = "";
    btn.className = "active"; // set new style / highlight
  }
  
  function handleClick(event) {
    const btnId = event.target.id;
    const tabContent = document.getElementById('tab-content');
  
    highlightButton(event.target);
    
    if (btnId === "gifs") {
      tabContent.innerHTML = gifContents;  
    }  
    else if (btnId === "memes") {
        tabContent.innerHTML= "";//clearing tab contents
        tabContent.innerHTML = memeContents; 
    } else if (btnId === "vids"){
        tabContent.innerHTML= "";//clearing tab contents
        tabContent.innerHTML = vidContents; 
    }
}
  

tabContent.innerHTML = gifContents;  

btnGifs.addEventListener("click", handleClick);
btnMemes.addEventListener("click", handleClick);
btnVids.addEventListener("click", handleClick);
