import React from 'react';
import { Tab } from '@headlessui/react';
import SectionHeader from '../../components/SectionHeader';

type work = {
  _id: number;
  name: string;
  role: string;
  location?: string;
  start: string | Date;
  end: string | Date;
  pointers: string[];
};

const workEx: work[] = [
  {
    _id: 1,
    name: 'Happiest Minds',
    role: 'Intern Consultant',
    location: 'Bengaluru, India',
    start: 'Jun 2021',
    end: 'July 2021',
    pointers: [
      'Consultant Intern in the Center of Excellence division.',
      'Developed a Deep Reinforcement Learning Solution to optimize Multi Echelon Inventory Management System.',
      'Used PyTorch, and the Stabel baselines 3 package to explore multiple policy gradient algorithms.',
      'Obtain approximately 27% better returns using the TD3 Model compared to the baseline policy',
    ],
  },
  {
    _id: 2,
    name: 'D.E. Shaw',
    role: 'Summer Intern',
    location: 'Hyderabad, India',
    start: 'Summer',
    end: '2022',
    pointers: ['Coming Soon!'],
  },
];

interface Props {}

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Experience: React.FC<Props> = () => {
  return (
    <div className='min-h-screen flex items-center'>
      <div className='my-10 flex flex-col gap-y-10'>
        <SectionHeader index={2}>Experience</SectionHeader>
        <Tab.Group vertical defaultIndex={0}>
          <div className='grid grid-cols-1 sm:grid-cols-12 gap-3 '>
            <Tab.List className='flex sm:flex-col sm:col-span-3 gap-x-3 items-start'>
              {workEx.map(({ _id, name }) => (
                <Tab
                  key={_id}
                  className={({ selected }) =>
                    classNames(
                      'font-mono pr-4 sm:px-4 py-3 border-b-2 sm:border-l-2 sm:border-b-0',
                      selected
                        ? 'border-accent-800 text-accent-900'
                        : 'border-accent-100 text-primary-200'
                    )
                  }
                >
                  {name}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className='sm:col-span-9'>
              {workEx.map((value) => (
                <Tab.Panel key={value._id} className='text-primary-100'>
                  <h5 className='text-2xl'>
                    {value.role}
                    <span className='text-accent-800'> @ {value.name}</span>
                  </h5>
                  <div className='text-sm text-primary-300'>
                    {value.start} - {value.end}, {value.location}
                  </div>

                  <ul className='text-sm list-disc list-inside text-primary-200 mt-3 flex flex-col gap-y-3'>
                    {value.pointers.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Experience;
