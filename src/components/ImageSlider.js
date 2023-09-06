"use client"

import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function ImageSlider({ images }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className="overflow-hidden">
      <div className="overflow-hidden">

        <div ref={sliderRef} className="keen-slider slider overflow-hidden ">
          {images.map((image, index) => (
            <img key={index} className="keen-slider__slide max-w-[80vw] object-cover" src={image} alt="" />
          ))}
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider mt-2 thumbnail">
        {images.map((image, index) =>
        (<img key={index} className="h-20 w-auto keen-slider__slide" src={image} alt="" />
        ))}
      </div>
    </div>
  )
}
