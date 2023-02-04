import React from 'react';
import cn from 'classnames';

interface Event {
  id: number | string;
  time: string;
  loc: string;
  position: string;
  org: string;
  details: string[];
}

const events: Event[] = [
  {
    id: 1,
    time: 'Jun 2021 - Jul 2021',
    loc: 'Bengaluru, India',
    position: 'Consultant Intern',
    org: 'Happiest Minds',
    details: [
      'Consultant Intern in the Center of Excellence division.',
      'Developed a Deep Reinforcement Learning Solution to optimize a Multi Echelon Inventory Management System.',
      'Used PyTorch, and the Stable baselines 3 package to explore multiple policy gradient algorithms.',
      'Obtain approximately 27% better returns using the TD3 Model compared to the baseline policy'
    ]
  },
  {
    id: 2,
    time: 'May 2022 - Jul 2022',
    loc: 'Hyd, India',
    position: 'Summer Intern',
    org: 'D.E. Shaw',
    details: [
      'Monitoring framework for tracking changes on a data source',
      'Decentralized backend services in python, with MongoDB as central data store | React-Redux web application',
      'Interactive selection and parsing of various HTML elements including tables, lists and grids',
      'Alert rule framework for sanity check of parsed data',
    ]
  },
  {
    id: 3,
    time: 'Aug 2022 - Jan 2023',
    loc: 'Saarbrücken, Germany',
    position: 'Visiting Scholar',
    org: 'Max Planck Institute for Software Systems',
    details: [
      'Implement contemporary papers including "Automatic Reward Design via Learning Motivation-Consistent Intrinsic Rewards"',
      'Used PyTorch and iterated over Stable baselines 3 to create the sparse environments and the algorithms',
      'Replicated and confirmed the results obtained by the original authors '
    ]
  },
  {
    id: 4,
    time: 'Jan 2023 - Jun 2023',
    loc: 'Bengaluru, India',
    position: 'Intern, MTS',
    org: 'Nutanix',
    details: ['Coming soon...']
  }

];

interface TimelineItemProps {
  index: number;
  event: Event;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ index, event }) => {
  return (
    <div
      className={cn(
        index % 2 == 0
          ? 'border-l-2 col-start-1 items-start rounded-l-lg flex-col md:flex-row'
          : 'border-r-2 col-end-6 items-end rounded-r-lg flex-col md:flex-row-reverse',
        'p-5 mt-[-2px] border-t-2 border-b-2 border-accent-800 col-span-4 flex gap-x-10 md:items-center'
      )}
    >
      <div className='flex flex-col'>
        <span className='text-accent-900 font-semibold'>{event.org}</span>
        <span className='text-sm'>{event.position}</span>
        <span className='text-xs text-primary-300'>{event.time}</span>
        <span className='text-xs text-primary-300'>{event.loc}</span>
      </div>
      <ul className='text-sm list-disc hidden md:block'>
        {event.details.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

interface TimelineProps { }

const Timeline: React.FC<TimelineProps> = (props: TimelineProps) => {
  return (
    <div className='grid grid-cols-5 '>
      {events.map((event, index) => {
        return <TimelineItem key={event.id} index={index} event={event} />;
      })}
    </div>
  );
};

export default Timeline;
