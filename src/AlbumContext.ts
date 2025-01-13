import { createContext } from "react";
import type { AlbumProps } from "./@types/album";

export const AlbumContext = createContext<AlbumProps>({
    "im:artist": {
        attributes: ""
    },
    "im:image":  [
        {label: "", 
        attributes: {height: ""}
    }],
    "im:name": {label: "", attributes: {label: ""}},
    id: {
        label: "",
        attributes: {"im:id": ''}
    }
})