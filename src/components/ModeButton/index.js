import React from "react"
import DayIcon from "images/daymode.svg"
import NightIcon from "images/nightmode.svg"
import { ImgButton } from "./ModeButton.styles"

const ModeButton = ({ darkMode, setDarkMode }) => (
  <ImgButton
    src={darkMode ? NightIcon : DayIcon}
    alt="mode"
    onClick={() => setDarkMode(prevState => !prevState)}
  />
)

export default ModeButton
