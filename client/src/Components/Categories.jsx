import CategoryItem from './CategoryItem';
import { categories } from '../data';
import { Container } from './Styles/categories';

const Categories = () => {
  return <Container>
    {categories.map(item => (
      <CategoryItem item={item} key={item.id}/>
    ))}
  </Container>;
};

export default Categories;
