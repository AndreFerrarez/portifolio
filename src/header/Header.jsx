import './header.css';

export default function Header (){
    return(
        <header className='header'>
        <div className='header-esquerdo'>
          <div className='header-bar'>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className='header-menu'>menu</div>
        </div>
        <div className='header-center'>Aj</div>
        <div className='header-direito'>  
          <a href='/#' >Discover</a>
        </div>

        
      </header>
    );
}