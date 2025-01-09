const LoadMoreBtn = ({ onChangePage }) => {
    return (
        <>
            <button onClick={onChangePage}>
                Load more
            </button>
        </>
    );
};

export default LoadMoreBtn