import React from 'react';

import { Logo as LogoComponent } from './Logo';

export default {
  title: 'StyleGuide/Logos',
  component: LogoComponent,
};

export const Logos = () =>(
    <div className="grid gap-4">
        <div>
            <div className="bg-primary inline-block">
                <LogoComponent color="black" size="lg" />
            </div>
        </div>
        <div>
            <div className="bg-primary-purple inline-block">
                <LogoComponent color="white" size="lg" />
            </div>
        </div>
        <div>
            <div className="bg-accent inline-block">
                <LogoComponent color="black" />
            </div>
        </div>
        <div>
            <div className="bg-secondary inline-block">
                <LogoComponent color="white" />
            </div>
        </div>
    </div>
);
