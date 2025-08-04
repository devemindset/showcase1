"use client"
import type { FC } from 'react';
import Service from './Service';
import {motion} from 'framer-motion'
import OkIcon from './ui/OkIcon';

const serviceList = [
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/service",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/service",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/service",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/service",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/service",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/service",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/service",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/service",
    },
]

const ServiceList: FC = () => {
        return (
            <section id="service" className='my-5 sm:my-20'>
                <div className=' text-center'>
                    <motion.h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl md:text-6xl'
                    initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                    >Services</motion.h2>
                    <motion.p className='text-xl px-5 text-[var(--text-element-small-black)]'
                    initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
                </div>
                {/* lists  */}
                <div className='mt-20 grid grid-cols-1  md:grid-cols-2  2xl:grid-cols-4 gap-5  sm:px-20  justify-items-center'>
                    {serviceList.map((service,index) => (
                        <Service key={index} icon={service.icon} title={service.title} description={service.description} path={service.path} />
                    ))
                    }
                </div>
            </section>
        );
}
export default ServiceList;