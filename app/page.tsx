import Column from '@/components/shared/Column';
import Widget from '@/components/shared/Widget';
import { configuration } from '@/config';
import Image from 'next/image';

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col gap-10 p-10
    bg-[#92C5FD] items-center lg:items-start'
    >
      <div className='flex flex-row items-center gap-2'>
        <Image src='/pika.png' width={65} height={65} alt='Pika' />
        <h1 className='font-bold text-4xl mt-5'>Pokemon Dashboard</h1>
      </div>

      <div
        className='flex flex-row flex-wrap gap-5 justify-center
        lg:justify-start'
      >
        {configuration.columns.map((column, idx: number) => (
          <Column key={idx} size={column.size} heading={column.heading}>
            {column.widgets.map((widget: any, idx2) => (
              <Widget
                key={idx2}
                title={widget.title}
                subtitle={widget.subtitle || ''}
                type={widget.type}
                api={widget.api}
              />
            ))}
          </Column>
        ))}
      </div>
    </main>
  );
}
