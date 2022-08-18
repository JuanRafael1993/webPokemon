import '../styled-components/pagination.scss';

const Pagination = (props) => {
	const { onLeftClick, onRightClick, page, totalPages } = props;

	return (
		<div className="pagination">
			<button onClick={onLeftClick}>&#8592;</button>
			<p>
				{page} de {totalPages}
			</p>
			<button onClick={onRightClick}>&#8594;</button>
		</div>
	);
};

export default Pagination;
