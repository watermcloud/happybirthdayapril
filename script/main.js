// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Hey, do you want me to play some music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = <span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>;

    hbd.innerHTML = <span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".two",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".three", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".three",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    })
    .staggerTo(
        ".hbd-chatbox span",
        1.5, {
            visibility: "visible",
        },
        0.05
    )
    .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
    },
    "+=4")
    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=1")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=1.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=2"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    )
    .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
    )
    .staggerFromTo(
        ".baloons img",
        2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
        0.2
    )
    .from(
        ".profile-picture",
        0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
        "-=2"
    )
    .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(
        ".wish-hbd span",
        0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
    )
    .staggerFromTo(
        ".wish-hbd span",
        0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,
        "party"
    )
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "party"
    )
    .staggerTo(
        ".eight svg",
        1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
        0.3
    )
    .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}

ini script saya sebelumnya bantu sesuaikan dengan HTML berikut:

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="shortcut icon" type="image/png" href="img/favicon.png" />
  <title>Happy Birthday!!! :)</title>
  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet">
  <!-- My Style -->
  <link rel="stylesheet" href="./style/main.css" />
</head>

<body>

    <audio class="song" loop autoplay>
        <source src="./music/hbd.mpeg">
        </source>
        Your browser isn't invited for super fun audio time.
    </audio>

    <div class="container">
        <div class="one">
            <h1 class="one">
                Hi
                <span id="name">April</span>
            </h1>
            <p class="two" id="greetingText">belum tidut kan?!</p>
        </div>

        <div class="three">
            <p>It's your birthday!! :D</p>
        </div>

        <div class="four">
            <div class="text-box">
                <p class="hbd-chatbox">
                Happy birthday to youu!! 
                </p>
                <p class="fake-btn">Send</p>
            </div>
        </div>

        <!-- WhatsApp-like chat box added here -->
        <div class="whatsapp-chat">
            <div class="chat-message sender">
                <div class="message-content">
                    <span class="contact-name">April <span class="emoji">❤️</span></span>
                    <p class="message-text">Happy Birthday to youu!!</p>
                </div>
            </div>
            <div class="chat-message receiver">
                <div class="message-content">
                    <span class="contact-name">You</span>
                    <p class="message-text">Thank you so much! 😊</p>
                </div>
            </div>
        </div>

        <div class="five">
            <p class="idea-1">That's what I was going to do.</p>
            <p class="idea-2">But then I stopped.</p>
            <p class="idea-3">
                I realised, I wanted to do something<br>
                <strong>special</strong>
                .
            </p>
            <p class="idea-4">Because,</p>
            <p class="idea-5">
                You are Special
                <span>:)</span>
            </p>
            <p class="idea-6">
                <span>S</span>
                <span>O</span>
            </p>
        </div>

        <div class="six">
            <img src="./img/aprill.png" alt="profile" class="profile-picture" id="imagePath"/>
            <img src="img/hat.svg" alt="hat" class="hat" />
            <div class="wish">
                <h3 class="wish-hbd">Happy Birthday!</h3>
                <h5 id="wishText">May happiness always be with you! ;)</h5>
            </div>
        </div>

        <div class="seven">
            <div class="baloons">
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon1.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon1.svg" alt="" />
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon1.svg" alt="" />
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon1.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon1.svg" alt="" />
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon1.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon1.svg" alt="" />
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon1.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
                <img src="img/ballon1.svg" alt="" />
                <img src="img/ballon2.svg" alt="" />
                <img src="img/ballon1.svg" alt="" />
                <img src="img/ballon3.svg" alt="" />
            </div>
        </div>

        <div class="eight">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
        </div>

        <div class="nine">
            <p>Okay, now come back and tell me if you liked it.</p>
            <p id="replay">Or click, if you want to watch it again.</p>
            <p class="last-smile">:)</p>
        </div>
    </div>

</body>
    <!-- Greensock -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
    <!-- Sweetalert -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script type="application/javascript" src="./script/main.js"></script>

</html>
