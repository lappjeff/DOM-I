const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav

let nav = document.querySelector('nav')
let navTags = document.querySelectorAll('nav a');
const tagArray = Array.from(navTags)
console.log(tagArray)

for (let i = 0; i < tagArray.length; i++) {
    tagArray[i].textContent = siteContent['nav']['nav-item-' + i]
}

// navTags[0].textContent = siteContent['nav']['nav-item-1']
// navTags[1].textContent = siteContent['nav']['nav-item-2']
// navTags[2].textContent = siteContent['nav']['nav-item-3']
// navTags[3].textContent = siteContent['nav']['nav-item-4']
// navTags[4].textContent = siteContent['nav']['nav-item-5']
// navTags[5].textContent = siteContent['nav']['nav-item-6']

let appendToNav = document.createElement('a')
appendToNav.textContent = 'Append';

let prependToNav = document.createElement('a')
prependToNav.textContent = 'Prepend'

nav.appendChild(appendToNav)
nav.prepend(prependToNav)

navTags.forEach(function(tag) {
    tag.style.color = 'green';
})

//CTA
let cta = document.querySelector('.cta')
let ctaText = document.querySelector('h1');
ctaText.textContent = siteContent['cta']['h1'];
let ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button']

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const breakBtn = document.createElement('button')
breakBtn.textContent = 'Hide Me'
breakBtn.style.height = '10%'
breakBtn.style.border = '1px solid black'
breakBtn.style.background = 'red'
breakBtn.style.cursor = 'pointer'

function hide (e) {
    e.target.style.visibility = 'hidden';
}

breakBtn.addEventListener ('click', hide)
cta.appendChild(breakBtn)

//Main Content

let h4Tag = document.querySelectorAll('h4');
let mainContentTop = document.querySelectorAll('.top-content .text-content p')
let mainContentBottom = document.querySelectorAll('.bottom-content .text-content p')
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
//Top content
h4Tag[0].textContent = siteContent['main-content']['features-h4']
h4Tag[1].textContent = siteContent['main-content']['about-h4']

mainContentTop[0].textContent = siteContent['main-content']['features-content']
mainContentTop[1].textContent = siteContent['main-content']['about-content']

//Bottom content
h4Tag[2].textContent = siteContent['main-content']['services-h4']
h4Tag[3].textContent = siteContent['main-content']['product-h4']
h4Tag[4].textContent = siteContent['main-content']['vision-h4']

mainContentBottom[0].textContent = siteContent['main-content']['services-content']
mainContentBottom[1].textContent = siteContent['main-content']['product-content']
mainContentBottom[2].textContent = siteContent['main-content']['vision-content']

//Contact
let contactInfo = document.querySelectorAll('.contact p');

h4Tag[5].textContent = siteContent['contact']['contact-h4']

contactInfo[0].textContent = siteContent['contact']['address']
contactInfo[1].textContent = siteContent['contact']['phone']
contactInfo[2].textContent = siteContent['contact']['email']

//footer
let footerText = document.querySelector('footer p')

footerText.textContent = siteContent['footer']['copyright']
