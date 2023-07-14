import PropTypes from 'prop-types';
import '../../styles/components/utils/PercentageRing.scss';

const PercentageRing = ({ percentage = 64 }) => (
  <div className="percentage-ring">
    <div className="background" />
    <div
      className="progress"
      style={{ transform: `rotate(${percentage}deg)` }}
    />
    <div className="percentage">
      {percentage}
      %
    </div>
  </div>
);

PercentageRing.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default PercentageRing;
