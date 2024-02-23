/* eslint-disable object-curly-newline */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { ReactNode } from 'react';

type Props = {
  heading: string;
  size: number;
  children?: ReactNode;
};

const sizes: any = {
  1: 'w-[300px]',
  2: 'w-[500px]',
  3: 'w-[700px]',
  4: 'w-[900px]',
  5: 'w-[1100px]',
  6: 'w-[1300px]',
};

function Column({ heading, size, children }: Props) {
  return (
    <div className={`${sizes[size]} min-w-[300px]`}>
      <Card className='h-full bg-blue-50 border-0 shadow-xl'>
        <CardHeader>
          <CardTitle>{heading}</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-row flex-wrap gap-5'>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}

export default Column;
