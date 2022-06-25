username = document.getElementById('request-username').innerHTML
console.log(username)
async function fetchUser() {
    let response = await fetch(`http://localhost/twitter/api/profiles/${username}`)
    // .then(response => response.json()
    // .then(username => response.username));
    let data = await response.json();
    for (let item of data) {
        document.getElementById('actual-content').insertAdjacentHTML(
            'afterbegin', `<div class='col-12 border mb-4 tweet' id='tweet-${item.id}'>${item.username} posted: ${item.content} <br> at sometime ago</div>`)
        // `<div class='col-12 border-bottom mb-4 tweet' id='tweet-${item.id}>${item.content}</div>`
        console.log(item)
    }

    return data
}

fetchUser();
document.getElementById('username-history').insertAdjacentHTML('afterbegin', document.getElementById('request-username').innerHTML + "'s history")