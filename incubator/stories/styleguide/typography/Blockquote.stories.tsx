import React from 'react';

export default {
  title: 'StyleGuide/Typography/Blockquote',
};

export const Blockquote = () =>(
	<div>
		<blockquote className="text-xl italic font-bold text-text">
			<p>"Let’s light this fire one more time, Mike, and witness this great nation at its best. &lt;blockquote&gt; via <a href="#">Space Ipsum</a></p>
		</blockquote>
	</div>
);
