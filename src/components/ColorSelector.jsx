import { useColor } from "../context/ColorContext";

const ColorSelector = () => {
    const { color, changeColor } = useColor();

    return (
    <>
        <label htmlFor="color">Elige color:</label>
        <input type="color" name="color" value={color} onChange={(e) => changeColor(e.target.value)} />
    </>
    )
}

export default ColorSelector;