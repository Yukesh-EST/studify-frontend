import { AbnormalityData } from '../../data/AbnormalityData';
import type { AbnormalityItem } from '../../data/AbnormalityData';

const AbnormalityTable = () => {
    return (
        <div className='h-full flex flex-col justify-between'>
           <div className='flex-1'>
            <table className="w-full text-sm">
                <thead className="bg-gray-100 text-left h-15">
                    <tr className='text-gray-700'>
                        <th className=" p-2">GW Type</th>
                        <th className=" p-2">Location</th>
                        <th className=" p-2">Area</th>
                        <th className=" p-2">Category</th>
                        <th className=" p-2">Observation</th>
                        <th className=" p-2">Assigned To</th>
                        <th className=" p-2">Date</th>
                        <th className=" p-2">Status</th>
                    </tr>
                </thead>
                <tbody className='h-full'>
                    {AbnormalityData.map((item: AbnormalityItem, index: number) => (
                        <tr key={index} className="text-left text-gray-700 border-b-1 border-input border-solid border-gray-200 hover:bg-gray-50">
                            <td className=" p-2">{item.gembaType}</td>
                            <td className=" p-2">{item.location}</td>
                            <td className=" p-2">{item.area}</td>
                            <td className=" p-2">{item.category}</td>
                            <td className=" p-2">{item.observation}</td>
                            <td className=" p-2">{item.assignedTo}</td>
                            <td className=" p-2">{item.date}</td>
                            <td className=" p-2">{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div className='border-t-2 border-input border-solid border-gray-200 h-15 shadow-md flex items-center'>
                <span className='border-1 border-input border-solid border-gray-400 shadow-md rounded-sm px-4 py-1 ml-4 text-sm font-mono'>
                    Showing {AbnormalityData.length}
                </span>
            </div>
        </div>
    )
}

export default AbnormalityTable