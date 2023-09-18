/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IntegrationSettingOutput } from '@/schema/settingSchema';
import { api } from '@/utils/api';
import { ReloadIcon } from '@radix-ui/react-icons';
import dynamic from 'next/dynamic'
import React, { useRef } from 'react'

//@ts-ignore
const TawkMessenger = dynamic<any>(() => import('@tawk.to/tawk-messenger-react'))

const TwakToWidget = () => {
  const tawkMessengerRef = useRef<any>();
  const {data, isLoading} = api.setting.get.useQuery<any, IntegrationSettingOutput>({type: 'INTEGRATION'})

  const handleMinimize = () => {
    tawkMessengerRef.current?.minimize();
  };

  if(isLoading){
    return <span className='w-12 h-12 rounded-full bg-muted'>
      <ReloadIcon className=" h-6 w-6 animate-spin" />
    </span>
  }

  // if(!data){
  //   return null;
  // }

  if(!data?.value.tawkto?.enabled){
    return null;
  }


  return (
    <>
      {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}
      <TawkMessenger
        propertyId={data?.value?.tawkto?.propertyId || ''}
        widgetId={data?.value?.tawkto?.widgetId ||''}
        useRef={tawkMessengerRef}

      />
    </>
  );
}

export default TwakToWidget