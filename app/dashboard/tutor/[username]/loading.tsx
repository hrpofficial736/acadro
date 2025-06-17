
import { ImSpinner3 } from "react-icons/im";


const Loading = () => {
    return (
        <div className="f-c-row gap-2 text-secondaryText">
            <ImSpinner3 className="animate-spin" />Please wait...
        </div>
    )
}

export default Loading;