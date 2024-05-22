import { useState } from "react";
import WarningBanner from "./WarningBanner";

export default function MainPage(props) {
    const [showWarning, setShowWarnig] = useState(false)

    const handleToggleClick = () => {
        setShowWarnig(prevShowWarnig => !prevShowWarnig)
    }
    return(
        <>
            <WarningBanner warning={showWarning} />
            <button onClick={handleToggleClick}>
            {showWarning ? '감추기' : '보이기'}
		    </button>
        </>
    )
}