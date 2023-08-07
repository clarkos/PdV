import Image from 'next/image'
import Link from 'next/link'


const SocialContact = () => {

  const social = [
    {
      name: "Facebook",
      icon: "fb.svg"
    },{
      name: "Instagram",
      icon: "instagram.svg"
    },{
      name: "YouTube",
      icon: "youtube.svg"
    },{
      name: "X (Twitter)",
      icon: "twitter.svg"
    }
  ]

  const contacto = [
    "Mar del Plata",
    "Bs As",
    "Argentina",
  ]

  return (
    <div className='flex justify-between text-xs font-bold relative top-3'>
      <ul className='flex items-center justify-start space-x-4'>
        {social.map((item) => (
          <li key={item.name} className="z-40 cursor-pointer fill-white">
              <img src={`/${item.icon}`} alt={item.name} className='w-3'/>
          </li>
        ))}
      </ul>

      <ul className='flex items-center justify-end space-x-2'>
        {contacto.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialContact