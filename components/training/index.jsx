import React, { useState } from 'react';
import MainLayout from '../layouts/layout';
import data from './data';

const TrainingSection = () => {
  const [index, setIndex] = useState(1);
  const tabItems = [
    {
      id: 0,
      title: 'STRATEGIC MANAGEMENT',
    },
    {
      id: 1,
      title: 'CHANGE MANAGEMENT: EXAMINING THE OPTIONS FOR A BETTER SERVICE',
    },
  ];

  console.log(data[tabItems[index].title]);

  return (
    <MainLayout pathname='/training' className='relative'>
      <div className='bg-gray-15 py-32'>
        <div className='container'>
          <div
            style={{ height: '80vh' }}
            className='rounded-md lg:grid grid-cols-8 w-full overflow-hidden bg-primary-100'
          >
            <div className='h-full col-span-5 bg-white px-10 py-16'>
              <h2 className='font-bold text-xl text-primary-100 mb-6'>
                STRATEGIC MANAGEMENT
              </h2>

              <p className='text-md text-gray-75'>
                The degree of success recorded by public or privates
                organizations in archiving their set target depends on the
                strategic management skills exhibited by Senior Management
                Staff. With the ever changing roles of organizations, it is
                imperative that their executives are able to strategically
                orient their endeavours in the right direction. This workshop is
                therefore designed to teach participants to think globally,
                compete locally and internationally as well as implement a
                customer/clients focused strategy for their respective
                organizations.
              </p>
            </div>
            <div className='col-span-3 py-16'>
              <div className='wrapper relative'>
                <div className='p-8 flex items-center bg-white item-active relative'>
                  <h3 className='font-semibold text-primary-100 text-base'>
                    STRATEGIC MANAGEMENT
                  </h3>
                </div>
              </div>
              <div className='p-8 flex z-10 items-center relative rounded-lg mr-4 hover:bg-primary-75'>
                <h3 className='font-semibold text-white text-base'>
                  CHANGE MANAGEMENT: EXAMINING THE OPTIONS FOR A BETTER SERVICE
                </h3>
              </div>
              <div className='p-8 flex z-10 items-center relative rounded-lg mr-4 hover:bg-primary-75'>
                <h3 className='font-semibold text-white text-base'>
                  TEAM BUILDING AND TEAM WORKING:
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </MainLayout>
  );
};

export default TrainingSection;
