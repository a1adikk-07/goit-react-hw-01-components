import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from '../statistic/statisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <StatisticBox>
      <StatisticText>{label}</StatisticText>
      <StatisticCounter>{percentage}</StatisticCounter>
    </StatisticBox>
  );
};
