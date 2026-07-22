

import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";


const DestinationDetailsPage =async ({params}) => {
    const {id} = await params
    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const destination = await res.json()
     const {imageUrl, price, destinationName, duration, country, description} = destination;


    console.log(destination)
    return (
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center justify-end mb-5 gap-3">
              <EditModal destination={destination}/>
              <DeleteAlert destination={destination}/>
          </div>


            <Image
            className="w-full h-100 object-cover"
             alt={destinationName}
             src={imageUrl}
             height={500}
             width={800}
            />

            <div className="flex justify-between ">
                <div className="p-2">
                    <div className="flex items-center gap-1">
                      <LuMapPin />
                      <span>{country}</span>
                    </div>
                    <div className="flex justify-between ">
                      <div>
                        <div>
                          <h2 className="text-xl font-bold">{destinationName}</h2>
                        </div>
                        <div className="flex gap-2 items-center">
                          <FaRegCalendar /> {duration}
                        </div>
                      </div>
                      
                    </div>
                    <h1 className="mt-10 font-bold text-2xl">Overview</h1>
                    <p>{description}</p>
            </div>
            <BookingCard destination={destination}/>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;