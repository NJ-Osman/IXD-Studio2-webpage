let submit = document.querySelector(".submit");

function submitPost() {
    let userPost = document.createElement("div");
    userPost.setAttribute("class", "post")
    let userStatus = document.createElement("div");
    userStatus.setAttribute("class", "userStatus");
    let userInfo = document.createElement("div");
    userInfo.setAttribute("class", "userInfo");
    let imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "imageName");
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-ellipsis");
    let postContainer = document.createElement("div");
    postContainer.setAttribute("class", "postParagraph");
    let userMsg = document.createElement("p");
    userMsg.setAttribute("class", "userMessage");
    let timeStamp = document.createElement("p");
    timeStamp.setAttribute("class", "time");
    timeStamp.textContent = "1 second ago"
    let userName = document.createElement("h3");
    userName.setAttribute('class', "userName");
    let userImage = document.createElement("img");
    userImage.setAttribute("class", "img")
    let userInput = document.querySelector(".shareYourThoughts").value;
    userMsg.textContent = userInput;
    userPost.appendChild(userMsg);
    userImage.src = "./Images/Person-Two.jpg";
    userName.textContent = "Michael Scott"
    let sectionThree = document.querySelector(".sectionThree");

    // sectionThree.append(userPost)
    sectionThree.insertBefore(userPost, sectionThree.firstChild)
    userPost.appendChild(imageContainer);
    userPost.appendChild(postContainer);

    imageContainer.appendChild(userImage);
    imageContainer.appendChild(userInfo);
    userInfo.appendChild(userImage);
    userInfo.appendChild(userStatus);
    userStatus.appendChild(userName);
    userStatus.appendChild(timeStamp);
    postContainer.appendChild(userMsg)
    imageContainer.appendChild(icon);

    // sectionThree.appendChild(userName);
    // sectionThree.appendChild(userPost);

    console.log(userInput);
    userInput.value = "";
}

submit.addEventListener("click", function() {
    submitPost();
    // console.log('working');
});