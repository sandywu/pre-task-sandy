import React from 'react';
import SortableTable from '@/components/SortableTable';
import { Column } from '@/components/SortableTable/types';

const columns: Column[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sortable: true,
    width: 150,
    fixed: 'left',
  },
  { title: 'Age', dataIndex: 'age', key: 'age', sortable: true, width: 400 },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    sortable: false,
    width: 500,
  },
  {
    title: 'Occupation',
    dataIndex: 'occupation',
    key: 'occupation',
    sortable: false,
    width: 450,
    fixed: 'right',
  },
];

const data = [
  { name: 'Emily Smith', age: 24, address: '789 Oak St', occupation: 'Nurse' },
  {
    name: 'Michael Johnson',
    age: 30,
    address: '234 Pine St',
    occupation: 'Teacher',
  },
  {
    name: 'Chris Lee',
    age: 29,
    address: '567 Birch St',
    occupation: 'Engineer',
  },
  {
    name: 'Sarah Brown',
    age: 35,
    address: '890 Elm St',
    occupation: 'Manager',
  },
  {
    name: 'David Wilson',
    age: 40,
    address: '123 Maple St',
    occupation: 'Artist',
  },
  {
    name: 'Laura Martinez',
    age: 27,
    address: '456 Cedar St',
    occupation: 'Accountant',
  },
  {
    name: 'James Taylor',
    age: 31,
    address: '789 Willow St',
    occupation: 'Doctor',
  },
  {
    name: 'Emma Anderson',
    age: 26,
    address: '321 Spruce St',
    occupation: 'Scientist',
  },
  {
    name: 'Daniel Thomas',
    age: 38,
    address: '654 Aspen St',
    occupation: 'Chef',
  },
  {
    name: 'Sophia White',
    age: 29,
    address: '987 Fir St',
    occupation: 'Programmer',
  },
  {
    name: 'Matthew Harris',
    age: 34,
    address: '135 Walnut St',
    occupation: 'Analyst',
  },
  {
    name: 'Olivia Clark',
    age: 22,
    address: '2462 Cherry St ',
    occupation: 'Lawyer',
  },
  {
    name: 'William Lewis',
    age: 41,
    address: '357 Hickory St',
    occupation: 'Designer',
  },
  {
    name: 'Ava Young',
    age: 33,
    address: '468 Grass St',
    occupation: 'Publisher',
  },
  {
    name: 'Ethan Hall',
    age: 45,
    address: '579 Palm St',
    occupation: 'Musician',
  },
  {
    name: 'Isabella Allen',
    age: 36,
    address: '680 Poplar St',
    occupation: 'Editor',
  },
  {
    name: 'Jackson King',
    age: 39,
    address: '791 Oak St',
    occupation: 'Director',
  },
  { name: 'Mia Wright', age: 28, address: '902 Pine St', occupation: 'Writer' },
  {
    name: 'Liam Scott',
    age: 25,
    address: '213 Birch St',
    occupation: 'Technician',
  },
  {
    name: 'Avery Green',
    age: 30,
    address: '324 Cedar St',
    occupation: 'Consultant',
  },
  {
    name: 'Lucas Baker',
    age: 32,
    address: '435 Maple St',
    occupation: 'Accountant',
  },
  {
    name: 'Scarlett Adams',
    age: 27,
    address: '546 Elm St',
    occupation: 'Nurse',
  },
  {
    name: 'Benjamin Nelson',
    age: 37,
    address: '657 Fir St',
    occupation: 'Developer',
  },
  {
    name: 'Chloe Carter',
    age: 24,
    address: '768 Willow St',
    occupation: 'Sales',
  },
  {
    name: 'Oliver Perez',
    age: 34,
    address: '879 Walnut St',
    occupation: 'Engineer',
  },
  {
    name: 'Sofia Roberts',
    age: 26,
    address: '980 Cherry St',
    occupation: 'Artist',
  },
  {
    name: 'Henry Turner',
    age: 29,
    address: '123 Hickory St',
    occupation: 'Scientist',
  },
  {
    name: 'Zoe Phillips',
    age: 28,
    address: '234 Palm St',
    occupation: 'Manager',
  },
  {
    name: 'Jackson Foster',
    age: 31,
    address: '345 Poplar St',
    occupation: 'Doctor',
  },
  {
    name: 'Grace Ross',
    age: 35,
    address: '456 Grass St',
    occupation: 'Publisher',
  },
  {
    name: 'Alexander Jenkins',
    age: 31,
    address: '567 Fir St',
    occupation: 'Technician',
  },
  {
    name: 'Lily Coleman',
    age: 29,
    address: '678 Cedar St',
    occupation: 'Editor',
  },
  {
    name: 'Leo Rivera',
    age: 40,
    address: '789 Maple St',
    occupation: 'Director',
  },
  {
    name: 'Maya Ramirez',
    age: 28,
    address: '890 Elm St',
    occupation: 'Writer',
  },
  {
    name: 'Caleb Wood',
    age: 30,
    address: '901 Birch St',
    occupation: 'Lawyer',
  },
  {
    name: 'Ella Murphy',
    age: 22,
    address: '123 Willow St',
    occupation: 'Designer',
  },
  {
    name: 'Isaac Jenkins',
    age: 36,
    address: '234 Poplar St',
    occupation: 'Analyst',
  },
  { name: 'Madison Price', age: 32, address: '345 Oak St', occupation: 'Chef' },
  {
    name: 'Mason Bennett',
    age: 34,
    address: '456 Pine St',
    occupation: 'Marketing',
  },
  {
    name: 'Aria James',
    age: 41,
    address: '567 Cedar St',
    occupation: 'Consultant',
  },
  {
    name: 'Evelyn Wood',
    age: 27,
    address: '678 Maple St',
    occupation: 'Musician',
  },
  { name: 'Nathan Hill', age: 39, address: '789 Elm St', occupation: 'Artist' },
  {
    name: 'Aiden Foster',
    age: 29,
    address: '890 Birch St',
    occupation: 'Developer',
  },
  {
    name: 'Chase Cook',
    age: 35,
    address: '901 Cedar St',
    occupation: 'Teacher',
  },
  {
    name: 'Skylar Howard',
    age: 28,
    address: '123 Cherry St',
    occupation: 'Nurse',
  },
  {
    name: 'Stella Ward',
    age: 30,
    address: '234 Fir St',
    occupation: 'Manager',
  },
  {
    name: 'Alyssa Gray',
    age: 24,
    address: '345 Palm St',
    occupation: 'Scientist',
  },
  {
    name: 'Diego Wallace',
    age: 38,
    address: '456 Pine St',
    occupation: 'Musician',
  },
  {
    name: 'Hailey Butler',
    age: 32,
    address: '567 Oak St',
    occupation: 'Designer',
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Table</h1>
      <SortableTable
        columns={columns}
        data={data}
        pageSize={20}
        scroll={{ y: 450, x: 2000 }}
      />
    </div>
  );
};

export default App;
