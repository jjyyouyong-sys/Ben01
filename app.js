'use strict';
const topics = [
  { id: 'sales', name: 'Sales conversations', icon: '→', description: 'Build trust, clarify needs, and keep the conversation moving.', lessons: [
    {title:'Promise carefully',scene:'A buyer asks: “Can you guarantee delivery within 10 days?” Your production team has not confirmed the schedule. What do you say?',choices:['Yes, absolutely. No problem.','I will check our production schedule and confirm whether we can meet your requested date.','Maybe. You must wait.'],correct:1,why:'Offer a clear next step without making a promise you have not verified.',phrase:'“I will check … and confirm whether we can …”',note:'Contract awareness: clarify whether a delivery date is an estimate or an agreed obligation.'},
    {title:'Understand the customer',scene:'A new customer says your product looks interesting. What is the most useful next question?',choices:['How many will you buy today?','Could you tell me more about your application and the specifications you need?','Our product is the best in the world.'],correct:1,why:'An open question helps you understand the customer’s needs before recommending a product.',phrase:'“Could you tell me more about your application?”'},
    {title:'Agree on a next step',scene:'You have finished a useful introductory meeting. How do you close it professionally?',choices:['OK, goodbye.','You should order quickly.','Thank you for your time. I will send the specifications tomorrow. Would a follow-up call on Thursday work for you?'],correct:2,why:'Summarize a concrete action, give a realistic timeframe, and propose a follow-up.',phrase:'“Would a follow-up call on … work for you?”'}
  ]},
  { id: 'emails', name: 'Professional emails', icon: '✉', description: 'Write clear messages that get your point across, politely.', lessons: [
    {title:'Follow up politely',scene:'You sent a quotation last week and have not received a reply. Which follow-up is most professional?',choices:['Why have you not replied?','I am following up on the quotation sent last week. Have you had a chance to review it? I would be happy to answer any questions.','Reply immediately.'],correct:1,why:'Provide context and invite a reply without blaming or pressuring the reader.',phrase:'“I am following up on …”'},
    {title:'Ask for missing details',scene:'A purchase inquiry has no quantity or delivery destination. What should your reply say?',choices:['Your inquiry is incomplete.','We cannot help you.','Thank you for your inquiry. Could you confirm the quantity and delivery destination so we can prepare an accurate quotation?'],correct:2,why:'Thank the reader, identify the specific information needed, and explain why you need it.',phrase:'“Could you confirm … so we can …?”'},
    {title:'Correct an attachment mistake',scene:'You notice that you attached the wrong document to your previous email. How should you respond?',choices:['Please disregard the attachment in my previous email. I apologize for the error; the correct quotation is attached here.','You should have noticed the mistake.','There is no mistake.'],correct:0,why:'Acknowledge the specific error and make the corrective action easy to understand. Check that the correct document is attached before sending.',phrase:'“Please disregard …; the correct … is attached here.”'}
  ]},
  { id: 'negotiation', name: 'Negotiation & contracts', icon: '⇄', description: 'Discuss terms clearly and handle difficult moments with care.', lessons: [
    {title:'Respond to a discount request',scene:'A buyer asks for a 15% discount, but you do not have approval. What is the strongest reply?',choices:['Yes, agreed.','I understand your target price. Could you confirm the order volume? I can then review the options with our team.','Your budget is unreasonable.'],correct:1,why:'Acknowledge the request, gather context, and review options before making a commitment.',phrase:'“I can review the options with our team.”'},
    {title:'Clarify a delivery term',scene:'A buyer asks you to quote CIF. What should you clarify alongside the other quotation details?',choices:['Only the currency.','Nothing; CIF means the seller bears every risk until arrival.','The named destination port and applicable Incoterms edition.'],correct:2,why:'Specify the named destination port and edition, such as CIF [named destination port], Incoterms® 2020. CIF is intended for sea or inland waterway transport.',phrase:'“Could you confirm the destination port and the Incoterms edition?”',note:'Under CIF Incoterms® 2020, risk generally transfers when the goods are on board the vessel at the shipment port, even though the seller pays specified costs to the destination port. Cost and risk transfer differ.'},
    {title:'Handle a damage report',scene:'A buyer reports damaged goods and demands a refund. You do not yet know what happened. What is the best first response?',choices:['We accept full responsibility for everything.','This is not our problem.','I am sorry to hear about the damage. Please send photos, shipment details, and the inspection record so we can investigate promptly.'],correct:2,why:'Acknowledge the concern, request evidence, and explain the next step before deciding responsibility or remedy.',phrase:'“Please send … so we can investigate promptly.”',note:'Check the contract, applicable law, delivery terms, and notice deadlines. Preserve relevant records.'}
  ]}
];
const el = id => document.getElementById(id);
let selected = topics[0], current = 0, score = 0, answered = false, finished = false;
function selectTopic(topic, moveFocus = true) {
  selected = topic; current = 0; score = 0; finished = false;
  document.querySelectorAll('.topic').forEach(button => {
    const active = button.dataset.topic === topic.id;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  render();
  if (moveFocus) { el('practice').scrollIntoView(); el('title').focus({preventScroll:true}); }
}
function render() {
  answered = false;
  const lesson = selected.lessons[current];
  el('topic-label').textContent = selected.name.toUpperCase();
  el('counter').textContent = `${current + 1} OF ${selected.lessons.length}`;
  el('progress').max = selected.lessons.length;
  el('progress').value = current;
  el('title').textContent = lesson.title;
  el('scene').textContent = lesson.scene;
  el('feedback').hidden = true;
  el('next').hidden = true;
  el('choices').replaceChildren();
  lesson.choices.forEach((text, index) => {
    const button = document.createElement('button');
    button.className = 'choice';
    const letter = document.createElement('span'); letter.className = 'choice-letter'; letter.textContent = 'ABC'[index]; letter.setAttribute('aria-hidden','true');
    const label = document.createElement('span'); label.textContent = text;
    button.append(letter, label); button.onclick = () => choose(index);
    el('choices').append(button);
  });
}
function choose(index) {
  if (answered) return;
  answered = true;
  const lesson = selected.lessons[current];
  const correct = index === lesson.correct;
  if (correct) score++;
  el('choices').querySelectorAll('button').forEach((button, i) => {
    button.disabled = true;
    if (i === lesson.correct) button.classList.add('correct');
    else if (i === index) button.classList.add('incorrect');
  });
  el('feedback').replaceChildren();
  const heading = document.createElement('strong');
  heading.textContent = correct ? 'Well said. That’s a strong reply.' : 'A useful learning moment.';
  el('feedback').append(heading);
  const paragraphs = correct ? [] : ['A stronger reply: ' + lesson.choices[lesson.correct]];
  paragraphs.push(lesson.why, 'Try saying it aloud: ' + lesson.phrase);
  if (lesson.note) paragraphs.push(lesson.note);
  paragraphs.forEach(text => { const p = document.createElement('p'); p.textContent = text; el('feedback').append(p); });
  el('feedback').hidden = false;
  el('progress').value = current + 1;
  el('next').textContent = current === selected.lessons.length - 1 ? 'See my result →' : 'Next situation →';
  el('next').hidden = false;
}
el('next').onclick = () => {
  if (finished) { selectTopic(selected); return; }
  if (!answered) return;
  if (current < selected.lessons.length - 1) { current++; render(); }
  else {
    finished = true;
    el('counter').textContent = 'COMPLETE';
    el('title').textContent = `${score} out of ${selected.lessons.length}. A step forward.`;
    el('scene').textContent = score === selected.lessons.length ? 'Great work! Choose another topic, or try using one of these phrases in your next email.' : 'You have practiced three real situations. Try again to reinforce what you learned, or explore another topic.';
    el('choices').replaceChildren(); el('feedback').hidden = true;
    el('next').textContent = 'Practice this topic again ↻';
  }
  el('title').focus({preventScroll:true});
};
topics.forEach(topic => {
  const button = document.createElement('button'); button.className = 'topic'; button.dataset.topic = topic.id;
  button.innerHTML = `<span class="topic-top"><span class="topic-icon" aria-hidden="true">${topic.icon}</span><span class="topic-time">3 situations · 5 min</span></span><h3>${topic.name}</h3><p>${topic.description}</p><span class="topic-bottom"><span>Start practicing</span><span aria-hidden="true">→</span></span>`;
  button.onclick = () => selectTopic(topic); el('topic-grid').append(button);
});
selectTopic(topics[0], false);
const draft = el('draft'), key = 'business-english-draft';
try { draft.value = localStorage.getItem(key) || ''; } catch { el('save-status').textContent = 'Storage unavailable; keep a copy of your draft.'; }
draft.addEventListener('input', () => {
  try { localStorage.setItem(key, draft.value); el('save-status').textContent = 'Draft saved in this browser'; }
  catch { el('save-status').textContent = 'Could not save; keep a copy of your draft.'; }
});
el('clear-draft').onclick = () => {
  draft.value = '';
  try { localStorage.removeItem(key); el('save-status').textContent = 'Draft cleared'; }
  catch { el('save-status').textContent = 'Text cleared; browser storage unavailable.'; }
  draft.focus();
};
