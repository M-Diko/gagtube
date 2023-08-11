const emojis = document.querySelectorAll('.emoji');


setTimeout(function() {
    document.getElementById('page1').style.display = 'block';
    document.querySelector('.Loader').style.display = 'none';
    document.body.style.visibility = 'visible';
}, 5000);


const gifContents = `
    <div class="card">
        <div class="card-content">
            <h2>Scarlet Johannsen Ladies and Gentlement.</h2>
            <p>11:32am. 11/08/2023</p>
        </div>
        <div class="card-content">
            <img src="Gifs/one.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅12</div>
            <div class="emoji" id="emoji2">😬5 </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>Going to work on a Monday.</h2>
            <p>11:30am. 11/08/2023</p>
        </div>
        <div class="card-content">
            <img src="Gifs/six.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>Leaving Work Friday 4pm.</h2>
            <p>11:00am. 10/08/2023</p>
        </div>
        <div class="card-content">
            <img src="Gifs/five.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>How to speed up your download.</h2>
            <p>08:56pm. 09/08/2023</p>
        </div>
        <div class="card-content">
            <img src="Gifs/three.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <div class="card">
        <div class="card-content">
            <h2>Best Gif on the Web.</h2>
            <p>00:00am. 03/08/2023</p>
        </div>
        <div class="card-content">
            <img src="Gifs/four.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <div class="card">
        <div class="card-content">
            <h2>My reaction when this site went live.</h2>
            <p>00:00am. 03/08/2023</p>
        </div>
        <div class="card-content">
            <img src="Gifs/two.gif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>    
    <br>
    <footer class="footer">
        <p>&copy; 2023 Maliviwe Diko. <a href="https://github.com/M-Diko/gagtube" target="_blank" style="color:white;">Visit my github account to see evidence of my work</a></p>
    </footer>
`
;


const vidContents = `
    <div class="cardV">
        <div class="cardV-content">
            <h2>Me before my morning coffee, just kidding I drink tea.</h2>
            <p>13:29, 11/08/23.</p>
            <video controls>
                <source src="Vids/coffee.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    <br>
    <div class="cardV">
        <div class="cardV-content">
            <h2>As a QA, I can confirm this.</h2>
            <p>12:55, 11/08/23.</p>
            <video controls>
                <source src="Vids/qa.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    <br>
    <div class="cardV">
        <div class="cardV-content">
            <h2>Relatable.</h2>
            <p>10:55am, 11/08/23.</p>
            <video controls>
                <source src="Vids/boss.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    <br>
    <div class="cardV">
        <div class="cardV-content">
            <h2>Monday Mornings.</h2>
            <p>00:55am, 11/08/23.</p>
            <video controls>
                <source src="Vids/alarm.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    <br>
    <div class="cardV">
        <div class="cardV-content">
            <h2>Advise to young people.</h2>
            <p>18:36, 10/08/23.</p>
            <video controls>
                <source src="Vids/advise.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    <br>
    <footer class="footer">
        <p>&copy; 2023 Maliviwe Diko. <a href="https://github.com/M-Diko/gagtube" target="_blank" style="color:white;">Visit my github account to see evidence of my work</a></p>
    </footer>
`
;

const memeContents = `
    <div class="card">
        <div class="card-content">
            <h2>Brace Yourselves! more memes are coming.</h2>
            <p>12:38pm, 11/08/23.</p>
        </div>  
        <div class="card-content">
            <img src="Memes/four.jpg" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>As an adult I can confirm</h2>
            <p>12:00pm, 11/08/23.</p>
        </div>  
        <div class="card-content">
            <img src="Memes/nine.jpg" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>This is why you should always be thankful</h2>
            <p>10:45am, 11/08/23.</p>
        </div>  
        <div class="card-content">
            <img src="Memes/eight.jpg" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>Me, during office meetings.</h2>
            <p>10:45am, 11/08/23.</p>
        </div>  
        <div class="card-content">
            <img src="Memes/five.jpg" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>Mathematics Majors flexing.</h2>
            <p>10:45am, 11/08/23.</p>
        </div>  
        <div class="card-content">
            <img src="Memes/six.jpg" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>I snorted a little.</h2>
            <p>10:45am, 11/08/23.</p>
        </div>  
        <div class="card-content">
            <img src="Memes/ten.jpg" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>My struggles while building this site.</h2>
            <p>10:45am, 11/08/23.</p>
        </div>  
        <div class="card-content">
            <img src="Memes/three.jpeg" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>Web Devs' nightmare.</h2>
            <p>10:45am, 11/08/23.</p>
        </div>  
        <div class="card-content">
            <img src="Memes/two.jpg" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>This project right now.</h2>
            <p>07:45pm, 09/08/23.</p>
        </div>  
        <div class="card-content">
            <img src="Memes/one.jfif" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-content">
            <h2>Meme Zero.</h2>
            <p>10:45am, 11/08/23.</p>
        </div>  
        <div class="card-content">
            <img src="Memes/one.jpg" style="width: 100%; height: 100%;"></img>
        </div>
        <div class="emojis">
            <div class="emoji" id="emoji1">😅</div>
            <div class="emoji" id="emoji2">😬</div>
        </div>
    </div>
    <br>
    <footer class="footer">
        <p>&copy; 2023 Maliviwe Diko. <a href="https://github.com/M-Diko/gagtube" target="_blank" style="color:white;">Visit my github account to see evidence of my work</a></p>
    </footer>
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

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        emoji.classList.toggle('selected');
    });
});