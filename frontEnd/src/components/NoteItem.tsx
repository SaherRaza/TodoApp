import { FC } from "react";
import AppButton from "./AppButton";

interface Props {
    title?: string;
    description?: string;
    onEditClick?(): void;
    onDeleteClick?(): void;
    onViewClick?(): void;
}

const NoteItem: FC<Props> = ({ title, description, onEditClick, onDeleteClick, onViewClick }) => {
    return (
        <div className="bg-white shadow-md rounded p-5" >
            <p className="font-semibold mb-4 text-gray-700">{title}</p>
            {description ? <p className="ml-2 py-2 text-lg">{description}</p> : null}
            <div className="space-x-4">
                <AppButton onClick={onViewClick} title={description ? "Hide" : "View"} type="regular" />
                <AppButton onClick={onEditClick} title="Edit" type="normal" />
                <AppButton title="Delete" onClick={onDeleteClick} type="danger" />
            </div>
        </div>
    );

};

export default NoteItem;