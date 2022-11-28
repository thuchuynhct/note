
export type NoteType = {
    id: number,
    tag: number,
    title: string,
    content: string,
    modifiedDate: string,
    createDate: string
}
export const Tag: { id: number, name: string, color: string }[] = [
    { id: 0, name: "Family", color: "text-tag-family" },
    { id: 1, name: "Work", color: "text-tag-work" },
    { id: 2, name: "Holidays", color: "text-tag-holidays" },
    { id: 3, name: "Events", color: "text-tag-events" }
]
export const ActionType = {
    CREATE: 1,
    EDIT: 2,
    REMOVE: 3
}
