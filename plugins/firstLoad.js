export default function ({ app }) {
  // on router ready, ie first load
  app.router.onReady(function() {
    // delay by .5s
    setTimeout(function(){
      // remove opacity styling
      document.body.removeAttribute("style")
    }, 3000)
  })
}
