type CategoryType = {
  id: number;
  category: string;
};

const Category = ({ category }: { category: CategoryType }) => {
  return <div>{category.category}</div>;
};

export default Category;
