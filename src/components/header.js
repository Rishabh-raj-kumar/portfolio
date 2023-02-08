import hecker from './img/hecker.png'
import React from 'react'

export default function Header(){

  const [showed , setShowed] = React.useState(true);

  function HandleActive(){
    let show = document.querySelector('.header');
     show.classList.contains('active') ? 
     show.classList.remove('active') :
     show.classList.add('active');

     setShowed(show => !show);
  }

    return(
        <header className="text-gray-600 body-font">
        <div className="header container mx-auto flex flex-wrap p-2 flex-col md:flex-row md:items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={hecker} alt="logo" className="md:w-20 md:h-20 w-12 h-12"></img>
            <span className="ml-3 text-2xl">Website</span>
          </a>
          <nav className="md:ml-auto flex flex-col md:flex-row items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="share inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-800 hover:text-yellow-600 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

          <button className="hamburg w-16 p-1 uppercase rounded-md top-5 right-4 md:hidden" onClick={HandleActive}>
          {showed === true ? 
          <i className="fa-solid fa-bars text-2xl"></i> : 
          <i class="fa-solid fa-xmark text-2xl"></i>}
          </button>
        </div>
      </header>
    );
}