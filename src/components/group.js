import { useContext } from "react"; // Hook to access React context.
import { DisplayContext } from "../context/kanbancontext"; // Context with display settings.
import classes from "./group.module.css"; // CSS module for group styling.
import Icon from "./icon"; // Component for icons based on group type.
import User from "./user"; // Component to display user info.
import images from "./imageutils"; // Utility for mapping images.
import addIcon from '../icons_FEtask/add.svg'; // Import add SVG for the plus icon
import menuIcon from '../icons_FEtask/3-dot-menu.svg'; // Import 3-dot menu SVG for the more options icon
import Ticket from "./ticket"; // Ticket component for individual tickets.

const Group = ({ title, data }) => {
    const { groupBy } = useContext(DisplayContext); // Consuming context to determine grouping criteria.

    // JSX layout for a group of tickets, includes a header and list of tickets.
    return (
        <div className={classes.group}>
            {/* Main container for a group */}
            <div className={classes.group__header}>
                {/* Header section of the group */}
                <div className={classes.group__information}>
                    {/* Group information including title and count */}
                    {groupBy === "status" && ( // Display icon for status group if applicable
                        <Icon groupBy={groupBy} query={title} />
                    )}
                    {groupBy === "userId" && ( // Display user info for user group if applicable
                        <User
                            src={images[title]}
                            alt={title}
                            isUserAvailable={data.isUserAvailable}
                        />
                    )}
                    {groupBy === "priority" && ( // Display icon for priority group if applicable
                        <Icon groupBy={groupBy} query={title} />
                    )}
                    <div className={classes.group__title}>{title}</div>
                    {/* Title of the group */}
                    <div className={classes.group__count}>
                        {data.tickets.length}
                        {/* Number of tickets in the group */}
                    </div>
                </div>
                <div className={classes.group__actions}>
                    {/* Action icons for the group */}
                    <img 
                        src={addIcon} 
                        alt="Add Ticket" 
                        className={classes.group__icon} 
                        style={{ width: "24px", height: "24px" }} 
                    />
                    {/* Use add.svg for adding new tickets */}
                    <img 
                        src={menuIcon} 
                        alt="More Options" 
                        className={classes.group__icon} 
                        style={{ width: "24px", height: "24px" }} 
                    />
                    {/* Use 3-dot-menu.svg for more options */}
                </div>
            </div>
            <div className={classes.group__tickets}>
                {/* Container for tickets */}
                {data.tickets.map(
                    (
                        ticket // Map each ticket data to a Ticket component
                    ) => (
                        <Ticket key={ticket.id} ticket={ticket} />
                    )
                )}
            </div>
        </div>
    );
};

export default Group; // Export Group component for use in Board component.
