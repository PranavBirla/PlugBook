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
      lg:  <EvCharger size={40} strokeWidth={1} />,
      def:"Locate chargers easily around you.",
    },
    {
      id: 2,
      name: "My Booking",
      icon: <Ticket size={32} strokeWidth={1} />,
      lg: <Ticket size={40} strokeWidth={1} />,
      def:"View and manage your booking."
    },
    {
      id: 3,
      name: "Payments",
      icon: <Wallet size={32} strokeWidth={1} />,
      lg: <Wallet size={40} strokeWidth={1} />,
      def:"Manage payments and invoices."
    },
    {
      id: 4,
      name: "History",
      icon: <History size={32} strokeWidth={1} />,
      lg: <History size={44} strokeWidth={1} />,
      def:"View your charging history."
    },
  ];

 


  return (
    <div className=' flex justify-around mx-4 my-3 sm:mx-7 md:mx-9'>
       {
        navItems.map(function(elem){
          return <Icon id={elem.id} name={elem.name} icon={elem.icon} def={elem.def} lg={elem.lg} />


        })
      }
  
    </div>
  )
}

export default IconSet
