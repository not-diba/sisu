import React from 'react';

const ProductItem = ({title, text, icon}: { title: string, text: string, icon: React.ReactNode }) => {
    return (
        <div className="flex flex-row gap-4 w-full">
            <div className="w-1/5 h-full text-3xl items-center">
                {icon}
            </div>
            <div className="flex flex-col gap-6">
                <h3 className="text-lg">
                    {title}
                </h3>
                <p className="text-start text-gray-500">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ProductItem;