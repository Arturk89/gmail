import { Inbox, LocalOffer, People } from "@material-ui/icons";

export const emailOverlaps = [
    {
        id: 1,
        icon: Inbox,
        title: "Primary",
        color: "red",
        selected: true
    },
    {
        id: 2,
        icon: People,
        title: "Social",
        color: "#1A73E8",
        selected: false
    },
    {
        id: 3,
        icon: LocalOffer,
        title: "Promotions",
        color: "green",
        selected: false
    },
]