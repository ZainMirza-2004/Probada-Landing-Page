import PropTypes from 'prop-types';

function List(props) {
    const { category, items: itemList } = props;

    // itemList.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // itemList.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // itemList.sort((a, b) => a.calories - b.calories); // NUMERICAL ASCENDING
    // itemList.sort((a, b) => b.calories - a.calories); // NUMERICAL DESCENDING

    // const lowCalFruits = itemList.filter(item => item.calories < 100);
    // const highCalFruits = itemList.filter(item => item.calories >= 100);

    const ListItems = itemList.map(item => (
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.calories}</b>
        </li>
    ));

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{ListItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
    })).isRequired,
};

List.defaultProps = {
    category: "Category",
    items: [],
};

export default List;