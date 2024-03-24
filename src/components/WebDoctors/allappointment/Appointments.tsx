import axios from "axios";
import { useEffect, useState } from "react"

interface Appointment {
  _id: string
  username: string
  date: string
  time: string
  patientName: string

}

export const Appointments = () => {
  const [app, setApp] = useState<Appointment[]>([]);
  useEffect( () => {
    try{
      const token = localStorage.getItem("token");
      axios.post("https://server-production-fa75.up.railway.app/api/doc/app", {token})
      .then( (res) => {
        setApp(res.data.allAppointment.reverse())
      })
    } catch (e) {
      console.log(e);
      
    }
  }, [])
  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full h-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
        <th className="px-6 py-3">patientName</th>
        <th className="px-6 py-3">date</th>
        <th className="px-6 py-3">time</th>
      </tr>
      </thead>
      <tbody> 
        {app.map(item => {
          return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{item.patientName}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">{item.time}</td>
            </tr>
          )
        })}
      </tbody>
      </table>
    </div>
  )
}

/*



<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>

 */