import Announcment from '../Components/Announcment';
import Categories from '../Components/Categories';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import Slider from '../Components/Slider';
import Newsletter from '../Components/Newsletter';

const Home = () => {
  return <div>
    <Announcment />
    <Navbar />
    <Slider />
    <Categories />
    <Products />
    <Newsletter />

  </div>;
};

export default Home;
