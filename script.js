document.addEventListener('DOMContentLoaded', function () {
    // Create an interactive overlay to block the page
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.padding ='20px 20px'
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgb(157, 157, 157)';
    overlay.style.color = 'white';
    overlay.style.fontFamily = 'Arial, sans-serif';
    overlay.style.zIndex = '1000';
    overlay.textContent = 'Click me';
    overlay.setAttribute('id','btn');
    // Append the overlay to tbtn
    document.body.appendChild(overlay);

    // Add a span inside the overlay to make only the text clickable
    const textSpan = document.createElement('span');
    textSpan.textContent = overlay.textContent;
    overlay.textContent = ''; // Clear the existing text
    overlay.appendChild(textSpan);

    // Wait for user interaction on the text only
    textSpan.addEventListener('click', function () {
        // Remove the overlay
        overlay.remove();
        textSpan.remove();  
        let heading = document.getElementById('main-heading');
        heading.setAttribute('class','animate__animated animate__flip');
        // Trigger all subsequent actions only after overlay is gone
        startCelebration();
        setTimeout(() => {
            onclick()
        }, 1000);
        setTimeout(function () {
            const popperImg = document.createElement('img');
            popperImg.setAttribute('id', 'popperimg');
            popperImg.setAttribute('src', 'popper.gif'); // Correct path to the popper GIF
        
            document.body.appendChild(popperImg);
        
            // Set a timeout to remove the image after 2.6 seconds
            setTimeout(function () {
                popperImg.remove();
            }, 2600); // Image will be removed after 2.6 seconds
        }, 2900); // Delay of 2.5 seconds before showing the popper image
        
    });

    function startCelebration() {
        // Play the audio after 3 seconds
        setTimeout(function () {
            const audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'happy-birthday-155461.mp3'); // Replace with the correct path
            audioElement.setAttribute('loop', 'true'); // Loop the audio
            audioElement.volume = 0.5; // Set background volume

            document.body.appendChild(audioElement);
            audioElement.play().catch(err => {
                console.error('Error playing audio:', err);
            });
        }, 3000); // Delay audio by 3 seconds

        // Start animations and other functions after the overlay is removed
        console.log('User interacted, starting animations and other scripts...');
        triggerAnimations();
    }

    function triggerAnimations() {
        // Example: Add a class to an element for CSS animations
        const animatedElement = document.querySelector('.animate-me');
        if (animatedElement) {
            animatedElement.classList.add('start-animation');
        }

        // Example: Trigger any other functions or scripts
        console.log('Animations and other scripts triggered!');
    }
});

const btn = document.getElementById('btn');


document.addEventListener('click', function () {
    setTimeout(function () {
        function makeElement() {
            element = document.getElementById('sirimage');
            element.setAttribute('class','animate__animated animate__bounceInLeft aniamte-me');
        }
        makeElement();  // Call makeElement after 5 seconds
    }, 1000);
});
document.addEventListener('click', function () {
    setTimeout(function () {
        function makeCakeElement() {
            element2 = document.getElementById('cake');
            element2.setAttribute('class','animate__animated animate__fadeIn animate-me');
        }
        makeCakeElement();  // Call makeElement after 5 seconds
    }, 2500);
});

function onclick(){
    let a = document.getElementById('sirimage');
    a.style.opacity = '1'
}
gsap.to('#sirimage',{
    opacity:1,
    duration:0.1
});
gsap.to('#cake',{
    opacity:1,
    delay:2.5,
    duration:0.1
});
