const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const nav = document.querySelectorAll('nav a');
console.log(nav);
nav[0].textContent = siteContent.nav['nav-item-1'];
nav[1].textContent = siteContent.nav['nav-item-2'];
nav[2].textContent = siteContent.nav['nav-item-3'];
nav[3].textContent = siteContent.nav['nav-item-4'];
nav[4].textContent = siteContent.nav['nav-item-5'];
nav[5].textContent = siteContent.nav['nav-item-6'];

const title = document.querySelector('h1');
title.textContent = siteContent.cta.h1;

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

const button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button;

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

const contentTitles = document.querySelectorAll('.text-content h4');
contentTitles[0].textContent = siteContent['main-content']['features-h4'];
contentTitles[1].textContent = siteContent['main-content']['about-h4'];
contentTitles[2].textContent = siteContent['main-content']['services-h4'];
contentTitles[3].textContent = siteContent['main-content']['product-h4'];
contentTitles[4].textContent = siteContent['main-content']['vision-h4'];

const contentText = document.querySelectorAll('.text-content p');
contentText[0].textContent = siteContent['main-content']['features-content'];
contentText[1].textContent = siteContent['main-content']['about-content'];
contentText[2].textContent = siteContent['main-content']['services-content'];
contentText[3].textContent = siteContent['main-content']['product-content'];
contentText[4].textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact');
contact.querySelector('h4').textContent = siteContent.contact['contact-h4'];
contact.querySelector('p:nth-of-type(1)').textContent =
  siteContent.contact.address;
contact.querySelector('p:nth-of-type(2)').textContent =
  siteContent.contact.phone;
contact.querySelector('p:nth-of-type(3)').textContent =
  siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

const newLink1 = document.createElement('a');
newLink1.textContent = 'New Link 1';
newLink1.href = '#';
document.querySelector('nav').prepend(newLink1);

const newLink2 = document.createElement('a');
newLink2.textContent = 'New Link 2';
newLink2.href = '#';
document.querySelector('nav').appendChild(newLink2);
