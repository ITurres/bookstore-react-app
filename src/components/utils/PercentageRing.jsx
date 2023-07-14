import PropTypes from 'prop-types';
import '../../styles/components/utils/PercentageRing.scss';

const PercentageRing = ({ percentage = 64 }) => {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="d-flex align-items-center">
      <svg width={80} height={80} viewBox="0 0 200 200">
        <circle
          cx={200 / 2}
          cy={200 / 2}
          strokeWidth="15px"
          r={radius}
          className="ring-bg"
        />
        <circle
          cx={200 / 2}
          cy={200 / 2}
          strokeWidth="15px"
          r={radius}
          className="ring-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
      <div className="book-progress d-flex flex-column p-3">
        <strong className="percentage-number">
          {percentage}
          %
        </strong>
        <span>Completed</span>
      </div>
    </div>
  );
};

PercentageRing.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default PercentageRing;
