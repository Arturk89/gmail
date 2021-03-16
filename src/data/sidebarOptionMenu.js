import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'

export const sidebarMenu = [
    {
        id: 1,
        icon: InboxIcon,
        title: "Inbox",
        number: 12,
        selected: true
    },
    {
        id: 2,
        icon: StarIcon,
        title: "Starred",
        number: 7,
        selected: false
    },
    {
        id: 3,
        icon: AccessTimeIcon,
        title: "Snoozed",
        number: 6,
        selected: false
    },
    {
        id: 4,
        icon: LabelImportantIcon,
        title: "Important",
        number: 2,
        selected: false
    },
    {
        id: 5,
        icon: NearMeIcon,
        title: "Sent",
        number: 21,
        selected: false
    },
    {
        id: 6,
        icon: NoteIcon,
        title: "Drafts",
        number: 4,
        selected: false
    },
    {
        id: 7,
        icon: ExpandMoreIcon,
        title: "More",
        number: 1,
        selected: false
    },
]

export const bottomMenu = [
    {
        id: 1,
        icon: PersonIcon
    },
    {
        id: 2,
        icon: DuoIcon
    },
    {
        id: 3,
        icon: PhoneIcon
    }
]