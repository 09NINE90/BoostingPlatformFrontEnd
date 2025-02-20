import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router';

const OrderCard = ({uuid, orderId, platform, name, status, estimateDate, price}) => {
    const navigate = useNavigate();

    const viewDetailAction = (uuid) => {
        navigate(`/booster/orderDetail/${uuid}`);
    }

  return (
    <div className="bg-[#1E1930] flex justify-center items-center flex-col p-4 m-3">
        <div>
            <h1><strong>Order Id: {orderId}</strong></h1>
        </div>
        <div className='p-2'>
            <div>Platform: {platform}</div>
            <div>Service: {name}</div>
            <div>Status: {status}</div>
            <div>Estimate Date: {estimateDate}</div>
            <div>Price: {price}$</div>
        </div>
        <div>
            <Button onClick={() => viewDetailAction(uuid)}>Get Detail</Button>
        </div>
    </div>
  )
}

export default OrderCard