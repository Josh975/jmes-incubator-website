import React from 'react';

export default {
  title: 'StyleGuide/Typography/Text',
};

export const Text = () =>(
	<div>
		<p>Here’s a paragraph &lt;p&gt; filled with some <a href="#">Space Ipsum</a>. <b>Never in all their history have men been able truly to conceive</b> <em>of the world as one: a single sphere, a globe, having the qualities of a</em> globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman’s earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>
		<p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
		<hr className="my-4" />
		<ul className="list-disc list-inside marker:text-primary-blue" role="list">
			<li><a href="#">anchor link</a> &lt;a&gt;</li>
			<li>Here’s the <code>&lt;code&gt;</code> element</li>
			<li>deleted text: <del>Episodes I, II, III</del> &lt;del&gt;</li>
			<li><em>emphasis</em> &lt;em&gt;</li>
			<li>keyboard input: <kbd>control + space</kbd> &lt;kbd&gt;</li>
			<li>sample text: <samp>Error</samp> &lt;samp&gt;</li>
			<li>small: <small>Hydrogen</small> &lt;small&gt;</li>
			<li>small within small: <small>Hydrogen <small>Hydrogen</small></small> &lt;small&gt;</li>
			<li>strong: <strong>The Hammer</strong> &lt;strong&gt;</li>
			<li>subscript: <sub>Lower</sub> 0<sub>1<sub>2<sub>3</sub></sub></sub> &lt;sub&gt;</li>
			<li>superscript: I need a good <sup>superman</sup> joke to go here. 0<sup>1<sup>2<sup>3</sup></sup></sup> &lt;sup&gt;</li>
			<li>time: <time datetime="1985-12-09 19:00">Dec 9</time> &lt;time&gt;</li>
			<li>underline: <u>anything</u>. &lt;u&gt;</li>
		</ul>
	</div>
);
