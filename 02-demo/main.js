const el = document.createElement('div')

el.innerHTML = 'oxh666'

document.body.append(el)

let i = 0
while (i < 10000000000) {
  i++
}
//单线程，阻塞后续渲染
