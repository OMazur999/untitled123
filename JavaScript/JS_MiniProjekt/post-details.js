
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        const postInfo = document.getElementById('postInfo');
        const postInfoText = document.createElement('p');
        const postComments = document.getElementById('postComments');

        postInfoText.innerHTML = `Post ID: ${post.id}<br>
                              Title: ${post.title}<br>
                              Body: ${post.body}`;

        postInfo.appendChild(postInfoText);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    const commentName = document.createElement('p');
                    const commentBody = document.createElement('p');

                    commentName.innerHTML = `Name: ${comment.name}`;
                    commentBody.innerHTML = `Body: ${comment.body}`;

                    commentDiv.appendChild(commentName);
                    commentDiv.appendChild(commentBody);

                    postComments.appendChild(commentDiv);
                });
            });
    });

