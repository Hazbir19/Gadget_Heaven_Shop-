import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CategoryList = ({ item }) => {
  const { category } = item;
  return (
    <>
      <div className="my-14">
        <NavLink
          to={`/category/${item.category}`}
          className={({ isActive }) =>
            `p-3 rounded-xl  ${
              isActive
                ? "bg-purple-500 text-white font-semibold text-xl"
                : "bg-gray-200 text-xl"
            } `
          }
        >
          {category}
        </NavLink>
      </div>
    </>
  );
};

CategoryList.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CategoryList;
