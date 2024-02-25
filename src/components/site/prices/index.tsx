import React from 'react';
import PriceItem from "@/components/site/prices/partials/price_item";


const Prices = () => {
    return (
        <div className="flex flex-col border-y border-gray-300 py-16 px-32 justify-center items-center">
            <h3 className="font-extrabold text-black text-3xl text-start pb-12">
                Choose what fits you right
            </h3>
            <div
                className="flex flex-row gap-6 w-full h-fit">
                <PriceItem price={'200'}
                           description={'Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint.'}
                           pointers={[
                               'Voluptatem quaerat non architecto',
                               'Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe',
                               'Possimus quis earum veniam quasi aliquam eligendi'
                           ]}
                />
                <PriceItem price={'500'}
                           variant="default"
                           description={'Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint.'}
                           pointers={[
                               'Voluptatem quaerat non architecto',
                               'Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe',
                               'Possimus quis earum veniam quasi aliquam eligendi'
                           ]}
                />
                <PriceItem price={'300'}
                           description={'Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint.'}
                           pointers={[
                               'Voluptatem quaerat non architecto',
                               'Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe',
                               'Possimus quis earum veniam quasi aliquam eligendi'
                           ]}
                />
            </div>
        </div>
    );
};

export default Prices;