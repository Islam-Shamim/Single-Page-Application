import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    //console.log(error)
    return (
        <div>
            <h1>Oops!!!</h1>
            <h3>{error.statusText || error.message}</h3>
            {
                error.status === 404 && <div>
                    <h4>Go back where you from</h4>
                    </div>
            }
        </div>
    );
};

export default ErrorPage;