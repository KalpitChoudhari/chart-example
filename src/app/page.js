'use client'
import BarChart from '@/components/BarChart';
import DoughnutChart from '@/components/DoughnutChart';
import { Chart, ArcElement, CategoryScale, Tooltip, LinearScale, BarElement } from 'chart.js'
Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip);

export default function Home() {
  return (
    <>
    <div className='w-full h-full flex justify-center items-center'>
      <div className='p-10 container flex justify-center items-center flex-col'>
        <div className='flex justify-center flex-col items-center'>
          <span className='mb-10'>Bar Chart</span>
          <BarChart />
        </div>

        <div className='mt-20 flex justify-center flex-col items-center'>
          <span className='mb-10'>Doughnut Chart</span>
          <DoughnutChart />
        </div>
      </div>
    </div>
    <div className='mt-10 pt-1 border-slate-100 border-t-2 w-3/4 m-auto'>
      <span className='block m-auto text-center'>Above demo is created in Next.js and Chart.js by Kalpit</span>
    </div>
  </>
  )
}
