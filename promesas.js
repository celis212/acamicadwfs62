const divInfo = document.querySelector('#info')

const getFollowers = url => {
  const ulFollowers = document.querySelector('#followers')
  fetch(url)
    .then(response => response.json())
    .then(response => {
      response.forEach(follower => {
        const item = document.createElement('li')
        item.textContent = follower.login
        ulFollowers.appendChild(item)
      })
    })
}

const getUserGithub = username => {
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
      const name = document.createElement('h2')
      name.textContent = response.name
      divInfo.appendChild(name)
      getFollowers(response.followers_url)
    })
}

getUserGithub('celis212')