amount = prompt(`How many times do you want to open every pack?`)
amount = parseInt(amount)

function wait(ms) {
    var dt = new Date();
    while ((new Date()) - dt <= ms) {}
}

async function openAll(amount) {
    let packList = Object.keys(blacket.packs)
    for (i = 0; i < amount; i++) {
        for (j = 0; j < packList.length; j++) {
            data = await blacket.requests.post("/worker/open", {pack: packList[j]})
            wait(300)
        }
        console.log(`Succesfully opened ${i+1}/${amount} rounds`)
    }
    alert(`Your ${amount.toLocaleString()} ${packName} packs have finished opening`)
}

openAll(amount)
