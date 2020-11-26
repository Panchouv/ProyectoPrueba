import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons  from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Alumnos',
        path: '/alumnos',
        icon: <FaIcons.FaUserGraduate/>,
        cName: 'nav-text'
    },
    // {
    //     title: 'FechaPruebas',
    //     path: '/fechas',
    //     icon: <BsIcons.BsCalendarFill />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Notas',
    //     path: '/notas',
    //     icon: <FaIcons.FaClipboardCheck />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Formulario',
        path: '/formulario',
        icon: <FaIcons.FaUserCheck />,
        cName: 'nav-text'
    },
    {
        title: 'VistaApi',
        path: '/vistaapi',
        icon: <AiIcons.AiFillApi />,
        cName: 'nav-text'
    },
]