const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const imagesGalleryContainer = document.querySelector('.js-gallery');
const galleryItemsMarkup = createImagesGalleryMarkup(galleryItems);

imagesGalleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

imagesGalleryContainer.addEventListener('click', onImagesGalleryContainerClick);


function createImagesGalleryMarkup(galleryItems) {
        
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a
                class="gallery__link"
                href="${original}"
            >
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `;
    }).join('');

    }

const lightbox = document.querySelector('div.lightbox');
const lightboxImage = document.querySelector('img.lightbox__image');
         
function onImagesGalleryContainerClick(event) {
  event.preventDefault();
  const isImagesGalleryEl = event.target.classList.contains('gallery__image');
    if (!isImagesGalleryEl) {
        return;
  }
    
  lightbox.classList.add('is-open');
  // console.log(event.target);
  // console.log(event.target.previousElementSibling);
  lightboxImage.src = event.target.dataset.source;
  lightboxImage.alt = event.target.getAttribute('alt');
       
};

function onCloseModal() {
   lightbox.classList.remove('is-open');
   lightboxImage.setAttribute('src', "");
   lightboxImage.setAttribute ('alt',  "");

};

const closeLightboxBtn = document.querySelector('[data-action="close-lightbox"]');
closeLightboxBtn.addEventListener('click', onCloseLightboxBtnClick);

function onCloseLightboxBtnClick(event) {
  
  const isCloseLightboxBtn = event.target.classList.contains('lightbox__button');
  if (!isCloseLightboxBtn) {
    return;
  }
  onCloseModal();
};

const lightboxOverlay = document.querySelector('div.lightbox__overlay');
lightboxOverlay.addEventListener('click', onCloseLightboxOverlayClick);

function onCloseLightboxOverlayClick(event) {
  const isCloseLightboxOverlay = event.target.classList.contains('div.lightbox__overlay');
  if (!isCloseLightboxOverlay) {
    return;
  }
  onCloseModal();
  
};

 window.addEventListener('keydown', onEscKeyPress);

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
      onCloseModal();
  }
};

const currentEl = document.querySelector('gallery__item');

function onTurnOverImages(event) {
  const LEFT_kEY_CODE = 'ArrowLeft';
  const RIGHT_kEY_CODE = 'ArrowRight';
  const isArrowKeyLeft = event.code === LEFT_kEY_CODE;
  const isArrowKeyRight = event.code === RIGHT_kEY_CODE;

  // console.log(event.target.previousSibling);
  if (isArrowKeyLeft) {
       
    const nextEl = currentEl.previousSibling;
    console.log(currentEl.previousSibling);
    
    // lightboxImage.src = event.target.closest.dataset.source;
  // lightboxImage.alt = event.target.getAttribute('alt');
       
  }
}



