const WHATSAPP_NUMBER = "6285196657405"; 
const products = [
 {id:1,name:"Onyx Wastafel",category:"Wastafel",type:"Wastafel",material:"Onyx",size:"Length 35cm x Width 40cm x Height 15cm",moq:10,shipping:"Sea Freight / Air Freight",texture:"Glossy/Rough",care:"Bersihkan dengan lap lembut. Dapat dipoles setiap 6 bulan.",desc:"Wastafel batu onyx dengan karakter pola alami yang unik. Setiap produk memiliki corak berbeda sehingga menjadi aksen istimewa pada ruang kamar mandi.",img:"https://i.imgur.com/BIquGyg.jpeg"},
 {id:2,name:"River Stone Wastafel",category:"Wastafel",type:"Wastafel",material:"River Stone",size:"Length 35cm x Width 40cm x Height 15cm",moq:10,shipping:"Sea Freight / Air Freight",texture:"Glossy/Rough",care:"Gunakan sabun lembut dan kain microfiber.",desc:"Wastafel batu sungai dengan bentuk alami dan tekstur khas bebatuan sungai, menghadirkan kesan natural, elegan, dan harmonis untuk melengkapi interior kamar mandi modern.",img:"https://i.imgur.com/4jlt0Po.jpeg"},
 {id:3,name:"Marble Wastafel",category:"Wastafel",type:"Wastafel",material:"Marble",size:"Length 35cm x Width 40cm x Height 15cm",moq:10,shipping:"Sea Freight / Air Freight",texture:"HGlossy/Rough",care:"Jangan menggunakan sikat kasar yang dapat menggores permukaan.",desc:"Wastafel batu sungai dengan bentuk alami dan tekstur khas bebatuan sungai, menghadirkan kesan natural, elegan, dan harmonis untuk melengkapi interior kamar mandi modern.",img:"https://i.imgur.com/3KQNxGU.jpeg"},
 {id:4,name:"Terrazzo Bathub",category:"Bathub",type:"Bathub",material:"Marble",size:"Length 35cm x Width 35cm x Height 50cm",moq:10,shipping:"Sea Freight / Air Freight",texture:"Glossy",care:"Hindari benturan benda keras agar permukaan tidak retak atau terkelupas.",desc:"Terrazzo Bathub dengan desain modern dan elegan, menampilkan perpaduan serpihan batu alami yang memberikan karakter unik pada setiap permukaannya. Menghadirkan kesan mewah, artistik, dan natural untuk menciptakan pengalaman relaksasi yang nyaman di kamar mandi.",img:"https://i.imgur.com/66t7soe.jpeg"},
 {id:5,name:"Terrazzo Pot",category:"Pot",type:"Pot",material:"Marble",size:"Length 28cm x Width 28cm x Height 58cm",moq:10,shipping:"Sea Freight / Air Freight",texture:"Natural",care:"Bersihkan debu dan kotoran dengan air bersih.",desc:"Pot terrazzo dengan desain modern dan artistik, menampilkan perpaduan serpihan batu alami yang menciptakan motif unik pada setiap permukaannya. Memiliki tampilan elegan dan natural, cocok digunakan sebagai dekorasi maupun tempat tanaman untuk mempercantik interior dan eksterior ruangan.",img:"https://i.imgur.com/0pZnAAd.jpeg"},
 {id:6,name:"Dispenser hand soap",category:"Dispenser",type:"Dispenser",material:"Marble",size:"Custom",moq:10,shipping:"Sea Freight / Air Freight",texture:"Polished",care:"Hindari penggunaan cairan pembersih berbahan kimia keras.",desc:"Dispenser sabun dengan desain minimalis dan elegan, memadukan fungsi praktis serta tampilan modern untuk melengkapi area kamar mandi. Cocok digunakan sebagai tempat sabun cair dengan sentuhan estetika yang harmonis.",img:"https://i.imgur.com/6yDqAuR.jpeg"}
];
const translations = {
 en:{topline:"Selected natural stone craft · Made with precision",nav_home:"Home",nav_about:"About",nav_products:"Products",nav_workshop:"Production",nav_gallery:"Gallery",nav_contact:"Contact",get_quote:"Request a Quote ↗",hero_eyebrow:"THE ART OF NATURAL STONE",hero_title:"Nature's beauty,<br><em>crafted to last.</em>",hero_copy:"Bringing out the unique character of natural stone through carefully selected materials and meticulous craftsmanship.",explore:"Explore Collection",discover:"Discover Ghargha Stone",hero_foot:"NATURAL MATERIAL · TIMELESS DESIGN",intro_title:"More than stone.<br><em>A distinct character.</em>",intro_copy:"Every stone has its own story, pattern, and character. Ghargha Stone transforms natural beauty into functional and decorative pieces for memorable spaces.",our_story:"Discover our story",stat:"Attention to detail<br>in every process",feature_title:"Nature shapes it.<br>We refine it.",feature_copy:"We combine natural materials, artisan skills, and thoughtful design to create pieces that remain relevant across generations.",see_process:"Explore our process",products_title:"Discover our<br><em>selected collection.</em>",products_sub:"From functional essentials to decorative accents, every piece celebrates the uniqueness of natural stone.",all:"All Products",garden:"Garden Stone",craft:"Crafts",custom_request:"Need a custom size? Contact us ↗",custom_title:"Your idea. Our material.<br><em>A personal creation.</em>",custom_copy:"Bring your custom design to life with material, dimensions, and finishes tailored to your project.",start_custom:"Start a consultation",work_title:"Shaped by nature.<br><em>Perfected by hand.</em>",work_sub:"We maintain quality from material selection through the final finishing stage.",process1:"Material Selection",process1d:"Selecting stone based on character, color, pattern, and intended use.",process2:"Cutting & Shaping",process2d:"Materials are processed with precise measurements and techniques.",process3:"Finishing & Quality Check",process3d:"Every detail, texture, and finish is checked before delivery.",gallery_title:"Details that speak.",gallery_sub:"Inspiration from natural materials, textures, and finished pieces.",export_title:"From Indonesia<br><em>to the world.</em>",export_copy:"We welcome project, wholesale, and export partnerships. MOQ, destination countries, and shipping terms can be discussed with our team.",export_cta:"Discuss export requirements ↗",download_title:"Information at<br><em>your fingertips.</em>",company_pdf:"Company Profile",catalog_pdf:"Product Catalog",quote_title:"Let's discuss<br><em>your requirements.</em>",quote_copy:"Tell us about your product, dimensions, quantity, or project needs. Our team will help prepare a quotation.",form_name:"Name / Company",form_email:"Email / WhatsApp",form_product:"Product of interest",form_detail:"Project details",form_quantity:"Order quantity",form_shipping:"Shipping method",shipping_hint:"Sea Freight is suitable for larger shipments; Air Freight is suitable for faster delivery. Cost and availability will be confirmed in the quotation.",send_wa:"Send via WhatsApp ↗",form_note:"This form opens WhatsApp with your inquiry summary.",footer_tag:"Natural stone. Thoughtfully crafted.",address_placeholder:"Workshop address: please add your company address."}
};
let currentLang="id";
function renderProducts(filter="all"){
 const list=filter==="all"?products:products.filter(p=>p.category===filter);
 document.getElementById("productGrid").innerHTML=list.map(p=>`<article class="product-card" data-id="${p.id}"><div class="product-photo"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.type}</span></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.material} · ${p.texture}</p></div><span class="product-arrow">↗</span></div></article>`).join("");
 document.querySelectorAll(".product-card").forEach(card=>card.addEventListener("click",()=>openProduct(Number(card.dataset.id))));
}
function openProduct(id){
 const p=products.find(x=>x.id===id); if(!p)return;
 const en=currentLang==="en";
 document.getElementById("modalContent").innerHTML=`<div class="modal-product"><img src="${p.img}" alt="${p.name}"><div><p class="eyebrow">${p.type.toUpperCase()} / GHARGHA STONE</p><h2>${p.name}</h2><p>${p.desc}</p><div class="specs"><div><span>${en?"DIMENSIONS":"DIMENSI"}</span>${p.size}</div><div><span>${en?"WEIGHT":"BERAT"}</span>${p.weight}</div><div><span>${en?"MATERIAL":"BAHAN"}</span>${p.material}</div><div><span>${en?"TEXTURE":"TEKSTUR"}</span>${p.texture}</div><div><span>${en?"MINIMUM ORDER (MOQ)":"MINIMUM ORDER (MOQ)"}</span>${p.moq} ${en?"unit(s)":"unit"}</div><div><span>${en?"SHIPPING OPTIONS":"PILIHAN PENGIRIMAN"}</span>${p.shipping}</div><div><span>${en?"CARE":"PERAWATAN"}</span>${p.care}</div><div><span>${en?"CUSTOMIZABLE":"CUSTOMIZABLE"}</span>${en?"Available":"Tersedia"}</div></div><a class="btn btn-gold" target="_blank" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent((en?"Hello, I am interested in ":"Halo, saya tertarik dengan ")+p.name+". Please share the price and details.")}">${en?"Ask via WhatsApp":"Tanya melalui WhatsApp"} ↗</a></div></div>`;
 const modal=document.getElementById("productModal");modal.classList.add("open");modal.setAttribute("aria-hidden","false");
}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelector(".filter.active")?.classList.remove("active");btn.classList.add("active");renderProducts(btn.dataset.filter)}));
document.querySelector(".modal-close").addEventListener("click",closeModal);document.querySelector(".modal-backdrop").addEventListener("click",closeModal);
function closeModal(){document.getElementById("productModal").classList.remove("open");document.getElementById("productModal").setAttribute("aria-hidden","true")}
document.querySelector(".menu-toggle").addEventListener("click",()=>document.querySelector(".nav").classList.toggle("show"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav").classList.remove("show")));
function setLanguage(lang){
 currentLang=lang;document.documentElement.lang=lang;
 document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
 document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(lang==="en"&&translations.en[key])el.innerHTML=translations.en[key];else if(lang==="id")location.reload()});
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
const quoteForm=document.getElementById("quoteForm");
const productSelect=quoteForm.querySelector('[name="product"]');
const quantityInput=quoteForm.querySelector('[name="quantity"]');
const moqHint=document.getElementById("moqHint");
function updateMoq(){
 const selected=products.find(p=>p.type===productSelect.value);
 const moq=selected?.moq||10;
 quantityInput.min=String(moq);
 if(Number(quantityInput.value)<moq) quantityInput.value=moq;
 moqHint.textContent=currentLang==="en"?`Minimum order (MOQ): ${moq} unit(s). Please contact us for project or wholesale quantities.`:`Minimum order (MOQ): ${moq} unit. Untuk jumlah proyek atau grosir, silakan konsultasikan.`;
}
productSelect.addEventListener("change",updateMoq);
quoteForm.addEventListener("submit",e=>{
 e.preventDefault();const f=new FormData(e.target);
 const quantity=Number(f.get("quantity"));
 const selected=products.find(p=>p.type===f.get("product"));
 const moq=selected?.moq||10;
 if(!Number.isInteger(quantity)||quantity<moq){quantityInput.setCustomValidity(`Jumlah minimum pesanan adalah ${moq} unit.`);quantityInput.reportValidity();return;}
 quantityInput.setCustomValidity("");
 const msg=`Halo Ghargha Stone, saya ingin meminta penawaran.\n\nNama/Perusahaan: ${f.get("name")}\nKontak: ${f.get("contact")}\nProduk: ${f.get("product")}\nJumlah pesanan: ${quantity} unit\nMinimum order (MOQ): ${moq} unit\nMetode pengiriman: ${f.get("shipping")}\nDetail: ${f.get("detail")||"-"}`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank");
});
updateMoq();
renderProducts();
