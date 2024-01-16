
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userInfo = document.getElementById('userInfo');
        const userInfoText = document.createElement('li');
        // const userPosts = document.getElementById('userPosts');
        const userInfoText2 = document.createElement('li');

        userInfoText.innerHTML = `User ID: ${user.id}<li>
                              Name: ${user.name}<li>
                              Username: ${user.username}<li>
                              Email: ${user.email}<li>
                              Phone: ${user.phone}<li>
                              Address: <br><ul>
                              street: ${user.address.street}<br>
                              suite: ${user.address.suite}<br>
                              city: ${user.address.city}<br>
                              zipcode: ${user.address.zipcode}<br>
                              geo: <ul>
                              lat: ${user.address.geo.lat}<br>
                              lng: ${user.address.geo.lng}<br>`;
        userInfoText2.innerHTML = `Phone: ${user.phone}<li>
                              Website: ${user.website}<li>
                              Company: <br><ul>
                              name: ${user.company.name}<br>
                              catchPhrase: ${user.company.catchPhrase}<br>
                              bs: ${user.company.bs}<br>`;

        userInfo.appendChild(userInfoText);
        userInfo.appendChild(userInfoText2);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.classList.add('postDiv');
                    const postTitle = document.createElement('p');
                    const postLink = document.createElement('a');

                    postTitle.innerHTML = post.title;
                    postLink.innerHTML = 'View Post Details';
                    postLink.href = `post-details.html?postId=${post.id}`;

                    postDiv.appendChild(postTitle);
                    postDiv.appendChild(postLink);

                    userPosts.appendChild(postDiv);
                });
            });
    });

function showPosts() {
    const userPosts = document.getElementById('userPosts');
    userPosts.style.display = 'block';
}

