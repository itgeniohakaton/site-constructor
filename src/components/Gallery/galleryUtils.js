import { galleryTemplate } from "./galleryTemplates.js";

export function addGallery(event, site) {
  const header = event.target.header.value || "The img Gallery";

  const images = [];
  images[0] = event.target.imgLink1.value || defaultImages[0];
  images[1] = event.target.imgLink2.value || defaultImages[1];
  images[2] = event.target.imgLink3.value || defaultImages[2];
  images[3] = event.target.imgLink4.value || defaultImages[3];
  images[4] = event.target.imgLink5.value || defaultImages[4];

  const background = event.target.background.value || "galleryBackgroundBlue";
  const headerFont = event.target.headerFont.value || "galleryHeaderFontGill";
  const classes = background + " " + headerFont;

  site.insertAdjacentHTML(
    "beforeend",
    galleryTemplate(classes, images, header)
  );
}

const defaultImages = [
  "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Cumberland_Forest_Ataya_Tract_2.jpg?crop=0%2C0%2C4000%2C2200&wid=4000&hei=2200&scl=1.0",
  "http://www.fao.org/fileadmin/templates/SOFO/2020/src/images/share.jpg",
  "https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print",
  "https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?cs=srgb&dl=pexels-pixabay-355321.jpg&fm=jpg",
  "https://greenglobaltravel.com/wp-content/uploads/2018/04/Gondwana-Rainforest-Biggest-Forest-feature-update.jpg",
];
