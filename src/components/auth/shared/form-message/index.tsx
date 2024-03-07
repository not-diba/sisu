import React from 'react';
import {cn} from "@/lib/utils";
import {CheckCircledIcon, ExclamationTriangleIcon} from "@radix-ui/react-icons";

interface FormMessageProps {
    message?: string
    messageType: 'danger' | 'success'
}

export const FormAlertMessage = ({message, messageType}: FormMessageProps) => {

    const messageColor = {
        'bg-destructive/15 text-destructive': messageType === 'danger',
        'bg-emerald-500/15 text-emerald-500': messageType === 'success'
    }

    if (!message) return <></>

    return (
        <div className={cn('p-3 rounded-md flex items-center gap-x-2 text-sm', messageColor)}>
            {messageType === 'danger' && <ExclamationTriangleIcon className="size-4"/>}
            {messageType === 'success' && <CheckCircledIcon className="size-4"/>}
            <p>{message}</p>
        </div>
    );
};
