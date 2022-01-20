import React from 'react';
import * as Spectacle from 'spectacle';
import { Theme } from 'styled-system';
import * as Windmolen from '@vandebron/windmolen';
import '@vandebron/windmolen/dist/index.css';

import codeImage from './img/code.jpg';
import lovelace from './img/lovelace.jpeg';
import vscodeImage from './img/vscode.png';
import chromeImage from './img/chrome.png';
import terminalImage from './img/terminal.png';
import xkcd1Image from './img/xkcd1.png';
import timImage from './img/tim.jpg';
import htmltagsImage from './img/htmltags.png';
import nocssImage from './img/website-no-css.png';
import withcssImage from './img/website-with-css.png';

import './App.css';

const codeImages = [terminalImage, vscodeImage, chromeImage];

const theme: Theme = {
	colors: {
		background: '#fff',
		primary: '#333d47',
		secondary: '#717171',
		tertiary: '#717171',
		quaternary: '#333d47',
		quinary: '#333d47',
	},
	fontSizes: {
		primary: '48px',
		secondary: '32px',
	},
	fonts: {
		primary: 'Proxima Nova, sans-serif',
		secondary: 'Proxima Nova, sans-serif',
	},
	fontWeights: {
		primary: 700,
		secondary: 400,
	},
};

interface SlideProps {
	children: React.ReactNode;
	vCenter?: boolean;
	hCenter?: boolean;
	noTransition?: boolean;
	hideProgress?: boolean;
}
function Slide({
	children,
	vCenter,
	hCenter,
	noTransition = true,
	hideProgress,
}: SlideProps) {
	const fade = {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	};
	const none = { from: {}, enter: {}, leave: {} };

	return (
		<Spectacle.Slide
			backgroundColor="background"
			transition={noTransition ? none : fade}
		>
			<Spectacle.FlexBox
				justifyContent={vCenter ? 'center' : 'flex-start'}
				alignItems={hCenter ? 'center' : 'stretch'}
				flexDirection="column"
				flexGrow={1}
			>
				{children}
			</Spectacle.FlexBox>
			{!hideProgress && (
				<div
					style={{
						position: 'absolute',
						bottom: '12px',
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					<Spectacle.Progress color="#717171" size={6} />
				</div>
			)}
		</Spectacle.Slide>
	);
}

interface HeadingProps {
	children: React.ReactNode;
}
function Heading({ children }: HeadingProps) {
	return (
		<Spectacle.Heading
			fontSize="primary"
			fontWeight="primary"
			fontFamily="primary"
			color="primary"
			margin={0}
			textAlign="left"
		>
			{children}
		</Spectacle.Heading>
	);
}

interface ParagraphProps {
	center?: boolean;
	children: React.ReactNode;
}
function Paragraph({ center, children }: ParagraphProps) {
	return (
		<Spectacle.Text
			fontSize="secondary"
			fontWeight="secondary"
			fontFamily="secondary"
			color="secondary"
			textAlign={center ? 'center' : 'left'}
		>
			{children}
		</Spectacle.Text>
	);
}

interface ContentBlockProps {
	children: React.ReactNode;
	src: string;
	flipped?: boolean;
}
function ContentBlock({ children, src, flipped = false }: ContentBlockProps) {
	return (
		<Windmolen.ContentBlock
			images={[{ src, lazyload: false }]}
			flipped={flipped}
		>
			{children}
		</Windmolen.ContentBlock>
	);
}

interface FadeListProps {
	items: string[];
}
function FadeList({ items }: FadeListProps) {
	return (
		<Spectacle.UnorderedList>
			{items.map((item, index) => (
				<Spectacle.Appear stepIndex={index + 1} key={item}>
					<Spectacle.ListItem
						fontSize="secondary"
						fontWeight="secondary"
						fontFamily="secondary"
						color="secondary"
					>
						{item}
					</Spectacle.ListItem>
				</Spectacle.Appear>
			))}
		</Spectacle.UnorderedList>
	);
}

interface OrderedListProps {
	items: {
		name: string;
		header?: boolean;
	}[];
	unordered?: boolean;
}

function List({ items, unordered }: OrderedListProps) {
	const L = unordered ? Spectacle.UnorderedList : Spectacle.OrderedList;

	return (
		<L>
			{items.map(({ name, header }) => {
				const style = header ? 'primary' : 'secondary';

				return (
					<Spectacle.ListItem
						fontSize="secondary"
						fontWeight={style}
						fontFamily={style}
						color={style}
					>
						{name}
					</Spectacle.ListItem>
				);
			})}
		</L>
	);
}

interface CodeProps {
	language: string;
	children?: React.ReactNode;
}
function Code({ children, language }: CodeProps) {
	return (
		<Spectacle.CodePane language={language} highlightRanges={[]}>
			{children}
		</Spectacle.CodePane>
	);
}

function App() {
	return (
		<Spectacle.Deck theme={theme}>
			<Slide vCenter>
				<ContentBlock src={codeImage}>
					<Heading>Code Rules Everything Around Me</Heading>
					<Paragraph>C.R.E.A.M</Paragraph>
				</ContentBlock>
			</Slide>
			<Slide>
				<Heading>Agenda</Heading>
				<List
					unordered
					items={[
						{ name: 'Prerequisites' },
						{ name: 'Bit of History' },
						{ name: 'Fundamentals' },
						{ name: 'Break 1', header: true },
						{ name: 'HTML' },
						{ name: 'CSS' },
						{ name: 'Break 2', header: true },
						{ name: 'JavaScript' },
						{ name: 'Q&A' },
					]}
				/>
			</Slide>
			<Slide>
				<Heading>Prerequisites</Heading>
				<Spectacle.FlexBox flexGrow={1} alignItems="center">
					{[...codeImages].map((img, index) => (
						<Spectacle.Appear stepIndex={index + 1} key={img}>
							<Spectacle.Image
								src={img}
								maxWidth={200}
								style={{ margin: '0 40px' }}
							/>
						</Spectacle.Appear>
					))}
				</Spectacle.FlexBox>
			</Slide>
			<Slide>
				<Heading>Bit of History</Heading>
			</Slide>
			<Slide>
				<Heading>Bit of History</Heading>
				<ContentBlock src={lovelace}>
					<Paragraph>
						In 1843 Ada Lovelace was asked to translate a French engineering
						paper into English.
						<br />
						<br />
						During this translation, she wrote an algorithm that could be input
						into the machine and output a result.
						<br />
						<br />
						She became the worlds first computer programmer.
					</Paragraph>
				</ContentBlock>
			</Slide>
			<Slide>
				<Heading>01101000 01101001 or "hi"</Heading>
				<Paragraph>
					Computers use binary - the digits 0 and 1 - to store data.
					<br />
					<br />
					The circuits in a computer's processor are made up of billions of
					transistors. A transistor is a tiny switch that is activated by the
					electronic signals it receives. The digits 1 and 0 used in binary
					reflect the on and off states of a transistor.
					<br />
					<br />
					Any combination of the 'on' or 'off' states of these transistors is
					can be translated to anything a computer might output. For example
					sound from your speakers, or (LED) lights in your screen.
				</Paragraph>
			</Slide>
			<Slide>
				<Heading>An example</Heading>
				<Paragraph>
					In the US during Halloween, people use their front porch lights to
					signal to passersby whether or not they have candy. If the light is
					on, they have candy, if the light is off, they don't.
					<br />
					<br />
					Light on = candy = binary 1
					<br />
					Light off = no candy = binary 0
				</Paragraph>
			</Slide>
			<Slide>
				<Heading>A more advanced example</Heading>
				<Paragraph>
					It's 2021 and some people don't want to give their children sugar
					anymore. So how would the more health-conscious people signal those
					parents that they have fruit instead of candy?
					<br />
					<br />
					Now we can no longer represent it in a single binary state, because
					there are 4 options:
				</Paragraph>
				<FadeList
					items={[
						'Neither candy nor fruit',
						'Candy but no fruit',
						'Fruit but no candy',
						'Both candy and fruit',
					]}
				/>
			</Slide>
			<Slide vCenter hCenter>
				<Paragraph center>
					Now, let's say our modern people have two lights at their front porch.
					<br />
					How would you use these two lights to solve this?
				</Paragraph>
			</Slide>
			<Slide>
				<Heading>A more advanced example: epic reveal</Heading>
				<FadeList
					items={[
						'LIGHT 1 OFF + LIGHT 2 OFF = Neither candy nor fruit',
						'LIGHT 1 ON + LIGHT 2 OFF = Candy but no fruit',
						'LIGHT 1 OFF + LIGHT 2 ON = No candy but yes fruit',
						'LIGHT 1 ON + LIGHT 2 ON = Both candy and fruit',
					]}
				/>

				<Spectacle.Appear>
					<Paragraph>
						Binary states can be represented as 2<sup>n</sup> where{' '}
						<strong>n</strong> is the number of binary states. These binary
						states can be represented by lights (as in our example), transistors
						(in processors) or really anything else.
						<br />
						<br />
						In computers we use 1 and 0, which we call "bits".
					</Paragraph>
				</Spectacle.Appear>
			</Slide>
			<Slide>
				<Heading>It really is like this:</Heading>
				<Spectacle.Image src={xkcd1Image} />
			</Slide>
			<Slide vCenter hCenter>
				<Heading>How are we doing? Still awake?</Heading>
			</Slide>
			<Slide>
				<Heading>A tiny bit more theory: The Web!</Heading>
				<Paragraph>
					Jump into the future several decades. 1's and 0's are no longer new.
					We now have billions of 1's and 0's in every computer.
				</Paragraph>
				<Spectacle.Appear>
					<Paragraph>Cue: the World Wide Web.</Paragraph>
				</Spectacle.Appear>
			</Slide>
			<Slide vCenter>
				<ContentBlock src={timImage}>
					<Heading>The Web</Heading>
					<Paragraph>
						The WWW was invented by this dude 👉
						<br />
						<br />
						Who is a bit of a hero of mine!
						<br />
						<br />
						His name is Sir Tim Berners-Lee
					</Paragraph>
					<Spectacle.Appear stepIndex={1}>
						<Paragraph>
							He mainly developed two important things:
							<br />
							<br />
							<strong>HTTP and HTML</strong>
						</Paragraph>
					</Spectacle.Appear>
				</ContentBlock>
			</Slide>
			<Slide>
				<Heading>The Web</Heading>
				<Paragraph>
					<strong>HTTP</strong> is a protocol through which networked computers
					(and servers) exchange information
					<br />
					<br />
					<strong>HTML</strong> is a language that brings structure to textual
					and visual content on the web.
					<br />
					<br />
					<Spectacle.Appear stepIndex={1}>
						We won't go into <strong>HTTP</strong>, as you won't need to know it
						to be able to create websites / webapps, but we will focus on{' '}
						<strong>HTML</strong> today.
					</Spectacle.Appear>
				</Paragraph>
			</Slide>
			<Slide hCenter vCenter>
				<Heading>Break! Back in 15 minutes 😄</Heading>
			</Slide>
			<Slide>
				<Heading>Recap</Heading>
				<FadeList
					items={[
						"Computers think in binary states, a whole lot of 1's and 0's",
						"These 1's and 0's are translated to complex behaviour",
						'One example of such behaviour is networking, which we do in the World Wide Web.',
						'The two main components of the World Wide Web are the protocol HTTP and the language HTML.',
					]}
				/>
			</Slide>
			<Slide>
				<Heading>HTML</Heading>
				<Paragraph>
					HTML (HyperText Markup Language) is the most basic building block of
					any website. It defines the meaning and structure of web content.
					<br />
					<br />
					"Structure" means things like: what is the title of a webpage? Which
					piece of text is important? What is less important?
					<br />
					<br />
					Think of it like how you choose headings in Microsoft Word to show
					something is a new section or chapter in your document.
				</Paragraph>
			</Slide>
			<Slide noTransition>
				<Heading>HTML</Heading>
				<Paragraph>It looks like this:</Paragraph>
				<Code language="html">
					{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- The head contains the information about the website -->
  </head>
  <body>
    <!-- The body contains the content of the website -->
  </body>
</html>
          `}
				</Code>
				<Paragraph>
					The head and body elements are the two most basic parts of any HTML
					document, remember that for a second!
				</Paragraph>
			</Slide>
			<Slide noTransition>
				<Heading>HTML</Heading>
				<Paragraph>
					HTML consists of HTML elements, also known as HTML Tags.
				</Paragraph>
				<Spectacle.Image src={htmltagsImage} width="100%" />
			</Slide>
			<Slide>
				<Heading>HTML {'<head>'} element</Heading>
				<Paragraph>
					The {'<head>'} element is a container for metadata (data about data)
					about the HTML document. Metadata is not displayed.
					<br />
					<br />
					Metadata typically define the document title, character set, styles,
					scripts, and other meta information. For example:
				</Paragraph>
				<Code language="html">
					{`
  <head>
    <title>My Web App</title> <!-- The title, this will be displayed in the tab! -->
  </head>
          `}
				</Code>
			</Slide>
			<Slide>
				<Heading>HTML {'<body>'} element</Heading>
				<Paragraph>
					The {'<body>'} element defines the document's body.
					<br />
					<br />
					It contains all the contents of an HTML document, such as headings,
					paragraphs, images, hyperlinks, tables, lists, etc.
				</Paragraph>
				<Code language="html">
					{`
  <body>
    <header>This title is visible to the user!</header>

    <main>In here we often put our actual page content (images / text / buttons, anything!)</main>

    <footer>The footer often contains things like copyright notices.</footer>
  </body>
          `}
				</Code>
			</Slide>
			<Slide noTransition>
				<Heading>Other HTML elements</Heading>
				<Code language="html">
					{`
<h1>The most important heading in your webpage. Often the name of the company / app.</h1>
<h2>The second most important heading in your webpage. You can have multiple of these</h2>
<h3>The third most important heading in your webpage. You can have multiple of these</h3>
...
<h6>You get it right?</h6>

<p>These paragraph tags are used for longer pieces of text</p>

<button onClick="doSomething()">Click me!</button>

<a href="https://vandebron.nl">Anchor tags like these link to other web pages</a>

<img src="some-image.png" />
          `}
				</Code>
			</Slide>
			<Slide>
				<Heading>Coding time!</Heading>
				<Paragraph>
					This is what we will be building (more or less):{' '}
					<a target="_blank" href="/demo">
						View demo
					</a>
				</Paragraph>
			</Slide>
			<Slide noTransition>
				<Heading>Coding time!</Heading>
				<List
					items={[
						{
							name: "Go to the 'starter-code' directory you unzipped, and right-click the 'index.html' and choose 'Open With > Google Chrome.app'. This should show you an almost empty webpage that says 'Hello World!'",
						},
						{
							name: "Open VS Code. Click 'File > Open' and select the unzipped 'starter-code' directory from your finder. VS Code should now open that directory and you should see the 5 files in the directory in the sidebar.",
						},
						{
							name: "In the VS Code sidebar, double click the index.html file. When it opens in VS Code, change the text 'Hello World!' to 'My Web App'.",
						},
						{
							name: "In Google Chrome, refresh the webpage. The web page should now say 'My Web App'",
						},
					]}
				/>
				<Spectacle.Appear>
					<Paragraph>Did it work?</Paragraph>
				</Spectacle.Appear>
			</Slide>
			<Slide>
				<Heading>More HTML!</Heading>
				<Paragraph>
					Now that you have that up and running, we can bring some structure.
					<br />
					<br />
					Let's start by defining three main tags inside the {'<body>'} tag: a{' '}
					<strong>header</strong>, a <strong>main</strong> and a{' '}
					<strong>footer</strong>. Remember, this is how every tag works:
				</Paragraph>
				<Spectacle.Image src={htmltagsImage} width="100%" />
			</Slide>
			<Slide noTransition>
				<Heading>More HTML!</Heading>
				<Paragraph>Now let's do 3 more things:</Paragraph>
				<List
					items={[
						{
							name: "Add a nice page title inside the 'header'. Wrap that title in an <h1> tag.",
						},
						{
							name: "Add a copyright notice in the 'footer'. For example 'Copyright 2021 Your Name'",
						},
						{
							name: "Add a new tag that we didn't talk about yet inside the 'main' tag. The tag is called the <article> tag. It's often used for, for example, blog articles.",
						},
						{
							name: "Then, inside the 'article' tag, add a <h2>, a <img> and a <p> tag. These can just be placed right below each other",
						},
						{
							name: "Finally, write something (anything you want) inside the 'h2' and 'p' tags",
						},
					]}
				/>
				<Spectacle.Appear>
					<Paragraph>
						After all this, refresh the page in Chrome, and see if your new
						content appears.
					</Paragraph>
				</Spectacle.Appear>
			</Slide>
			<Slide noTransition>
				<Heading>Ehm, there is no image...</Heading>
				<Paragraph>
					The {'<img>'} tag is a little weird. Instead of writing{' '}
					{'<img></img>'} with some content inside the opening and closing tags,
					you will have to write it like this: {'<img />'}. It closes itself!
					<br />
					<br />
					This is because the 'img' tag does not need any content.
					<br />
					<br />
					Instead, it needs us to define an attribute. That attribute is the
					"source", which is shortened to "src".
					<br />
					<br />
					You define it like so:
				</Paragraph>
				<Code language="html">{`<img src="blog-image-1.jpg" /> <!-- Here the 'src' points to the image in your starter-code folder -->`}</Code>
			</Slide>
			<Slide vCenter hCenter hideProgress>
				<Heading>Demo time!</Heading>
			</Slide>
			<Slide>
				<Heading>CSS</Heading>
				<Paragraph>
					So, our webpage has content. But it won't win any beauty contests yet.
					<br />
					<br />
					We can fix that, with CSS.
					<br />
					<br />
					CSS stands for "Cascading Style Sheets".
					<br />
					<br />
					CSS is the language we use to style an HTML document.
					<br />
					<br />
					CSS describes how HTML elements should be displayed.
				</Paragraph>
			</Slide>
			<Slide noTransition hCenter>
				<Heading>It turns this stuff</Heading>
				{/* @ts-ignore */}
				<Windmolen.BoxShadow style={{ width: '70%' }}>
					<Spectacle.Image width="100%" src={nocssImage} />
				</Windmolen.BoxShadow>
			</Slide>
			<Slide noTransition hCenter>
				<Heading>Into this</Heading>
				{/* @ts-ignore */}
				<Windmolen.BoxShadow style={{ width: '70%' }}>
					<Spectacle.Image width="100%" src={withcssImage} />
				</Windmolen.BoxShadow>
			</Slide>
			<Slide>
				<Heading>CSS</Heading>
				<Paragraph>
					Inside VS Code, have a look at the file 'style.css'. It already
					contains a few CSS rules for the body tag.
					<br />
					<br />
					There are a lot of CSS rules you can use to style your HTML content. A
					few that we will use today are:
				</Paragraph>
				<Code language="css">
					{`
font-family: Arial; /* Define the lettertype / font we want to use */
font-size: 16px; /* Define how big we want the text to be */
color: blue; /* Define what color we want the text to be */

width: 200px; /* Define how wide in pixels we want this element to be */
height: 200px; /* Define how high in pixels we want this element to be */

margin: 20px; /* Define how many pixels distance we want this tag to have from surrounding tags */
padding: 20px; /* Define how many pixels distance we want this tag to have with its inner tags */
          `}
				</Code>
			</Slide>
			<Slide noTransition>
				<Heading>Coding time!</Heading>
				<List
					items={[
						{
							name: "Back to VS Code. Let's start by adding a single rule for the 'header'. Let's define a rule saying that the 'background' should be 'lightgrey'.",
						},
						{ name: 'Refresh Google Chrome. Did it work?' },
						{ name: 'Next, do the same thing for the footer.' },
						{
							name: "Next, add a bit of a magic rule to the footer like this: 'margin-top: auto;'. This will make the footer go all the way to the bottom of the page.",
						},
						{ name: 'Refresh Google Chrome to see if it worked.' },
						{
							name: "Then, let's make a column layout for our 'main' tag. Define a rule saying the 'width' should be '800px'. Also add a rule 'margin-left: auto;' and 'margin-right: auto;'.",
						},
						{
							name: 'Finally, refresh Google Chrome again to see if it worked.',
						},
					]}
				/>
			</Slide>
			<Slide>
				<Heading>
					Let your inner designer out (if there's time) 🧑‍🎨 5 minutes.
				</Heading>
				<Paragraph>Example / cheat sheet:</Paragraph>
				<Code language="css">
					{`
main { /* Or any other tag */
  font-family: Arial; /* Define the lettertype / font we want to use */
  font-size: 16px; /* Define how big we want the text to be */
  color: blue; /* Define what color we want the text to be */
  background: lightgrey; /* Define what color we want the background of this tag to be */
  
  width: 200px; /* Define how wide in pixels we want this element to be */
  height: 200px; /* Define how high in pixels we want this element to be */
  
  margin: 20px; /* Define how many pixels distance we want this tag to have from surrounding tags */
  margin-left: 20px; /* Margin on the left side. Can also be done with 'right', 'left' and 'top' */
  padding: 20px; /* Define how many pixels distance we want this tag to have with its inner tags */
  padding-left: 20px; /* Padding on the left side. Can also be done with 'right', 'left' and 'top' */
}
          `}
				</Code>
			</Slide>
			<Slide hCenter vCenter>
				<Heading>Break! Back in 15 minutes 😄</Heading>
			</Slide>
			<Slide>
				<Heading>JavaScript</Heading>
				<Paragraph>
					The final piece of the website-puzzle is JavaScript.
					<br />
					<br />
					JavaScript is a scripting or programming language that allows you to
					implement complex features on web pages
					<br />
					<br />
					Every time a web page does more than just sit there and display static
					information for you to look at you can bet that JavaScript is probably
					involved.
					<br />
					<br />
					This is where the 1's and the 0's will come back in a way.
				</Paragraph>
			</Slide>
			<Slide>
				<Heading>JavaScript</Heading>
				<Paragraph>This is a piece of JavaScript code:</Paragraph>

				<Code language="javascript">
					{`
var name = "Henry";

if (name === "Henry") {
  alert("Hello Henry!");
} else {
  alert("Hello stranger!");
}
          `}
				</Code>
			</Slide>
			<Slide>
				<Heading>JavaScript interacts with HTML</Heading>
				<Paragraph>Given this HTML code:</Paragraph>
				<Code language="html">
					{`
<!-- HTML Code -->
<button onClick="handleButtonClick()">Click me!</button>
          `}
				</Code>
				<Paragraph>And this JavaScript code:</Paragraph>
				<Code language="javascript">
					{`
// JavaScript code
function handleButtonClick() {
  alert("The button was clicked");
}
          `}
				</Code>
				<Paragraph>What would happen when a user clicks the button?</Paragraph>
			</Slide>
			<Slide>
				<Heading>Epic reveal:</Heading>
				<Spectacle.FlexBox
					justifyContent="center"
					alignItems="center"
					height={200}
				>
					<Windmolen.Button onClick={() => alert('The button was clicked')}>
						Click me!
					</Windmolen.Button>
				</Spectacle.FlexBox>
			</Slide>
			<Slide>
				<Heading>JavaScript can change the HTML on your page.</Heading>
				<Paragraph>
					The way in which you do this is by first <strong>selecting</strong>{' '}
					the appropriate HTML tag, and then changing that tags "innerHTML".
					<br />
					<br />
					One easy way of being able to <strong>select</strong> the tag you want
					is by giving it an <strong>id</strong>.
					<br />
					<br />
					Then you can use the popular piece of JavaScript code{' '}
					<strong>document.getElementById()</strong>
				</Paragraph>
				<Code language="html">
					{`
<!-- HTML Code -->
<button id="myButton" onClick="handleButtonClick()">Click me!</button>
          `}
				</Code>
				<br />
				<Code language="javascript">
					{`
// JavaScript code
var myButton = document.getElementById("myButton");
          `}
				</Code>
			</Slide>
			<Slide>
				<Heading>JavaScript can change the HTML on your page.</Heading>
				<Paragraph>
					After <strong>selecting</strong> that tag, you can then change its
					inner HTML.
					<br />
					<br />
					You do that like this:
				</Paragraph>
				<Code language="javascript">
					{`
// JavaScript code
var myButton = document.getElementById("myButton");

myButton.innerHTML = "New text for my button";
          `}
				</Code>
			</Slide>
			<Slide>
				<Heading>Coding time!</Heading>
				<List
					items={[
						{
							name: "Back to VS Code. Start by opening the file 'main.js' from the sidebar",
						},
						{ name: "Add the following line: alert('hello');" },
						{
							name: "Refresh the page in Google Chrome. Does it alert 'hello'?",
						},
					]}
				/>
			</Slide>
			<Slide hCenter vCenter>
				<Heading>Interactive coding time. Let's add a like button.</Heading>
			</Slide>
			<Slide>
				<Heading>That's it folks!</Heading>
				<Paragraph>
					You are now a web developer! You could go out and create:
				</Paragraph>
				<FadeList
					items={[
						'Your own company website',
						'Your own digital CV',
						'Your own collection of cute cat pictures',
						"Your own Vandebron competitor (Ssst I didn't say this)",
					]}
				/>
			</Slide>
			<Slide>
				<Heading>Next steps</Heading>
				<Paragraph>
					<strong>Getting started with the web</strong> by Mozilla. Really great
					place to just learn the basics of the web and get some hands-on
					experience.{' '}
					<a
						href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
						target="_blank"
						rel="noreferrer"
					>
						https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
					</a>
					<br />
					<br />
					The official curriculum from <strong>freeCodeCamp</strong>. A huge
					collection of interactive lessons that is great to get started with,
					but if you stick with it will take you pretty deep into the subject
					matter.{' '}
					<a
						href="https://www.freecodecamp.org/learn"
						target="_blank"
						rel="noreferrer"
					>
						https://www.freecodecamp.org/learn
					</a>
					<br />
					<br />
					YouTube of freeCodeCamp. From the same organisation, a huge collection
					of video tutorials covering lots of subjects. Specifically, start with
					this video:{' '}
					<a
						href="https://youtu.be/pQN-pnXPaVg"
						target="_blank"
						rel="noreferrer"
					>
						https://youtu.be/pQN-pnXPaVg
					</a>
				</Paragraph>
			</Slide>
			<Slide hCenter vCenter hideProgress>
				<Heading>Questions?</Heading>
			</Slide>
		</Spectacle.Deck>
	);
}

export default App;
