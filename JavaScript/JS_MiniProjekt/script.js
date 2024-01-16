const userList = document.getElementById('userList');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let i = 0; i < users.length; i += 2) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = i; j < i + 2 && j < users.length; j++) {
                const user = users[j];

            const userDiv = document.createElement('div');
                userDiv.classList.add('userDiv');
            const userId = document.createElement('p');
            const userName = document.createElement('p');
            const detailsLink = document.createElement('a');

            userId.innerHTML = `Id: ${user.id}`;
            userName.innerHTML = `Name: ${user.name}`;
            detailsLink.innerHTML = 'Personal Users Details';
            detailsLink.href = `user-details.html?userId=${user.id}`;

            userDiv.appendChild(userId);
            userDiv.appendChild(userName);
            userDiv.appendChild(detailsLink);

            row.appendChild(userDiv);
            userList.appendChild(row);
        }
    }});
