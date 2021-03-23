import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
  {
    title: 'Home',
    path: '/customer/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Orders History',
    path: '/user/your-orders',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },

  {
    title: 'My Cart',
    path: '/user/my-cart',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Your Account',
    path: '/user/your-account',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Payment History',
    path: '/user/payment-history',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
]
