import { useRef } from "react";

export default function Video() {
    const ref = useRef(null);
    console.log(ref);
    const handleplay = async () => {
        try {
            await ref.current.play();
        } catch (error) {
            console.error("Error playing video:", error);
        }
    };
    const handlepause = () => {
        ref.current.pause();
    };
    return (
        <div>
            <h1>Welcome to video player</h1>
            <video
                ref={ref}
                controls
                src="https://5e89dfdf-0c86-4b22-8c23-193e8c338867.mdnplay.dev/shared-assets/videos/flower.webm">
            </video>
            <hr></hr>
            <button onClick={handleplay}>Play</button>
            <button onClick={handlepause}>Pause</button>
        </div>
    )
}


