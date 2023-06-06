import React from "react";
import "./css/entries.css";
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ForumIcon from '@mui/icons-material/Forum';

function LowerPlaceholder(){
    return(
        <div>
            <Button variant="" className="sectButton" startIcon={<LanguageIcon className="globeIcon"/>}
             endIcon={<KeyboardArrowDownIcon className="ArrowDownIcon"/>}>
             <span>Language</span>
            </Button>
            <Button variant="" className="forumIcon" ><ForumIcon className="forumIcon2"/>
            </Button>
        </div>
        )
}
export default LowerPlaceholder;