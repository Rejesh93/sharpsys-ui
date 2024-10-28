import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";


import serviceMenuData from "./productMenuData";
import Enterprisesolution from '../EnterpriseSolution';
import CRMSolution from '../CRMSolution';
import AdvancedAnalytics from '../AdvancedAnalytics';
import BusinessIntelligence from '../BusinessIntelligence';
import StaffAugmentation from '../StaffAugmentation';
import productsMenuData from './productMenuData';


// export default function ServicesMenu() {
const ProductsMenu = (props) => {
    console.log(props);
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false);


    const pathUrl = usePathname();
    const [isHovered, setIsHovered] = useState(0);

    const handleMouseOver = (e) => {
        switch (e.target.getAttribute('data-key')) {
            case "0":
                setIsHovered(1)
                break
            case "1":
                setIsHovered(2)
                break
            case "2":
                setIsHovered(3)
                break
            case "3":
                setIsHovered(4)
                break
            case "4":
                setIsHovered(5)
                break
        }
    }

    return (
        <>
            <header><h3 className='text-metatitle2 pl-2 text-black dark:text-white font-bold'>Our Products</h3></header>
            <main className='flex-1 bg-white rounded-lg'>
            <div className='grid grid-cols-4 gap-2 bg-white rounded-lg'>
            <div className="col-span-2 p-1">
                <div className="w-full p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menu_icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
                  Drag and Drop
                  <p className="menuSubContent">We deliver tailored, tech-driven solutions</p>
                </div>       
              </a>
                </div>
                <div className="w-full p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menu_icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
                 E-Invoice Integration
                  <p className="menuSubContent">We deliver tailored, tech-driven solutions</p>
                </div>
                
              </a>
                </div>
                
            </div>
            <div className="col-span-2">
                <div className="w-full p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menu_icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
                  Quote Engine
                  <p className="menuSubContent">We deliver tailored, tech-driven solutions</p>
                </div>
                
              </a>
                </div>
                
            </div>  
                  
        </div>
        <div className='w-auto border-b border-grey-600 ml-4 mr-4'></div>
        <section className='w-11/12 p-2 mt-2 relative'>
                    <span className='pl-2 w-full flex'>
                        <h3 className="ml-2 mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
                            Need Different Solution?
                        </h3>
                        <button
                        aria-label="talk to sales button"
                        className="absolute right-0 rounded-full bg-transparent px-3.5 py-1 text-black text-xs border-2 border-black duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho hover:text-white"
                        >
                        Talk to Sales
                        </button>
                    </span>
                    <p className='ml-4 menuSubContent text-black'>Ut ultricies lacus non fermentum ultrices.</p>
                </section> 
        
                </main>
        {/* <div className='w-11/12 border-b border-grey-600 mt-4 ml-4'></div>
        <div className='w-11/12 p-1 mt-2 relative'>
                    <span className='pl-2 w-full flex'>
                        <h3 className="ml-2 mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
                            Need Different Solution?
                        </h3>
                        <button
                        aria-label="talk to sales button"
                        className="absolute right-0 rounded-full bg-transparent px-3.5 py-1 text-black text-xs border-2 border-black duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho hover:text-white"
                        >
                        Talk to Sales
                        </button>
                    </span>
                    <p className='ml-4 text-black menuSubContent'>Ut ultricies lacus non fermentum ultrices.</p>
                </div> */}
                
        </>
    )
}
export default ProductsMenu;
