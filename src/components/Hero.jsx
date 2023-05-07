import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import mockup from '@/images/mockup.png'


export function Hero() {
  return (
    <div className='bg-dark'>
      <Container className="pb-16 pt-20 text-center lg:pt-32 bg-echo">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-widest text-slate-900 sm:text-7xl text-white ">
        CREATIVE<br />
        RIGHTS
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 text-white">
        Salamat is challenging the traditional Hollywood model by granting ownership of IP to creators including box office revenue, distribution revenue, and other verticals.  
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
   
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
           
            color="yellow"
          ><span className="mx-3">Get An Invite</span>
          </Button>
        </div>
        <div className="mt-20  text-center">
           <Image src={mockup} alt='Salamat Mockup' unoptimized className='mx-auto mockup' />
        </div>
      </Container>
    </div>
  )
}
