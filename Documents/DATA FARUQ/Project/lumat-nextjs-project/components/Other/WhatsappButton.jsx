import Image from 'next/image';

import Icon from '@/public/icons/ic_whatsapp.svg';
import { isSmallNavOpen } from '@/context/SmallNavContext';

export default function WhatsappButton() {
    return (
        <a href="https://wa.me/6282115459797" target="_blank" rel="noopener noreferrer">
          <button className={`flex items-center gap-2 rounded-full p-3 bg-green-whatsapp hover:bg-green-whatsapp-dark right-5 md:right-8 lg:right-10 bottom-5 md:bottom-6 lg:bottom-10  ${isSmallNavOpen ? '' : 'fixed'}`}> {/* Apply conditional class based on isOpen */}
            <Image src={Icon} alt="WaIcon" className='w-5' />
            <h1 className='text-white'>PESAN SEKARANG</h1>
          </button>
        </a>
      );
}