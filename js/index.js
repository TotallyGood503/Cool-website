import state from './state.js'

const model = document.getElementsByClassName('model')[0]
const btnform = document.getElementById('modelFormBtn')
const modelBtn = document.getElementById('modelBtn')

newEvent(modelBtn, model, 'block')

model.addEventListener('click', (e) => {
    if (e.currentTarget == e.target) {
        model.style.display = 'none';
    }
})

newEvent(btnform, model, 'none')

//ASIDE

const open = document.getElementsByClassName('openAside')[0]
const aside = document.getElementsByClassName('aside')[0]
const close = document.getElementsByClassName('close')[0]

newEvent(open, aside, 'flex')

newEvent(close, aside, 'none')

let ul = document.getElementById('nav')
state.aside.forEach(item => {
    let li = document.createElement('li')
    li.textContent = item.text
    li.classList.add('menu')
    ul.appendChild(li)
})

const menu = Array.from(document.getElementsByClassName('menu'))
const scroll = Array.from(document.getElementsByClassName('scroll'))
menu.forEach((item, index) => {
    item.addEventListener('click', () =>
        scroll[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    )
})

//STATE.JS ACTIONS

const section1 = document.getElementById('section1')
state.section1.forEach(item => {
    section1.insertAdjacentHTML('beforeend', `
        <div class="blok">
                    <h3>${item.text}</h3>
                    <button class="btn">Розкажи получше<img src="./img/icon/btn_arr.png" alt=""></button>
                    <img src="./img/${item.url}" alt="" class="cont_img">
                </div>
    `)
})

const section3 = document.getElementById('section3')
state.section3.forEach(item => {
    section3.insertAdjacentHTML('beforeend', `
         <div class="blok">
                    <div class="column">
                        <h4>${item.text}</h4>
                        <p>${item.paragraph}</p>
                    </div>
                </div>
    `)
})

const section4 = document.getElementById('section4')
state.section4.forEach(item => {
    section4.insertAdjacentHTML('beforeend', `
        <img src="./img/${item.url}" alt="">
   `)
})

let section5_ol = document.getElementById('section5_ol')
state.section5_ol.forEach(item => {
    let li = document.createElement('li')
    li.textContent = item.li
    section5_ol.appendChild(li)
})

let section5_ul = document.getElementById('section5_ul')
state.section5_ul.forEach(item => {
    let li = document.createElement('li')
    li.textContent = item.li2
    section5_ul.appendChild(li)
})

const section6 = document.getElementById('section6')
state.section6.forEach(item => {
    section6.insertAdjacentHTML('beforeend', `
        <div class="blok">
                    <h2>${item.text}</h2>
                    <p>${item.paragraph}</p>
                </div>
   `)
})

const section7 = document.getElementById('section7')
state.section7.forEach(item => {
    section7.insertAdjacentHTML('beforeend', `
        <img src="./img/${item.url}" alt="">
   `)
})

//SUB SECTION: FOOTER

const footer_list = document.getElementById('footer_list')
state.footer.list.forEach(item => {
    footer_list.insertAdjacentHTML('beforeend', `
        <li><a href="${item.href}"></a>${item.li}</li>
   `)
})

const footer_textList = document.getElementById('footer_textList')
state.footer.textList.forEach(item => {
    footer_textList.insertAdjacentHTML('beforeend', `
        <h4>${item.text}</h4>
   `)
})

const footer_info = document.getElementById('footer_info')
state.footer.info.forEach(item => {
    footer_info.insertAdjacentHTML('beforeend', `
        <p class="section"><img src="./img/icon/footer-icon/${item.url}" alt=""><span>${item.span}</span></p>
   `)
})

const footer_hyperLinks = document.getElementById('footer_hyperLinks')
state.footer.hyperLinks.forEach(item => {
    footer_hyperLinks.insertAdjacentHTML('beforeend', `
        <a href="${item.href2}"><img src="./img/icon/${item.url2}" alt=""></a>
   `)
})

//FUNCTIONS

function newEvent(listener, container, value) {
    listener.addEventListener('click', () => {
        container.style.display = value;
    })
}