import React from 'react'


import Icon from './Icon';
import { Ticket } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { History } from 'lucide-react';
import { EvCharger } from 'lucide-react';

const IconSet = () => {

  

  const navItems = [
    {
      id: 1,
      name: "Find Charger",
      icon:  <EvCharger size={32} strokeWidth={1} />,
    },
    {
      id: 2,
      name: "My Booking",
      icon: <Ticket size={32} strokeWidth={1} />,
    },
    {
      id: 3,
      name: "Payments",
      icon: <Wallet size={32} strokeWidth={1} />,
    },
    {
      id: 4,
      name: "History",
      icon: <History size={32} strokeWidth={1} />,
    },
  ];

 


  return (
    <div className='flex justify-around mx-4 my-3'>
       {
        navItems.map(function(elem){
          return <Icon id={elem.id} name={elem.name} icon={elem.icon}  />


        })
      }
  
    </div>
  )
}

export default IconSet
