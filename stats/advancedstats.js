moreUser = await fetch('/worker/user', {method: 'GET'}).then(x => x.json())
banner = moreUser.user.banner.split('/content/banners/')
banner = banner[1].split('.png')
totalBlooks = 0

for (i = 0; i < Object.keys(moreUser.user.blooks).length; i++) {
    totalBlooks = totalBlooks + moreUser.user.blooks[Object.keys(moreUser.user.blooks)[i]]
}

smallTitle = ['Blooks Ingame', 'Total Blooks Owned', 'Name Color', 'EXP', 'Friend Amount', 'Banner', 'User ID']
insert = [Object.keys(blacket.blooks).length, totalBlooks.toLocaleString(), blacket.user.color, Math.round(moreUser.user.exp).toLocaleString(), moreUser.user.friends.length.toLocaleString(), banner[0], blacket.user.id]
img = ['/content/unlockIcon.png', '/content/unlockIcon.png', 'https://static.thenounproject.com/png/2856497-200.png', '/content/expIcon.png', 'https://cdn-icons-png.flaticon.com/512/880/880594.png', moreUser.user.banner, 'https://static.thenounproject.com/png/129639-200.png']

try {
    for (i = 0; i < smallTitle.length; i++) {
        stats = document.getElementsByClassName('styles__topStats___3qffP-camelCase')
        blooksIngame = document.createElement(`div`)
        blooksIngame.classList.add('styles__statContainer___QKuOF-camelCase')
        blooksIngame.innerHTML = `<div class="styles__statTitle___z4wSV-camelCase">${smallTitle[i]}</div><div class="styles__statNum___5RYSd-camelCase">${insert[i]}</div><img loading="lazy" src="${img[i]}" alt="${smallTitle[i]}" class="styles__tokenImg___a08fY-camelCase" draggable="false"></div>`
        stats[(stats.length)-1].appendChild(blooksIngame)
    }
} catch {
    alert('You have to be on the stats page!')
}
