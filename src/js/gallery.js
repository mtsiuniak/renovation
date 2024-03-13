
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import image3542 from "../img/gallery-pictures/IMG_3542.jpg";
import image3543 from "../img/gallery-pictures/IMG_3543.jpg";
import image3544 from "../img/gallery-pictures/IMG_3544.jpg";
import image3545 from "../img/gallery-pictures/IMG_3545.jpg";
import image3546 from "../img/gallery-pictures/IMG_3546.jpg";
import image3547 from "../img/gallery-pictures/IMG_3547.jpg";
import image3548 from "../img/gallery-pictures/IMG_3548.jpg";
import image3549 from "../img/gallery-pictures/IMG_3549.jpg";
import image3550 from "../img/gallery-pictures/IMG_3550.jpg";
import image3551 from "../img/gallery-pictures/IMG_3551.jpg";
import image3552 from "../img/gallery-pictures/IMG_3552.jpg";
import image3553 from "../img/gallery-pictures/IMG_3553.jpg";
import image3554 from "../img/gallery-pictures/IMG_3554.jpg";
import image3555 from "../img/gallery-pictures/IMG_3555.jpg";
import image3556 from "../img/gallery-pictures/IMG_3556.jpg";
import image3557 from "../img/gallery-pictures/IMG_3557.jpg";

const images = [
  {
    original:
      image3542,
    description: 'Hokkaido Flower',
  },
  {
    original:
      image3543,
    description: 'Container Haulage Freight',
  },
  {
    original:
       image3544,
    description: 'Aerial Beach View',
  },
  {
    original:
      image3545,
    description: 'Flower Blooms',
  },
  {
    original:
      image3546,
    description: 'Alpine Mountains',
  },
  {
    original:
     image3547,
    description: 'Mountain Lake Sailing',
  },
  {
    original:
      image3548,
    description: 'Alpine Spring Meadows',
  },
  {
    original:
      image3549,
    description: 'Nature Landscape',
  },
  {
    original:
      image3550,
    description: 'Lighthouse Coast Sea',
    },
  {
    original:
      image3551,
    description: 'Lighthouse Coast Sea',
    },
  {
    original:
      image3552,
    description: 'Lighthouse Coast Sea',
    },
  {
    original:
      image3553,
    description: 'Lighthouse Coast Sea',
  },
  {
    original:
      image3554,
    description: 'Lighthouse Coast Sea',
  },
  {
    original:
      image3555,
    description: 'Lighthouse Coast Sea',
  },
  {
    original:
      image3556,
    description: 'Lighthouse Coast Sea',
  },
  {
    original:
      image3557,
    description: 'Lighthouse Coast Sea',
  },
];

const photosGallery = document.querySelector('.photos-gallery');

const galleryItemsHTML = images.map(({ original }) => {
  return `
    <li class="gallery-item">
	<a class="gallery-link" data-fancybox="gallery" href=${original}>
		<img 
			class="gallery-image" 
			src=${original} 
			alt=""
			/>
	</a>
    </li>
  `;
}).join('');

try {
  photosGallery.insertAdjacentHTML("beforeend", galleryItemsHTML);
} catch {
  console.log("not a problem")
}


Fancybox.bind("[data-fancybox]", {
        loop: true,
        animationEffect: "fade",
        hideScrollbar: false,
        Carousel: {
            transition: "slide",
        },
        caption: function (fancybox, slide) {
            return slide.thumbEl?.alt || "";
        },
    }
)


    