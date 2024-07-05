//story scrolling functions

const scrollContainer = document.querySelector(".story-row");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "smooth" 

} );

nextBtn.addEventListener("click", () =>{
    scrollContainer.scrollLeft += "900";
});
backBtn.addEventListener("click", () =>{
    scrollContainer.scrollLeft -= 900;
});


//follow & following functions 

function toggleFollow(button) {
    if (button.innerHTML === "Follow") {
        button.innerHTML = "Following";
    } else {
        button.innerHTML = "Follow";
    }
}

// Select all buttons with the class 'follow-btn'
const followButtons = document.querySelectorAll(".follow-btn");

// Attach event listeners to each button
followButtons.forEach(button => {
    button.onclick = function() {
        toggleFollow(this);
    };
});

//for like 
// changing icon for like and saved it in local storage

let ChangeIcon = function(icon){
    icon.classList.toggle("fa-solid")
}

let ChangeIcon2 = function(icon){
    icon.classList.toggle("fa-solid")
}

document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        const likeIcon = button.querySelector('.like-icon');
        const postId = button.getAttribute('data-id');

        const savedState = localStorage.getItem(postId);
        if(savedState === 'liked'){
            button.classList.add('liked');
            likeIcon.classList.remove('far');
            likeIcon.classList.add('fas');
        }

        button.addEventListener('click', () => {
            const liked = button.classList.toggle('liked');

            if (liked) {
                likeIcon.classList.remove('far');
                likeIcon.classList.add('fas');
                localStorage.setItem(postId,'liked');
            } else {
                likeIcon.classList.remove('fas');
                likeIcon.classList.add('far');
                localStorage.removeItem(postId);
            }
        });
    });
});
// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keyup', function (e) {
    // Check for common screenshot keys
    if (e.key === 'PrintScreen' ||  (e.key === '4' && (e.ctrlKey || e.metaKey))) {
        alert('Find another way to screenshot. :)');
    }
});



// alert to information
// alert('images used in this site all are my friends :)');
