import { useEffect, useRef, useState } from "react"; // Hook imports for state and references.
import classes from "./control.module.css"; // Style module for controls.
import Menu from "./menu"; // Menu component for display options.
import displayIcon from '../icons_FEtask/Display.svg'; // Import the Display SVG for the first icon
import downIcon from '../icons_FEtask/down.svg'; // Import the Down SVG for the dropdown icon

const Controls = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false); // State for menu visibility.
    const menuRef = useRef(); // Reference to the menu element for click handling.
    const buttonRef = useRef(); // Reference to the button element for click handling.

    // Toggles the visibility state of the menu.
    const toggleMenuVisibility = () => {
        setIsMenuVisible((oldState) => !oldState);
    };

    // Effect hook to handle clicks outside the menu and button to close the menu.
    useEffect(() => {
        const hideMenu = (event) => {
            // Checks if the click is outside the menu and button.
            if (
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            )
                setIsMenuVisible(false); // Closes the menu if the click is outside.
        };
        // Adds event listener to document if menu is visible.
        if (isMenuVisible) document.addEventListener("mousedown", hideMenu);
        // Cleanup function to remove the event listener.
        return () => {
            document.removeEventListener("mousedown", hideMenu);
        };
    }, [isMenuVisible]); // Effect dependencies.

    return (
        <div className={classes.controls}>
            {/* Container for controls */}
            <button onClick={toggleMenuVisibility} ref={buttonRef}>
                {/* Button to toggle menu */}
                <img
                    src={displayIcon}
                    alt="Display Settings" // Alt text for accessibility
                    className={classes.controls__icon} // Styling for the icon
                    style={{ width: "15px", height: "15px" }} // Adjust size if necessary
                />
                <div>Display</div> {/* Text label for the button */}
                <img
                    src={downIcon} // Use down.svg for the dropdown icon
                    alt="Toggle Dropdown"
                    className={classes.controls__icon} // Apply the same styling for consistency
                    style={{ width: "18px", height: "18px" }} // Adjust the size of the down icon
                />
                {/* Dropdown arrow */}
            </button>
            {isMenuVisible && <Menu ref={menuRef} />}
            {/* Conditionally renders the Menu component */}
        </div>
    );
};

export default Controls; // Exports the Controls component.



