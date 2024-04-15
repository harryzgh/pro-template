function throttle (fn, delay) {
  let timeout = null
  return function () {
    if (timeout) return
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
      timeout = null
    }, delay)
  }
}

export default function lazyloadImagesFunc () {
  function setImg (imgDom) {
    imgDom.src = imgDom.dataset.src
    imgDom.classList.remove("lazy-load")
  }
  window.onload = function () {
    let lazyloadImages = document.querySelectorAll("img.lazy-load") 
    if (!("IntersectionObserver" in window)) {
      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          // 如果当前监测的图片进入视口
          if (entry.isIntersecting) {
            let image = entry.target
            setImg(image)
            // 解除当前图片的监测
            imageObserver.unobserve(image)
          }
        })
      })
      // 对所有图片进行监测
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image)
      })
    } else {  
      //
      function lazyload () {
        // window.scrollY === window.pageYOffset
        lazyloadImages.forEach(function(image) {
            if(image.offsetTop < (window.innerHeight + window.scrollY)) {
              setImg(image)
            }
        })
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload)
          window.removeEventListener("resize", lazyload)
          window.removeEventListener("orientationChange", lazyload)
        }
      }
      lazyload()
      document.addEventListener("scroll", throttle(lazyload, 1000))
      window.addEventListener("resize", throttle(lazyload, 5000))
      window.addEventListener("orientationChange", throttle(lazyload, 5000))
    }
  }
}

  