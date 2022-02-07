import React from "react";

const Footer = () =>{
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                
            
             <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/About">About us</a></li>
                        <li><a href="/help">Help</a></li>
                    </ul>
                </div>
             <div className="footer-col">
                    <h4>Contact us</h4>
                 <ul>
                        <li ><a href="mailto: returnscalculator@gmail.com">Mail : returnscalculator@gmail.com</a></li>
                        <li ><a href="https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4605951,78.2592335,10.79z/data=!4m5!3m4!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.385044!4d78.486671">location : Hyderabad, India</a></li>
                    </ul>
                </div>
             <div className="footer-col">
                    <h4>Attributions</h4>
                    <ul>
                     <li><a href="https://www.flaticon.com/free-icons/mutual" title="mutual icons">Mutual icon by kerismaker - Flaticon</a></li>
                     <li><a href="https://www.flaticon.com/free-icons/stock-market" title="stock market icons">Stocks icon by Freepik - Flaticon</a></li>
                     <li><a href="https://www.flaticon.com/free-icons/deposit" title="deposit icons">Deposit icon by Pixel perfect - Flaticon</a></li>
                     <li><a href="https://www.flaticon.com/free-icons/money" title="money icons">lumpsum icon by vectorsmarket15 - Flaticon</a></li>
                     <li><a href="https://www.flaticon.com/free-icons/money" title="money icons">sip icon by Marz Gallery - Flaticon</a></li>
                    </ul>
                </div>
 
            </div>
        </div>
   </footer>
        
    );
}

export default Footer;