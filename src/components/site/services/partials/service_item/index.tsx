import React from 'react';
const ServiceItem = ({content}:{content: React.ReactNode}) => {
    return (
        <div className="flex justify-center items-center border border-gray-300 py-1 px-8 rounded-lg w-44 h-20">
            {content}
        </div>
    );
};

export default ServiceItem;