import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='max-h-[25vh] px-16 my-4'>
        <span className='text-9xl font-bold'>hello?</span>
      </div>
      <div className="max-h-[50vh] ml-auto overflow-hidden border border-stone-900">
        <Image
          src="/banana-phone.jpg"
          width={1920}
          height={1080}
          alt="using banana as phone"
          className="w-full h-full object-cover object-[center_30%] filter grayscale"
        />
      </div>
      <div className='px-16 my-8 space-y-2'>
        <div>
          <p className='italic text-lg'>(Sound of a ringing phone, followed by a click as if someone picked up.)</p>
        </div>
        <div className="text-4xl">
          <p>
            This is <span className="font-bold underline">Ryan</span> speaking. Who&apos;s this?
          </p>
        </div>
      </div>
    </div>
  );
}
