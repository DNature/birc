import React, { useState } from 'react';
import classNames from 'classnames';

import { Panel, Tabs, useTabState } from './react-tabs';

import MainLayout from '../layouts/layout';
import data from './data';

const Tab = ({ children }) => {
  const { active, onClick } = useTabState();

  return (
    <div
      className={classNames('relative', {
        ['wrapper transition-all duration-150 ']: active,
      })}
    >
      <button
        onClick={onClick}
        className={classNames(
          'cursor-pointer p-8 flex items-center relative text-left w-full',
          {
            ['bg-white transition-all duration-150 item-active']: active,
            ['z-10 hover:bg-primary-75 rounded-lg']: !active,
          }
        )}
      >
        <h3
          className={classNames('font-semibold text-white text-base', {
            ['text-primary-100']: active,
          })}
        >
          {children}
        </h3>
      </button>
    </div>
  );
};

const TrainingSection = () => {
  const state = useState(0);

  return (
    <Tabs state={state}>
      <div className='bg-gray-15 py-32'>
        <div className='container'>
          <div
            style={{ height: '80vh' }}
            className='rounded-md lg:grid grid-cols-8 w-full overflow-hidden bg-primary-100'
          >
            <div className='h-full col-span-5 bg-white px-10 py-16 overflow-y-scroll'>
              {data &&
                data.map((ele) => {
                  const {
                    objectives,
                    main,
                    keyIssues,
                    synopsis,
                    participants,
                    content,
                  } = ele.body;
                  return (
                    <Panel key={ele.title}>
                      <h2 className='font-bold text-xl text-primary-100 mb-6'>
                        {ele.title}
                      </h2>

                      <p className='text-md text-gray-75'>{main}</p>
                      <br />
                      <br />
                      {objectives && (
                        <>
                          <h3 className='text-xl font-semibold text-black'>
                            OBJECTIVES
                          </h3>
                          <ul>
                            {objectives.map((item) => (
                              <li key={item} className='text-md text-gray-75'>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      <br />
                      {content && (
                        <>
                          <h3 className='text-xl font-semibold text-black'>
                            COURSE CONTENTS
                          </h3>
                          <ul>
                            {content.map((item) => (
                              <li key={item} className='text-md text-gray-75'>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      <br />
                      {synopsis && (
                        <>
                          <h3 className='text-xl font-semibold text-black'>
                            SYNOPSIS
                          </h3>
                          <ul>
                            {synopsis.map((item) => (
                              <li key={item} className='text-md text-gray-75'>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      <br />
                      {keyIssues && (
                        <>
                          <h3 className='text-xl font-semibold text-black'>
                            KEY ISSUES
                          </h3>
                          <ul>
                            {keyIssues.map((item) => (
                              <li key={item} className='text-md text-gray-75'>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      <br />
                      {participants && (
                        <>
                          <h3 className='text-xl font-semibold text-black'>
                            PARTICIPANTS
                          </h3>
                          <ul>
                            {participants.map((item) => (
                              <li key={item} className='text-md text-gray-75'>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      <br />
                    </Panel>
                  );
                })}
            </div>
            <div className='col-span-3 py-16'>
              {data && data.map((ele) => <Tab key={ele.id}>{ele.title}</Tab>)}
            </div>
          </div>
        </div>
      </div>
    </Tabs>
  );
};

export default TrainingSection;
