import '../css/Footer.css'

function Footer(params) {
    return(
    <footer className="footer-distributed">

      <div className="footer-left">
        <h3>Book<span>Store</span></h3>
        <p className="footer-company-name">Book Store © 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="">Support@company.com</a></p>
        </div>
      </div>

        <div className="footer-right">
            <p className="footer-company-about">
                <span>Acerca de la Compañia</span>
               BookStore es una empresa familiar que surge por la necesidad de vender los mejores libros al publico.
            </p>
        </div>

    </footer>
    )
}

export default Footer;