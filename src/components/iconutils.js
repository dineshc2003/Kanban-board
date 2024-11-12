import backlogIcon from '../icons_FEtask/Backlog.svg';
import todoIcon from '../icons_FEtask/To-do.svg';
import inProgressIcon from '../icons_FEtask/in-progress.svg';
import doneIcon from '../icons_FEtask/Done.svg';
import canceledIcon from '../icons_FEtask/Cancelled.svg';
import noPriorityIcon from '../icons_FEtask/No-priority.svg';
import urgentIcon from '../icons_FEtask/SVG-Urgent-Priority-colour.svg';
import highPriorityIcon from '../icons_FEtask/Img-High-Priority.svg';
import mediumPriorityIcon from '../icons_FEtask/Img-Medium-Priority.svg';
import lowPriorityIcon from '../icons_FEtask/Img-Low-Priority.svg';

// statusIcons maps various task statuses to specific icons (SVGs)
export const statusIcons = {
    Backlog: <img src={backlogIcon} alt="Backlog" style={{ width: "16px", height: "16px" }} />, // Represents a task in the backlog
    Todo: <img src={todoIcon} alt="Todo" style={{ width: "16px", height: "16px" }} />, // Represents a task that is to do
    "In progress": <img src={inProgressIcon} alt="In Progress" style={{ width: "16px", height: "16px" }} />, // Represents a task that is in progress
    Done: <img src={doneIcon} alt="Done" style={{ width: "16px", height: "16px" }} />, // Represents a task that is done
    Canceled: <img src={canceledIcon} alt="Canceled" style={{ width: "16px", height: "16px" }} />, // Represents a task that is canceled
};

// priorityIcons maps various priority levels to specific icons (SVGs)
export const priorityIcons = {
    "No priority": <img src={noPriorityIcon} alt="No Priority" style={{ width: "16px", height: "16px" }} />, // Represents a task with no priority
    Urgent: <img src={urgentIcon} alt="Urgent" style={{ width: "16px", height: "16px" }} />, // Represents a task with urgent priority
    High: <img src={highPriorityIcon} alt="High Priority" style={{ width: "16px", height: "16px" }} />, // Represents a task with high priority
    Medium: <img src={mediumPriorityIcon} alt="Medium Priority" style={{ width: "16px", height: "16px" }} />, // Represents a task with medium priority
    Low: <img src={lowPriorityIcon} alt="Low Priority" style={{ width: "16px", height: "16px" }} />, // Represents a task with low priority
};

