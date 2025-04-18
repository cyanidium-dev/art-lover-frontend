import CategoryFilter from "./CategoryFilter/CategoryFilter"
import CategorySort from "./CategorySort/CategorySort"
import FilterButton from "./CategoryFilter/FilterButton/FilterButton"

const CategoryControllers = () => {
  return (
      <div className="flex items-center justify-between w-full  mx-auto">
          <CategoryFilter />
          <CategorySort />
          
    </div>
  )
}

export default CategoryControllers