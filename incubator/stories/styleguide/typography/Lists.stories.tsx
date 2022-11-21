import React from 'react';

export default {
  title: 'StyleGuide/Typography/Lists',
};

export const Lists = () =>(
	<div>
		<ul className="list-disc list-inside marker:text-primary-purple" role="list">
			<li>Unordered list &lt;ul&gt;</li>
			<li>List element</li>
			<li>Across the sea of space, the stars are other suns.</li>
			<li>Science cuts two ways, of course; its products can be used for both good and evil. But there’s no turning back from science. The early warnings about technological dangers also come from science.</li>
		</ul>
		<ol className="list-decimal list-inside mt-4 marker:text-primary-purple" role="list">
			<li>Unordered list &lt;ul&gt;</li>
			<li>List element</li>
			<li>Across the sea of space, the stars are other suns.</li>
			<li>Science cuts two ways, of course; its products can be used for both good and evil. But there’s no turning back from science. The early warnings about technological dangers also come from science.</li>
		</ol>
	</div>
);
