import data from "../index";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className='relative w-full h-40 bg-amber-100'>
      <div className='flex flex-col items-center justify-center h-full text-white gap-1'>
        <p className='text-sm text-black'>© {year} Point of Sale System. All rights reserved.</p>
        <p className='text-xs text-black'>Made with ❤️ by Fabião Mainato</p>
        <div className="flex items-center justify-center gap-3 mt-2">
          {data.social.map((item) =>( 
            <a key={item.alt} href={item.url} target="_blank"><img src={item.imgPath} alt={item.alt} /></a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer