if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise(async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()})),s.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},s=(s,n)=>{Promise.all(s.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(s)};self.define=(s,a,i)=>{n[s]||(n[s]=Promise.resolve().then(()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}})).then(e=>{const s=i(...e);return n.default||(n.default=s),n})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/_next/static/chunks/02a4c0d08adb15a34219d1f02559f783b2308e00.5a3440c7ffc1ec707e95.js",revision:null},{url:"/_next/static/chunks/29107295.5a789a95c3da97a9c120.js",revision:null},{url:"/_next/static/chunks/3c45670ba3159ea214226e4167ca57dcfb52016c.c3051a4379f1b24b489f.js",revision:null},{url:"/_next/static/chunks/4039b239a3d9a21273add93c5ad46931dbe40243.9d85810cd3ad97acbc1f.js",revision:null},{url:"/_next/static/chunks/4abe1605.bc7564fa166f0d34b14f.js",revision:null},{url:"/_next/static/chunks/7d034120d48afa087cc4c2def74b0840d5ce466e.84b63f10315431a1601c.js",revision:null},{url:"/_next/static/chunks/a9a7754c.212f0af03429b634372a.js",revision:null},{url:"/_next/static/chunks/c3661c3a47dd2ad4691d4608a2050df6c6a5990c.ecc5a5ca7e24216914bc.js",revision:null},{url:"/_next/static/chunks/cb1608f2.733a5b64dd42418be1df.js",revision:null},{url:"/_next/static/chunks/commons.9fa754888abcbc6d8729.js",revision:null},{url:"/_next/static/chunks/e65f98786ee2acc5f897db921994d4e81d1a0cd6.b2dfc77d538352f18bbc.js",revision:null},{url:"/_next/static/chunks/ee4542fd28fa03de9bfe801599b9d9042ae3a7b1.95319487b978f730a803.js",revision:null},{url:"/_next/static/chunks/framework.d342f5f3955b7f7d6277.js",revision:null},{url:"/_next/static/chunks/main-929024d2f388a32f5e3d.js",revision:null},{url:"/_next/static/chunks/pages/404-687b47c8d4fc63472a83.js",revision:null},{url:"/_next/static/chunks/pages/_app-6a0ff6788d8bc8fe4dda.js",revision:null},{url:"/_next/static/chunks/pages/_error-d3d205ec0038d8f3af1c.js",revision:null},{url:"/_next/static/chunks/pages/about-a2585080f772f8cb35e7.js",revision:null},{url:"/_next/static/chunks/pages/animations-d611bbf13c1a59f1032f.js",revision:null},{url:"/_next/static/chunks/pages/buttons/basics-7e564722091908829b4d.js",revision:null},{url:"/_next/static/chunks/pages/buttons/button-groups-9ec85f6b11e8bdd35178.js",revision:null},{url:"/_next/static/chunks/pages/buttons/glyphs-8a7db4a47a09f66c18d0.js",revision:null},{url:"/_next/static/chunks/pages/buttons/variants-bc0049da5786129847ea.js",revision:null},{url:"/_next/static/chunks/pages/docs-285a0d96a791fd17de2a.js",revision:null},{url:"/_next/static/chunks/pages/elements/avatar-ea847fa3184617880e15.js",revision:null},{url:"/_next/static/chunks/pages/elements/breadcrumbs-a23d26a0264c65d0d826.js",revision:null},{url:"/_next/static/chunks/pages/elements/cards-9ac191178a6e0f9ebfd5.js",revision:null},{url:"/_next/static/chunks/pages/elements/code-5266fd49f77cb31e8910.js",revision:null},{url:"/_next/static/chunks/pages/elements/links-ea3b0e38a3614e54467c.js",revision:null},{url:"/_next/static/chunks/pages/elements/lists-ed37aabb199fd3701c51.js",revision:null},{url:"/_next/static/chunks/pages/elements/modal-d9662ed7494a4b635a8e.js",revision:null},{url:"/_next/static/chunks/pages/elements/pagination-d03c04412a73a2ad0b58.js",revision:null},{url:"/_next/static/chunks/pages/elements/placeholder-0c01dc90578b25581bb1.js",revision:null},{url:"/_next/static/chunks/pages/elements/progress-5770b348e4875bd18a90.js",revision:null},{url:"/_next/static/chunks/pages/elements/table-d4f9c980afd8004496b7.js",revision:null},{url:"/_next/static/chunks/pages/elements/tabs-254ade6fbf06827e77cb.js",revision:null},{url:"/_next/static/chunks/pages/elements/tags-b25a7a9150f83ab9245b.js",revision:null},{url:"/_next/static/chunks/pages/elements/tiles-dac90b3f8e39ad1b6925.js",revision:null},{url:"/_next/static/chunks/pages/elements/toast-f5b8a4ab8ed1dee93c03.js",revision:null},{url:"/_next/static/chunks/pages/elements/tooltips-de68976dbf775364a3c8.js",revision:null},{url:"/_next/static/chunks/pages/elements/trees-2fe2e0ad946e34b0a8ac.js",revision:null},{url:"/_next/static/chunks/pages/fonts/font-weights-26167023345c0664cd4e.js",revision:null},{url:"/_next/static/chunks/pages/fonts/glyphs-29880957dfd7d550a1ed.js",revision:null},{url:"/_next/static/chunks/pages/fonts/headings-8c25ce3f3a2cf17ff22e.js",revision:null},{url:"/_next/static/chunks/pages/fonts/letter-spacing-2323d3336b60cd663a65.js",revision:null},{url:"/_next/static/chunks/pages/fonts/size-edbc068260f96a0b8fcc.js",revision:null},{url:"/_next/static/chunks/pages/fonts/text-elements-95c3cdf4071e06b10371.js",revision:null},{url:"/_next/static/chunks/pages/forms/checkbox-a6411d8c7a110d91e4a4.js",revision:null},{url:"/_next/static/chunks/pages/forms/glyphs-ab009ef72891970ac73e.js",revision:null},{url:"/_next/static/chunks/pages/forms/groups-3949c35744d4aa836137.js",revision:null},{url:"/_next/static/chunks/pages/forms/inputs-a42b1b4839a2fdb159fd.js",revision:null},{url:"/_next/static/chunks/pages/forms/radio-f5d668e1ff9283f245a8.js",revision:null},{url:"/_next/static/chunks/pages/forms/toggle-1f2f405f6345afbeecbd.js",revision:null},{url:"/_next/static/chunks/pages/fundamentals/colors-8ad5933dcebd5d1954a6.js",revision:null},{url:"/_next/static/chunks/pages/fundamentals/default-styles-1eb24b1a0ac2ae675eda.js",revision:null},{url:"/_next/static/chunks/pages/fundamentals/sizes-224c32a6a0a87d76984a.js",revision:null},{url:"/_next/static/chunks/pages/fundamentals/typography-0df45c5971fda8384fe3.js",revision:null},{url:"/_next/static/chunks/pages/fundamentals/viewports-6f2420fce79ee2feae5f.js",revision:null},{url:"/_next/static/chunks/pages/getting-started/configuration-96d2822ae9c85214fb2e.js",revision:null},{url:"/_next/static/chunks/pages/getting-started/developing-04ddb6bf76c7e3138d73.js",revision:null},{url:"/_next/static/chunks/pages/getting-started/examples-28f94a6b3419841dece6.js",revision:null},{url:"/_next/static/chunks/pages/getting-started/managing-build-size-9ad3c30d357d64c88cdc.js",revision:null},{url:"/_next/static/chunks/pages/getting-started/release-notes-5a207676be0b06c7d53d.js",revision:null},{url:"/_next/static/chunks/pages/getting-started/setup-1bf35a3d381281eeafcb.js",revision:null},{url:"/_next/static/chunks/pages/getting-started/start-guide-b912debb51d701562c32.js",revision:null},{url:"/_next/static/chunks/pages/getting-started/support-8625536af420159c6491.js",revision:null},{url:"/_next/static/chunks/pages/grid/gap-daffdaa5e82e33f5a1e1.js",revision:null},{url:"/_next/static/chunks/pages/grid/span-2c9fa205abb1efceb355.js",revision:null},{url:"/_next/static/chunks/pages/grid/templates-f42ef265a0f0947ada32.js",revision:null},{url:"/_next/static/chunks/pages/index-cdef1615444823cd9fa3.js",revision:null},{url:"/_next/static/chunks/pages/layout/columns-cbcf5a82c5d46e41a9e4.js",revision:null},{url:"/_next/static/chunks/pages/layout/divider-a05051e48f443382cd9b.js",revision:null},{url:"/_next/static/chunks/pages/layout/footer-fcb1ec4ec78b95c208f7.js",revision:null},{url:"/_next/static/chunks/pages/layout/frames-9dc7f57bd4d6b9eea36f.js",revision:null},{url:"/_next/static/chunks/pages/layout/header-8b14ce2f413332f142d2.js",revision:null},{url:"/_next/static/chunks/pages/layout/height-da5b20214c503c982b97.js",revision:null},{url:"/_next/static/chunks/pages/layout/hero-387ca775145d11f81b1b.js",revision:null},{url:"/_next/static/chunks/pages/layout/level-510c152157b97d766dc6.js",revision:null},{url:"/_next/static/chunks/pages/layout/margin-1949d040da539619d984.js",revision:null},{url:"/_next/static/chunks/pages/layout/max-height-311bd9f1d4de2faf8043.js",revision:null},{url:"/_next/static/chunks/pages/layout/max-width-469111ec57d3f9b64d17.js",revision:null},{url:"/_next/static/chunks/pages/layout/media-9924033022e978fa6815.js",revision:null},{url:"/_next/static/chunks/pages/layout/min-height-f023fa05ed362273247c.js",revision:null},{url:"/_next/static/chunks/pages/layout/min-width-4a7d188a237c13d7355d.js",revision:null},{url:"/_next/static/chunks/pages/layout/padding-78c103ceaee86ced93fd.js",revision:null},{url:"/_next/static/chunks/pages/layout/spacing-a898c1179e9f93a3d128.js",revision:null},{url:"/_next/static/chunks/pages/layout/width-a5e7265f4ce4ee7bbc96.js",revision:null},{url:"/_next/static/chunks/pages/new-89d7584fadac86e09fc0.js",revision:null},{url:"/_next/static/chunks/pages/playground-e25d4fd942653b8230c0.js",revision:null},{url:"/_next/static/chunks/pages/utils/absolutes-e00832a2d0f34507853b.js",revision:null},{url:"/_next/static/chunks/pages/utils/border-radius-b6ec6c229eb31ecf42ac.js",revision:null},{url:"/_next/static/chunks/pages/utils/box-shadow-477c216d9b844276ba04.js",revision:null},{url:"/_next/static/chunks/pages/utils/clearfix-a69ca48aed2c0615cd55.js",revision:null},{url:"/_next/static/chunks/pages/utils/display-6126e8060532fd4e9e8d.js",revision:null},{url:"/_next/static/chunks/pages/utils/flexbox-5f61d75d938975193f36.js",revision:null},{url:"/_next/static/chunks/pages/utils/gap-c45298083d37f06bf321.js",revision:null},{url:"/_next/static/chunks/pages/utils/misc-895e05e824c2d54b4aec.js",revision:null},{url:"/_next/static/chunks/pages/utils/opacity-abe60df62ee99679ce75.js",revision:null},{url:"/_next/static/chunks/pages/utils/overflow-49ca64b71a9ac3478196.js",revision:null},{url:"/_next/static/chunks/pages/utils/positions-2bb8a84844530f458b99.js",revision:null},{url:"/_next/static/chunks/pages/utils/zindex-5e95d7dc558926523dae.js",revision:null},{url:"/_next/static/chunks/polyfills-273a03d759e546bb3707.js",revision:null},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:null},{url:"/_next/static/css/84cf303f4d54992cc799.css",revision:null},{url:"/_next/static/css/e6b1e265e529ff1ea6db.css",revision:null},{url:"/_next/static/teoBKP7M9A75JOEXWEIXE/_buildManifest.js",revision:null},{url:"/_next/static/teoBKP7M9A75JOEXWEIXE/_ssgManifest.js",revision:null},{url:"/android-icon-144x144.png",revision:"07d244b0e154e1de914ee717744d529d"},{url:"/android-icon-192x192.png",revision:"a69041dc5ca7e64e43c84a15a98bc28c"},{url:"/android-icon-36x36.png",revision:"bdf25bfa55df8d7ba5e55bef7e58dcea"},{url:"/android-icon-48x48.png",revision:"146573ebee89ca1bfb1dcdd56638a18d"},{url:"/android-icon-72x72.png",revision:"14594022bb4e4f0d71a88a85a99bfa1b"},{url:"/android-icon-96x96.png",revision:"770d965173ccdd7f49f1a1271908a9f0"},{url:"/apple-icon-114x114.png",revision:"2f60854cf22ef63777a4802743a9e7b9"},{url:"/apple-icon-120x120.png",revision:"6bfbd6ec9a91648d1bcd096036d81a03"},{url:"/apple-icon-144x144.png",revision:"87d0133e1f18010032164beabf7662e2"},{url:"/apple-icon-152x152.png",revision:"791c932686939faefd611f98fda7d385"},{url:"/apple-icon-180x180.png",revision:"7edf7920d50d7032043708b325d172cc"},{url:"/apple-icon-57x57.png",revision:"47f85dab9105618ca5cdfcf943068bd5"},{url:"/apple-icon-60x60.png",revision:"8f8b2b3d2ede174d2cc3854a1fd1201f"},{url:"/apple-icon-72x72.png",revision:"4b6af7caffdd57a40cd9f1b5f046d171"},{url:"/apple-icon-76x76.png",revision:"56319432c68c90ad99a453ab2e67c8bc"},{url:"/apple-icon-precomposed.png",revision:"34539a295541aac25243302edf9a9d2a"},{url:"/apple-icon.png",revision:"3ee824ca3ff337278edd5155ea9923c1"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon-96x96.png",revision:"4903eb1430037599667b0bbdf9c74ec5"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/google6800534c5fed8770.html",revision:"93189728b32c934bc53dadc2df6e4750"},{url:"/img/become_a_patron_button.png",revision:"2e0f344703d7ffa55a814eac3f7671eb"},{url:"/img/component.svg",revision:"f4ba71344a52262d0f6f5d0572c80d67"},{url:"/img/credit-card.svg",revision:"eb738266ff82df97fdb2534e06936770"},{url:"/img/docs-placeholder.png",revision:"529b71611f2765116ffe6af159cd6593"},{url:"/img/docs-placeholder2.png",revision:"459bd9ff2ad93459375e6d425c2b3717"},{url:"/img/paypal.jpg",revision:"1499fcaa42eab24e05b85c4094c6a3e0"},{url:"/img/preview.png",revision:"78958768501585f89ef92e7e4f80c88e"},{url:"/img/utility.svg",revision:"fd90fa7f6be7ba2cea482004cfbeed77"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/ms-icon-144x144.png",revision:"497f7937d961fce92c945c426e5b1b30"},{url:"/ms-icon-150x150.png",revision:"fcc5e1d449de106a7ba0dd67a532526f"},{url:"/ms-icon-310x310.png",revision:"02a82c256fdcf514f69f180c5064e2d5"},{url:"/ms-icon-70x70.png",revision:"09714d62a2274008b638fdf3f996135e"},{url:"/robots.txt",revision:"cb333937db4fdf75f29294867cd772cf"},{url:"/sw.js",revision:"7a7a9fab4ca3224cad19254b6aba0be3"},{url:"/vercel.svg",revision:"0222c3eef0be0734c8cd707b37c55d7e"},{url:"/workbox-69b5a3b7.js",revision:"6d9b1ad764e2f8ac9f380e8de95c330b"}],{})}));
