import { useRouteError } from "react-router-dom";
const Error=()=>{
    const ErrorData=useRouteError();
    console.log(ErrorData);
    return (
        <div>
            <h1>Oops Something went wrong</h1>
            <h1>Url Not found</h1>
            <h1>{ErrorData?.data}</h1>
        </div>
    )
}
export default Error;