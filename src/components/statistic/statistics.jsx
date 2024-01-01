import { StatisticItem } from '../statistic/statisticItem';

import {
  Statisticsection,
  StatisticTitle,
  StatisticList,
} from '../statistic/statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statisticsection className="">
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticList>
    </Statisticsection>
  );
};
