"use client"
import { Prisma } from "@/app/generated/prisma/client";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState } from "react";


interface Props {
    categories: Prisma.CourseCategoryGetPayload<{ include: null }>[];
}

export function CategoryMenu({ categories }: Props) {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return <div>
        <div className="bg-white border border-gray-200 rounded shadow-sm">
            {categories.map((cat, idx) => (
                <div key={cat.id} className="flex justify-between items-center px-4 py-2.5 border-b border-gray-100 last:border-0 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-700 cursor-pointer transition-colors">
                    <span>{cat.name}</span>
                    <span className="text-gray-300 text-lg">+</span>
                </div>
            ))}
        </div>
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton>

                <ListItemText primary="Sent mail" />
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    </div>
}