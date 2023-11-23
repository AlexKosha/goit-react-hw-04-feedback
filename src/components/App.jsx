import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedBackOptions/FeedbackOptions ';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const handleLeaveFeedback = key => {
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        alert('invalid key');
    }
  };

  const countTotalFeadback = () => {
    return Object.values(feedback).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPecentage = () => {
    return (good / countTotalFeadback()) * 100;
  };

  const positivePercentage = countPositiveFeedbackPecentage().toFixed(1);

  const total = countTotalFeadback();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleLeaveFeedback = key => {
//     this.setState(prevState => ({
//       [key]: prevState[key] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return (this.state.good / this.countTotalFeedback()) * 100;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage =
//       this.countPositiveFeedbackPercentage().toFixed(1);
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
