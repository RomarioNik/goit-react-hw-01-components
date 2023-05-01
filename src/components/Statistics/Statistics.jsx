import PropTypes from "prop-types";
import { getRandomHexColor } from "utils";
import {
  StatContainer,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from "./Statistics.styled";

const Statistics = ({ data, title }) => {
  return (
    <StatContainer>
      {title && <Title>{title}</Title>}

      <StatList>
        {data.map(({ id, label, percentage }) => (
          <StatListItem
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </StatContainer>
  );
};

Statistics.protoType = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};

export default Statistics;
