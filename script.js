const btnMobile = document.getElementById('btn-mobile')

const toggleMenu = () => {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')

  if (nav.classList.contains('active')) {
    btnMobile.classList.remove('bx-menu')
    btnMobile.classList.add('bx-x')
  } else {
    btnMobile.classList.remove('bx-x')
    btnMobile.classList.add('bx-menu')
  }

}

btnMobile.addEventListener('click', toggleMenu)

const btc = document.getElementById('bitcoin')
const eth = document.getElementById('ethereum')
const doge = document.getElementById('dogecoin')

const settings = {
  'async': true,
  'scrossDomain': true,
  'url': 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbnb%2Cdogecoin&vs_currencies=usd',
  'method': 'GET',
  'headers': {}
}

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd
  eth.innerHTML = response.ethereum.usd
  doge.innerHTML = response.dogecoin.usd
})
