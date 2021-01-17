import { useQuery } from '@apollo/client'
import React from 'react'
import { ResponsiveLine as Line } from '@nivo/line'


// TODO: Add more colors
const colors = ['hsl(348, 95%, 68%)', 'hsl(39, 100%, 50%)', 'hsl(155, 67%, 45%)']

const Contributions = ({ logins, query }) => {
  const { loading, error, data: rawData } = useQuery(query, {variables: { logins }})
  if (loading) return <></>
  if (error) return <></>
  const { contributionsByUsers } = rawData;

  const data = contributionsByUsers.map((contributionsByUser, idx) => {
    const contribMap = {}
    contributionsByUser.contributions.forEach((contrib) => {
      const yearMonth = contrib.occurredAt.substr(0,7)
      if (!!contribMap[yearMonth]) {
        contribMap[yearMonth] += 1
      } else {
        contribMap[yearMonth] = 1
      }
    })
    const contribs = Object.entries(contribMap).map(([key, value]) => ({
      x: key,
      y: value,
    }))
    return {
      id: contributionsByUser.user.login,
      color: colors[idx % colors.length],
      data: contribs,
    }
  })
  console.log(data)

  return (
    <Line
        // {...commonProperties}
        data={data}
        xFormat="time:%Y-%m"
        xScale={{
            type: 'time',
            format: '%Y-%m',
            precision: 'month',
        }}
        yFormat=" >-.2f"
        yScale={{
            type: 'linear',
        }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
            legend: 'count #',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 12,
        }}
        axisBottom={{
            format: '%b %d',
            tickValues: 'every 1 month',
            legend: 'time period',
            legendOffset: -12,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        enablePointLabel={true}
        pointSize={16}
        pointBorderWidth={1}
        pointBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]],
        }}
        useMesh={true}
        enableSlices={false}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default Contributions
