import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import UserOne from '../../images/user/evidence1.jpg';
//import { BiCheckCircle } from "react-icons/bi";
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoMdCloseCircle } from 'react-icons/io';
import axios from 'axios';
import { useState, useEffect } from 'react';


interface RowData {
  id: number;
  plateNumber: string;
  violationType: string;
  latitude: number;
  longitude: number;
  dateTime: string;
  image: string;
  status: string;
}

interface ApiReturn {
  violationData: RowData;
  total_violations: number;
  yellow_lane: number;
  unregisterd_car: number;
  todays_violations: number;
}
const FormLayout: React.FC = () => {
  const [data, setData] = useState<RowData[][]>([]);
  const { id } = useParams<{ id: string }>();
  const handleApprove = () => {
    alert('The violation is approved');
  };
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await axios.get<ApiReturn[][]>(
        'https://8lbpgbhy0e.execute-api.us-east-1.amazonaws.com',
      );
      const matchedData = response.data.violationData.find(item => item.id === Number(id));
      setData(matchedData || null);
      console.log(matchedData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Violations details" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Licsence Plate No.
                    </label>
                    <input
                      type="text"
                      value="537018"
                      disabled
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Type
                  </label>
                  <input
                    type="text"
                    value="yellow lane"
                    disabled
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Location
                  </label>
                  <input
                    type="link"
                    value="https://maps.app.goo.gl/HagcVYvik2RrV71G9"
                    readOnly
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Timestamp
                  </label>
                  <input
                    disabled
                    type="text"
                    value="2024-04-24 15:45:30"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              
              <div className="flex gap-5 justify-between mt-6 ">
                <button className="flex-1  " onClick={handleApprove}>
                <IoMdCheckmarkCircle className="text-6xl text-green-600 hover:text-green-700 ml-40" />
              </button>
              <button className="flex-1 " >
                <IoMdCloseCircle className="text-6xl text-red-600  hover:text-red-700 text-center" />
              </button>
              </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">

  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark overflow-hidden">
    <img src={UserOne} className="w-full h-full object-cover" />
      </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
