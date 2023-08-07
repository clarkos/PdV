import React from 'react'

const Video = () => {
  return (
    <section>
      <iframe className='w-[90vw] aspect-video rounded-md my-4 '
      src="https://www.youtube.com/embed/h7V5Ky2E_pk" 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" ></iframe>
    </section>
  )
}

export default Video