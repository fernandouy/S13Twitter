async function fetchTweets() {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/fernandouy/json-db/posts"
    );
    if (!response.ok) throw new Error("Error al traer la data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function showTweets(tweets) {
  tweets.forEach((tweet) => {
    const getRandomPic = Math.round(Math.random() * 54)
    document.querySelector(".feed").innerHTML += `
    <div class="tweets">
      <div class="profile-pic"><img src="https://xsgames.co/randomusers/assets/avatars/pixel/${getRandomPic}.jpg" style="height: 64px; width: 64px;" /></div>
      <div class="content">
        <div class="names">
          <p class="full-name">${tweet.name}</p>
          <p class="user-name">@${fullName(tweet.name)}</p>
          <p class="time"> ${tweet.time}</p>
        </div>
      </div>
      <div class="tweet-content">
        <p>${tweet.text}</p>
      </div>
      <div class="tweet-icons">
        <i class="fa fa-comment" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
      </div>
    </div>
    `;
  });
}

function fullName(name) {
  const username = name.toLowerCase().split(" ").join("_")
  return username
}

document.addEventListener("DOMContentLoaded", async () => {
  const tweets = await fetchTweets();
  showTweets(tweets);
})