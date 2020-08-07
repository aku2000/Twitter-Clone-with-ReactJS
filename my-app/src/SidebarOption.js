import React from 'react';
import './SidebarOption.css';


//All components have first letters capitalized like Icon ->green color
function SidebarOption({ active, text, Icon })
{
    return (
        <div className={`sidebarOption ${active
            && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption
