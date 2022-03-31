import { MdOutlineShoppingCart, MdOutlineSearch } from 'react-icons/md'
import { HiOutlineHeart } from 'react-icons/hi'
import { Container, Image, Info, Icon } from './Styles/product';
import { Link } from 'react-router-dom';


const Product = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <MdOutlineShoppingCart />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <MdOutlineSearch />
          </Link>
        </Icon>
        <Icon>
          <HiOutlineHeart />
        </Icon>
      </Info>
    </Container>
  )
};

export default Product;
