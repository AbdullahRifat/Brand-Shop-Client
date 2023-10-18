/* eslint-disable react/prop-types */




import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const Slider = ({filteredBrands}) => {
 

  const {img1,img2,img3} = filteredBrands
 
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 100)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )


  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1"><img className="w-full mx-auto object-cover h-1/2" src={img1} alt="" /></div>
        <div className="keen-slider__slide number-slide2"><img className="w-full mx-auto object-cover h-1/2" src={img2} alt="" /></div>
        <div className="keen-slider__slide number-slide3"><img className="w-full mx-auto object-cover h-1/2" src={img3} alt="" /></div>
      </div>
    </>
  )
}

export default Slider