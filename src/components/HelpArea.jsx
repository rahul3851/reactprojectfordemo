import HelpBox from './HelpBox';
import './HelpArea.css';

const HELP_ITEMS = [
  {
    id: 'h1',
    title: 'What is your name?',
    text: 'My name is a Rahul Kumar Singh, working as a DevOps Engineer',
  },
  {
    id: 'h2',
    title: 'What kind of project you are creating?',
    text: 'I am creating this demo project just for POC.',
  },
  {
    id: 'h3',
    title: 'Why GitHub Actions?',
    text: 'GitHub Actions is a CI / CD service that helps us automate repository-related workflows and processes and easy to setup.',
  },
];

function HelpArea() {
  return (
    <section data-testid="help-area" id="help-area">
      {HELP_ITEMS.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

export default HelpArea;
