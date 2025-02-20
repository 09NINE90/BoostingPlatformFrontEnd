import React from 'react'
import Chat from '../components/chat/Chat';
import OrderInformation from '../layouts/order/OrderInformation';

export const OrderDetailPage = () => {

  return (
    <div className='h-full flex flex-row'>
        <OrderInformation/>
        <Chat />
    </div>
  )
}

export default OrderDetailPage;
