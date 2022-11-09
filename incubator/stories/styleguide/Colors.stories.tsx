import React from 'react';

export default {
  title: 'StyleGuide/Colors',
};

export const Colors = () =>(
    <div className="grid gap-4 grid-cols-6">
        <div className="pt-10 pb-4 pl-4 bg-primary col-span-3">
            <p className="text-text">primary</p>
        </div>
        <div className="pt-10 pb-4 pl-4 bg-primary-blue col-span-3">
            <p className="text-white">primary-blue</p>
        </div>
        <div className="pt-10 pb-4 pl-4 bg-accent col-span-2">
            <p className="text-text">accent</p>
        </div>
        <div className="pt-10 pb-4 pl-4 bg-secondary col-span-2">
            <p className="text-white">secondary</p>
        </div>
        <div className="pt-10 pb-4 pl-4 bg-text col-span-2">
            <p className="text-white">text</p>
        </div>
    </div>
);