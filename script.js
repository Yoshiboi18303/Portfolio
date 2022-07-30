if(window.location.href == "http://127.0.0.1:5500/about.html") {
    var tldrText = document.getElementById("tldr");
    var tldrLink = document.getElementById("tldr-link");
    var video = document.getElementById("about-video");

    function notPlayedOrLoaded() {
        alert("The video has not been loaded/played yet!")
    }
    
    function showTLDR() {
        tldrText.innerHTML = "TL;DR, I love to rickroll clueless people like you lmao.<br><br><span class=\"low-opacity\">Oh yeah, you have no control over this situation, the controls are useless.<br><br><br><br><br><br>(The only way you can stop this is by leaving this page.)</span>";
        tldrLink.innerHTML = "Hide TL;DR";
        tldrLink.href = "javascript:hideTLDR()";
    }
    
    function hideTLDR() {
        tldrText.innerHTML = "";
        tldrLink.innerHTML = "Show TL;DR";
        tldrLink.href = "javascript:showTLDR()";
    }

    tldrLink.href = "javascript:notPlayedOrLoaded()"

    video.addEventListener("play", () => {
        tldrLink.style.opacity = "1"
        tldrLink.href = "javascript:showTLDR()"
    })

    video.addEventListener("pause", () => {
        video.play();
    })

    video.addEventListener("volumechange", () => {
        video.volume = 1;
    })

    video.addEventListener("error", (error) => {
        console.error(error.error + "\n\nReloading the page in 5 seconds...")
        setTimeout(() => location.reload(), 5000)
    })

    setInterval(() => {
        if(video.muted == true) video.muted = false;
    }, 0001)
}

if(window.location.href == "http://127.0.0.1:5500/index.html") {
    var descriptions = ["A developer and gamer doing stuff!", "An idiot making bots and websites.", "The developer of <code>Rocket</code> and other cool bots!", "The developer of <code>radarbots.js</code> and other cool packages!", "Coding bots right now."]
    var indexPageDescription = document.getElementById("description");
    var chosenDescription = descriptions[Math.floor(Math.random() * descriptions.length)]
    indexPageDescription.innerHTML = `${chosenDescription}`
}

function goBack() {
    window.history.back()
}
