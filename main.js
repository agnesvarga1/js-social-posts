const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    // media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];

////Modifica data nel obj
posts.forEach((post) => {
  const temporaryArr = post.created.split("-");

  const americanFormat = temporaryArr.reverse();
  post.created = americanFormat.join("-");
});
const mainContainerHTml = document.querySelector("#container");

posts.forEach((postItem, index) => {
  mainContainerHTml.innerHTML += `<div class="post">
    <div class="post__header">
        <div class="post-meta">
            <div class="post-meta__icon">
                <img class="profile-pic" src="${
                  postItem.author.image
                }" alt="Phil Mangione">
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${postItem.author.name}</div>
                <div class="post-meta__time">${postItem.created}</div>
            </div>
        </div>
    </div>
    <div class="post__text">${postItem.content}</div>
    <div class="post__image">
       ${postItem.media ? ` <img src="${postItem.media}"` : ``}     
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${
                  postItem.id
                }">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${
                  postItem.id
                }" class="js-likes-counter">${postItem.likes}</b> persone
            </div>
        </div>
    </div>
</div>
`;
});

const allLikeBtns = document.querySelectorAll(".js-like-button");
const likedPostIds = [];
const arrPerDislike = [];
allLikeBtns.forEach((btn) => {
  let btnClicked = false;
  btn.addEventListener("click", () => {
    postIdFrom = btn.getAttribute("data-postId");
    postIdFrom = Number(postIdFrom);
    if (btnClicked === false) {
      btnClicked = true;
      btn.classList.add("like-button--liked");
      likedPostIds.push(postIdFrom);
      arrPerDislike.push(postIdFrom);
      addLikes();
    } else {
      removeLikes();
      btnClicked = false;
      btn.classList.remove("like-button--liked");
    }
  });
});

const addLikes = () => {
  posts.forEach((post) => {
    if (likedPostIds.includes(post.id)) {
      post.likes = post.likes + 1;
      let newLikeEl = document.getElementById(`like-counter-${post.id}`);
      newLikeEl.innerText = post.likes;
      let index = likedPostIds.indexOf(postIdFrom);
      likedPostIds.splice(index, 1);
    }
  });
};

const removeLikes = () => {
  posts.forEach((post) => {
    if (arrPerDislike.includes(post.id)) {
      post.likes = post.likes - 1;
      let newLikeEl = document.getElementById(`like-counter-${post.id}`);
      newLikeEl.innerText = post.likes;
      let index = arrPerDislike.indexOf(postIdFrom);
      arrPerDislike.splice(index, 1);
    }
  });
};
