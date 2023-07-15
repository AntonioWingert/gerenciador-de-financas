'use client';
import Chart from 'react-google-charts';

import * as S from './styles';

import { chartData } from '@/@Types/chartTypes';

type ElChartProps = {
  data: chartData;
  chartTitle: string;
};

export default function ElChart({ data, chartTitle }: ElChartProps) {
  const chartDescription = ['Categoria', 'Valor'];
  const chartData = [chartDescription, ...data];

  return (
    <S.Container>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={{ title: chartTitle }}
      />
    </S.Container>
  );
}
