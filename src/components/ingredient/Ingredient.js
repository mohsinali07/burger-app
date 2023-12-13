import PropTypes from "prop-types"
import './Ingredient.css';

const Ingredient = ({ ingredient }) => {
    return (
        <div className={ingredient}></div>
    );
}

Ingredient.propTypes = {
  ingredient: PropTypes.any.isRequired
}

export default Ingredient;
