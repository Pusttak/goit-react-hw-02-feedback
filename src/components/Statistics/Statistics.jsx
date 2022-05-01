import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ state, total, positivePercentage }) => {
  return total ? (
    <ul>
      {Object.keys(state).map(el => (
        <li key={el}>
          <p className={css.rating}>
            {el}: {state[el]}
          </p>
        </li>
      ))}
      <li key="total">
        <p className={css.rating}>Total: {total}</p>
      </li>
      <li key="positive">
        <p className={css.rating}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};

export default Statistics;

Statistics.propTypes = {
  state: PropTypes.exact({
    Good: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
