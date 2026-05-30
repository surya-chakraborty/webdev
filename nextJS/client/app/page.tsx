/*
why NextJS ? as it solves few probelms that React can't.
> waterfalling problem (multiple req-res cycle before actual content load: index.html and script.js from cdn then auth then get blogs)
> SEO optimization(crawlers don't run js so in a typical react app it only finds the empty root-div element in first exectution, no content awarness hence not indexed)
> Seperate backend api logic 
> sperate library react-router-dom for routing

NextJs Downsides: > as nextjs in deafult has server side rendered pages so it's expensive to distribute as we always need a server running
rather than as react does, we can distribute react using CDN.
> Very opinionated, very hard to move out of nextjs once all code has written already written.

NextJS Offerings: filebased routing with layouts, SEO optimized, server side rendered, Backend logic in same repo.
npx create-next-app@latest
What we learned here: 
> file based routing using subfolders in app and page.tsx and layout.tsx for child layouts
> Layout in subroutes 
> Merging routes using (auth) so we don't need to visit '/auth/sign' rather '/sigin' works.
> Compoents Directory for shared components
> client compoents for useeffect, useState, onClick event handlers etc. ("use client", which is server side in default)

*/


export default function Home() {
  return (
    <div>
      Hello Next JS!
    </div>
  );
}
