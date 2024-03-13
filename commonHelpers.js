import"./assets/mob-menu-ee03def0.js";import{M as i}from"./assets/vendor-ba12fb37.js";const s="/renovation/assets/IMG_3542-3179e25a.jpg",t="/renovation/assets/IMG_3543-030f8f67.jpg",n="/renovation/assets/IMG_3544-ef55b624.jpg",r="/renovation/assets/IMG_3545-50475299.jpg",g="/renovation/assets/IMG_3546-1f42defa.jpg",c="/renovation/assets/IMG_3547-47ff4e04.jpg",l="/renovation/assets/IMG_3548-e0db446d.jpg",p="/renovation/assets/IMG_3549-7a70edfe.jpg",d="/renovation/assets/IMG_3550-3cb682f2.jpg",m="/renovation/assets/IMG_3551-5443b2c3.jpg",h="/renovation/assets/IMG_3552-8dc43dbc.jpg",f="/renovation/assets/IMG_3553-a48d4f17.jpg",M="/renovation/assets/IMG_3554-17c9ab4f.jpg",u="/renovation/assets/IMG_3555-8fe1b69d.jpg",j="/renovation/assets/IMG_3556-a8496d58.jpg",G="/renovation/assets/IMG_3557-bc802224.jpg",I=[{original:s,description:"Hokkaido Flower"},{original:t,description:"Container Haulage Freight"},{original:n,description:"Aerial Beach View"},{original:r,description:"Flower Blooms"},{original:g,description:"Alpine Mountains"},{original:c,description:"Mountain Lake Sailing"},{original:l,description:"Alpine Spring Meadows"},{original:p,description:"Nature Landscape"},{original:d,description:"Lighthouse Coast Sea"},{original:m,description:"Lighthouse Coast Sea"},{original:h,description:"Lighthouse Coast Sea"},{original:f,description:"Lighthouse Coast Sea"},{original:M,description:"Lighthouse Coast Sea"},{original:u,description:"Lighthouse Coast Sea"},{original:j,description:"Lighthouse Coast Sea"},{original:G,description:"Lighthouse Coast Sea"}],b=document.querySelector(".photos-gallery"),v=I.map(({original:a})=>`
    <li class="gallery-item">
	<a class="gallery-link" data-fancybox="gallery" href=${a}>
		<img 
			class="gallery-image" 
			src=${a} 
			alt=""
			/>
	</a>
    </li>
  `).join("");try{b.insertAdjacentHTML("beforeend",v)}catch{console.log("not a problem")}i.bind("[data-fancybox]",{loop:!0,animationEffect:"fade",hideScrollbar:!1,Carousel:{transition:"slide"},caption:function(a,o){var e;return((e=o.thumbEl)==null?void 0:e.alt)||""}});
//# sourceMappingURL=commonHelpers.js.map
