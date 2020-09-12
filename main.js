// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story
const firstAdj= words.get('adjective-1');
const secondAdj= words.get('adjective-2');
const thirdAdj= words.get('adjective-3');

const firstNoun= words.get('noun-1');
const secondNoun= words.get('noun-2');

const nationalityCop= cleanAndCap(words.get('nationality'));

const roundObj= words.get('round');

const numberChoice= words.get('num');

const firstName= cleanAndCap(words.get('first-name'));

const job= words.get('occupation');

const adverbChoice= words.get('adverb');

const verbChoice= words.get('verb');

const punishmentChoice= words.get('punishment');

const message = words.get('message');


// The string containing HTML and text which will populate the story.html page
const story = `<p>Four hundred years ago people knew little about our <span class="word" title="id: adjective-1">${firstAdj}</span> universe.</p>

<p>They thought that the Earth was the center of the entire <span class="word" title="id: noun-1">${firstNoun}</span> and that the sun and all of the <span class="word" title="id: noun-2">${secondNoun}</span> revolved around it.</p>

<p>But then a/an <span class="word" title="id: nationality">${nationalityCop}</span> man named Copernicus discovered the truth: The Earth revolves around the <span class="word" title="id: round">${roundObj}</span> <span class="word" title="id: num">${numberChoice}</span> time(s) a year.</p>

<p>Copernicus, whose full name is <span class="word" title="id: first-name">${firstName}</span> Copernicus, was born in Warsaw, and made observations with the naked eye, long before Galileo used a <span class="word" title="id: adjective-2">${secondAdj}</span> telescope.</p>

<p>In 1600, Galileo Galilei, an Italian <span class="word" title="id: occupation">${job}</span>, expanded Corpernicus' <span class="word" title="id: adjective-3">${thirdAdj}</span> theories, but during the Inquisition in Italy, he was <span class="word" title="id: adverb">${adverbChoice}</span> arrested.</p>

<p>After <span class="word" title="id: verb">${verbChoice}</span> for six months in jail, Galileo was forced to <span class="word" title="id: punishment">${punishmentChoice}</span>.</p>`;


// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;

// Grabbing the moral-message element
const moralMessage = document.getElementById('moral-message');
// Populating the moral-message element with text
moralMessage.innerHTML = `<span class="italics" title="id: message">"${message}"</span>`;


