import React from 'react'
import OrderCard from '../../components/booster/OrderCard'

const Orders = () => {

    const getMyOrder = () => {
        return([
            {uuid:"123141", orderId:"1", platform: "PC", name:"Dark matter Camo", status: "In progress", estimateDate:"20.05.2025", price: "100"},
            {uuid:"213445", orderId:"2", platform: "PS5", name:"Dark matter Camo", status: "In progress", estimateDate:"20.05.2025", price: "200"},
            {uuid:"124361", orderId:"3", platform: "PS4", name:"Dark matter Camo", status: "In progress", estimateDate:"20.05.2025", price: "300"},
            {uuid:"235436", orderId:"4", platform: "PC", name:"Dark matter Camo", status: "In progress", estimateDate:"20.05.2025", price: "400"},
            {uuid:"235436", orderId:"4", platform: "PC", name:"Dark matter Camo", status: "In progress", estimateDate:"20.05.2025", price: "400"},
            {uuid:"235436", orderId:"4", platform: "PC", name:"Dark matter Camo", status: "In progress", estimateDate:"20.05.2025", price: "400"},
            {uuid:"235436", orderId:"4", platform: "PC", name:"Dark matter Camo", status: "In progress", estimateDate:"20.05.2025", price: "400"},
            {uuid:"235436", orderId:"4", platform: "PC", name:"Dark matter Camo", status: "In progress", estimateDate:"20.05.2025", price: "400"},
            {uuid:"235436", orderId:"4", platform: "PC", name:"Dark matter Camo", status: "In progress", estimateDate:"20.05.2025", price: "400"},
            {uuid:"235436", orderId:"4", platform: "PC", name:"Dark matter Camo", status: "In progress", estimateDate:"20.05.2025", price: "400"},
        ])
    }

  return (
    <div className='flex flex-wrap h-full justify-between flex-row'>
        {getMyOrder().map((row) => (
            <OrderCard 
                uuid={row.uuid}
                orderId={row.orderId}
                platform={row.platform}
                name={row.name}
                status={row.status}
                estimateDate={row.estimateDate}
                price={row.price}
            />
        ))
        }
    </div>
  )
}

export default Orders