import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='relative w-screen text-white'style={{ paddingBottom:"5px",marginTop:'10px'}}>
      <footer className="footer-center h-auto md:flex md:justify-around md:gap-2 sm:block" >
          <div className="flex spaceFont justify-center text-xl">
            <Image src={"/logos/prodyLogoFooter.webp"} loader={()=>"/logos/ProdyLogo.webp"} width={30} height={45} alt="ISTE"/>rodyogiki
          </div>
          <p className="font-bold text-center p-4">
            Prodyogiki 2024 | NIT Hamirpur
          </p> 
          <span>
          <div className="flex justify-center gap-3">
            <a href='https://x.com/IsteNith' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a href='https://www.youtube.com/@teamistenit-h830' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a href='https://www.facebook.com/teamiste' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            <a href='https://github.com/istenith' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.575 0-0.285-0.011-1.039-0.016-2.039-3.338 0.725-4.042-1.605-4.042-1.605-0.546-1.387-1.334-1.757-1.334-1.757-1.089-0.745 0.084-0.73 0.084-0.73 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492 0.998 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.3-5.466-1.332-5.466-5.93 0-1.31 0.469-2.382 1.236-3.222-0.124-0.303-0.536-1.524 0.117-3.176 0 0 1.008-0.323 3.3 1.23 0.957-0.266 1.983-0.399 3.005-0.404 1.021 0.005 2.048 0.138 3.005 0.404 2.291-1.553 3.297-1.23 3.297-1.23 0.653 1.652 0.241 2.873 0.118 3.176 0.769 0.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.625-5.475 5.922 0.431 0.371 0.815 1.103 0.815 2.222 0 1.606-0.015 2.898-0.015 3.293 0 0.32 0.217 0.694 0.825 0.576 4.765-1.587 8.2-6.081 8.2-11.386 0-6.627-5.373-12-12-12z"></path></svg></a>
          </div>
        </span>
      </footer>
    </div>
  )
}

export default Footer
