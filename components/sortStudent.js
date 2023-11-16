import houses from '../utils/sample_data/data';

import studentsOnDom from './studentsOnDom';

import createId from './createId';

import students from '../utils/sample_data/students';

const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];
  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');

    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest,
    });

    student.value = ''; // reset value of input
    studentsOnDom('#student-container', students);
  }
  e.stopProp();
};

export default sortStudent;
