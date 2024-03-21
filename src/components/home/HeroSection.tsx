import { HeroParallax } from "../ui/hero-parallax";
export function HeroSection() {
  return(
  <div className="w-screen">
  <HeroParallax products={products} />
  </div>)
}
export const products = [
  {
    title: "Lab Test",
    link: "/doctors",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Lab Test",
    link: "/doctors",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "/doctors",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "/doctors",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "/doctors",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/editrix.png",
},
{
    title: "Pixel Perfect",
    link: "/doctors",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
},

{
    title: "Algochurn",
    link: "/doctors",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
},
{
    title: "Aceternity UI",
    link: "/doctors",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
},
{
    title: "Tailwind Master Kit",
    link: "/doctors",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
},
{
    title: "SmartBridge",
    link: "/doctors",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
},
{
    title: "Renderwork Studio",
    link: "/doctors",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
},

{
    title: "Creme Digital",
    link: "/doctors",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
},
{
    title: "Golden Bells Academy",
    link: "/doctors",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
},
{
    title: "Invoker Labs",
    link: "/doctors",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/invoker.png",
},
{
    title: "E Free Invoice",
    link: "/doctors",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
