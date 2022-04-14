import {useEffect, useState} from 'react';
import axios from 'axios';
import data from '../data.js'
import {Link} from 'react-router-dom';

function HomeScren() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () =>{
            const result = await axios.get('/api/products');
            setProducts(result.data)
        };
        fetchData();
    },[]);
  return (
    <div>
        <section className="home-section" id="home">
        <div className="home-bg"></div>
        <div className="container">
        <div className="home-content row">
            <div className="home-text">
            <h1>At Home Restaurant</h1>
            <a href="#menu" className="btn btn-default">Order Now</a>
            </div>
        </div>
        </div>
    </section>
    <section className="about-section" id="about">
        <div className="container">
        <div className="row">
            <div className="section-title">
            <h2>About Us</h2>
            </div>
        </div>
        <div className="row">
            <div className="about-text">
            <h3>Welcome To AtHome</h3>
            <p>
                We specialise in good homemade food, and delivery it at yours.
                You can come through our resturant for a dine in away from home
                or you can order here and get it delivered at home. Regardless
                you will be at home.
            </p>
            <a href="#menu" className="btn btn-default">Check Our Menu</a>
            </div>
            <div className="about-img">
            <div className="img-box">
                <h3>15+ years of experience</h3>
                <img src="images/footer.jpg" alt="about img" />
            </div>
            </div>
        </div>
        </div>
    </section>
    <section className="menu-section sec padding" id="menu">
    <div className="container">
        <div className="row">
        <div className="section-title">
            <h2>Our Menu</h2>
        </div>
        </div>
        <div className="products">
        {
        data.products.map((product) =>(
            <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                    <img src={product.image} alt={product.name}/>
                </Link>
                <div className="product-info">
                    <Link to={`/product/${product.slug}`}>
                        <p>
                        {product.name}
                        </p>
                    </Link>
                    <p>
                    <strong>£{product.price}</strong>
                    </p>
                    <button>Add To Cart</button>
                </div>
            </div>
        ))
        }
        </div>
    </div>
    </section>
    <section className="about-section" id="resturant">
        <div className="container">
        <div className="row">
            <div className="section-title">
            <h2>Come See Us!</h2>
            </div>
        </div>
        <div className="row">
            <div className="about-text">
            <h3>Get In Touch</h3>
            <p>
                Address: Leicester <br />
                Phone: +44 123 456 789 Email:
                <br />AtHome@yourresturant.com
            </p>
            <a href="#menu" className="btn btn-default">Check Out Menu</a>
            </div>
            <div className="ah-img">
            <img src="images/AtHome.jpg" alt="athome-img" />
            </div>
        </div>
        </div>
    </section>
    <footer className="footer">
        <div className="container">
            <div className="row">
            <div className="footer-item">
                <h3>Our location</h3>
                <p>
                LE1, Leicester <br />
                St Martin Square
                </p>
            </div>
            <div className="footer-item">
                <h3>Opening hours</h3>
                <p>
                Monday to Sunday <br />
                9:00 AM - 10:00 PM
                </p>
            </div>
            <div className="footer-item">
                <h3>contact us</h3>
                <p>+44 0712 345 678</p>
                <p>Athome@yourresturant.com</p>
            </div>
            </div>
            <div className="row">
            <div className="copyright">&copy; 2022 - Designed by Sarah Badibanga</div>
            </div>
        </div>
      </footer>
</div>
  );
}

export default HomeScren