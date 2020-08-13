import React, { useState, useEffect } from 'react';

const GRADUATED_YEAR_OPTIONS = [2020, 2021, 2022];

interface Subject {
  name: string;
}

const fetchSubjects = async (graduatedYear: number) => [
  {
    name: `English ${graduatedYear}`,
  },
  {
    name: `Mathematics ${graduatedYear}`,
  },
  {
    name: `Science ${graduatedYear}`,
  },
];

const deleteSubject = async () => ({ success: true });

const ComplicatedPage: React.FC = () => {
  const [subjects, setSubjects] = useState([{ name: 'Mathematics' }]);
  const [graduatedYear, setGraduatedYear] = useState(GRADUATED_YEAR_OPTIONS[0]);
  const onChangeGraduatedYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGraduatedYear(Number(e.target.value));
  };

  useEffect(() => {
    fetchSubjects(graduatedYear).then((response) => setSubjects(response));
  }, [graduatedYear]);

  const removeSubject = (removedSubject: Subject) => {
    setSubjects(subjects.filter((subject) => subject.name !== removedSubject.name));
  };
  const onClickDeleteSubjectButton = (clickedSubject: Subject) => {
    deleteSubject().then(() => removeSubject(clickedSubject));
  };

  return (
    <div>
      <h2>複雑なページ</h2>
      <select name="graduated_year" id="graduated_year" className="form-control" onChange={onChangeGraduatedYear}>
        {GRADUATED_YEAR_OPTIONS.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      <div>
        <ul>
          {subjects.map((subject) => (
            <div key={subject.name}>
              <li>
                <span>{subject.name}</span>
                <span onClick={() => onClickDeleteSubjectButton(subject)}>[削除]</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComplicatedPage;
