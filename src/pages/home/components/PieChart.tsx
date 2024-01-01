import React, { useEffect, useRef } from 'react'
import Chart, { type ChartTypeRegistry, registerables } from 'chart.js/auto'

interface LineChartProps {
  data: number[]
  labels: string[]
}

const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const chartInstance = useRef<Chart<keyof ChartTypeRegistry, any, any> | null>(null)

  useEffect(() => {
    Chart.register(...registerables)

    if (chartRef.current !== null) {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext('2d')
      if (ctx !== null) {
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                label: 'Data',
                data,
                borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
                borderWidth: 1,
                fill: false // Sem preenchimento abaixo da linha
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const label = labels[context.dataIndex]
                    const value = data[context.dataIndex]
                    return `${label}: ${value}`
                  }
                }
              }
            },
            animation: false // Evitar o erro de tipagem
          }
        })
      }
    }

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy()
      }
    }
  }, [data, labels])

  return <canvas ref={chartRef} />
}

export default LineChart
