import { Search, ShoppingCartSharp as ShoppingCartIcon } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, MenuItem } from './Styles/navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);

  return <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{ color: "gray", fontSize: 16 }} />
        </SearchContainer>
      </Left>
      <Center><Logo>Artificer</Logo></Center>
      <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>Log in</MenuItem>
        <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Link>
      </Right>
    </Wrapper>
  </Container>;
};

export default Navbar;
