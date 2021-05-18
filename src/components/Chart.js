import React from 'react'
//Chart
import useChartConfig from 'hooks/useChartConfig'
import Box from 'components/Box'
import { Chart } from 'react-charts'

data = [1,3,2,1,3,2,1]

export default () => {
  const {data} = useChartConfig({
    series: 7,
    dataType: 'ordinal'
  })
  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'left' },
      { position: 'bottom', type: 'linear', stacked: true }
    ],
    []
  )
  return (
    <>
      <Box>
        <Chart data={data} series={series} axes={axes} tooltip />
      </Box>
    </>
  )
}