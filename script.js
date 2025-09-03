const users = [
  {
    name: "Amisha Rathore",
    pic: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=600&auto=format&fit=crop&q=60",
    bio: "Silent chaos in a loud world | Not for everyone"
  },
  {
    name: "Rohan Mehta",
    pic: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60",
    bio: "Code. Coffee. Repeat ☕💻"
  },
  {
    name: "Sanya Kapoor",
    pic: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    bio: "Dreamer with a camera 📸"
  },
  {
    name: "Arjun Nair",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
    bio: "Explorer of code and mountains ⛰️"
  },
  {
    name: "Priya Sharma",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    bio: "Lost in books, found in words 📚✨"
  },
  {
    name: "Kabir Verma",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    bio: "Music fuels my soul 🎶"
  }
];

function showUsers(arr){
  arr.forEach(function(user){
    // Card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Image
    const img = document.createElement("img");
    img.classList.add("bg-img");
    img.src = user.pic;
    img.alt = "";

    // Blurred layer
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Content wrapper
    const content = document.createElement("div");
    content.classList.add("content");

    // Heading
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    // Paragraph
    const para = document.createElement("p");
    para.textContent = user.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    document.querySelector(".cards").appendChild(card);
  });
}
showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function(){
  let newUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });
  
  document.querySelector(".cards").innerHTML = "";
  showUsers(newUsers);
});