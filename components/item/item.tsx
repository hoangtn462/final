import * as React from 'react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import profilePic from '../../arduino.jpg';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import './item.css';

export function Item() {
  return (
    <div className='wrapper'>
      {Array.from({ length: 10 }, (_, index) => (
        <Card className='box' key={index}>
          <CardHeader>
            <CardTitle>Equipment</CardTitle>
            <CardDescription>
              <Image
                src={profilePic}
                alt='Picture of the author'
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'></div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline'>Cancel</Button>
            <Button>Rent</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
