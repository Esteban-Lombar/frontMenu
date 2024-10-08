import './Home.css'

function Home () {

    
    return <>
    <div className="menu-container">
      <h1 className="menu-title">MENU BURGER</h1>
      <div className='container-menu'>
        <div className='container-info'>
            <div className="menu-section">
                <h2 className="menu-category">BURGER</h2>
                <div className="menu-item">
                <p className="burger-name">PISCES</p>
                <p className="burger-description">Pisces is a zodiac constellation</p>
                <p className="burger-price">$9.99</p>
                </div>
                <div className="menu-item">
                <p className="burger-name">AQUARIUS</p>
                <p className="burger-description">Aquarius means "the water-bearer"</p>
                <p className="burger-price">$9.99</p>
                </div>
                <div className="menu-item">
                <p className="burger-name">ANDROMEDA</p>
                <p className="burger-description">Each constellation is a region of the sky</p>
                <p className="burger-price">$9.99</p>
                </div>
            </div>

            <div className="menu-section">
                <h2 className="menu-category">BIG BURGER</h2>
                <div className="menu-item">
                <p className="burger-name">ARIES</p>
                <p className="burger-description">Aries is the first sign of the zodiac</p>
                <p className="burger-price">$9.99</p>
                </div>
                <div className="menu-item">
                <p className="burger-name">CANCER</p>
                <p className="burger-description">Cancer constellation is visible in spring</p>
                <p className="burger-price">$9.99</p>
                </div>
                <div className="menu-item">
                <p className="burger-name">HYDRA</p>
                <p className="burger-description">Hydra is the biggest constellation</p>
                <p className="burger-price">$9.99</p>
                </div>
            </div>

            <div className="menu-section">
            <h2 className="menu-category">PREMIUM</h2>
            <div className="menu-item">
            <p className="burger-name">CRUX</p>
            <p className="burger-description">Crux is the smallest constellation</p>
            <p className="burger-price">$9.99</p>
            </div>
            <div className="menu-item">
            <p className="burger-name">SIRIUS</p>
            <p className="burger-description">Sirius is the brightest star</p>
            <p className="burger-price">$9.99</p>
            </div>
            <div className="menu-item">
            <p className="burger-name">TAURUS</p>
            <p className="burger-description">Taurus is the oldest constellation</p>
            <p className="burger-price">$9.99</p>
            </div>
            </div>
        </div>
        <div className='menu-img'>
            <img src="https://i.pinimg.com/564x/ac/dd/f0/acddf0fb82f90fba4ed4907b615572cd.jpg" alt="Burger" />
        </div>
      </div>

      <div className="menu-footer">
        <p>FREE DELIVERY</p>
        <p>+22 456 8787</p>
      </div>
    </div>

   </>
}

export default Home;