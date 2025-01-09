import { FallingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <>
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />

        </>

    );
}

export default Loader