import { useState, useEffect } from 'react';
import axios from 'axios';
import PrintPage from './Print';

interface RowData {     
  id: number;     
  plateNumber: string;     
  violationType: string;     
  latitude: number;     
  longitude: number;     
  dateTime: string;     
  image: string;     
  status: string; }

const ReviewList: React.FC = () => {
  const [data, setData] = useState<RowData[][]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<RowData[][]>('https://eck20zaeo3.execute-api.us-east-1.amazonaws.com');
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                License plate No.
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
               Type
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                latitude
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                longtitude
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
              timestamp
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                image
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
               status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
      {rowData.slice(1, -1).map((cellData, cellIndex) => (
  <td key={cellIndex} className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
    {Object.entries(cellData).map(([key, value]) => (
      <p key={key} className="text-black dark:text-white">
        {`${value}`}
      </p>
    ))}
  </td>
))}
              {rowData.slice(7).map((cellData, cellIndex) => (
                <td key={cellIndex} className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {Object.entries(cellData).map(([key, value]) => (
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      `${value}` === 'aproved'
                        ? 'bg-success text-success'
                        : `${value}` === 'rejected'
                        ? 'bg-danger text-danger'
                        : 'bg-warning text-warning'
                    }`}
                  >
                  {`${value}`}
                  </p>
                  ))}
                </td>
                 ))}


                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <PrintPage />
                  </div>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewList;
