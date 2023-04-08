import { useState } from 'react';

export const useUpdater = (newDoctor, setNewDoctor) => {
  const [qualification, setQualification] = useState('');
  const [membership, setMembership] = useState('');
  const [skill, setSkill] = useState('');

  const handleQualification = (e) => {
    setQualification(e.target.value);
  };

  const handleAddQualification = (e) => {
    e.preventDefault();
    if (!qualification) return;
    setNewDoctor({
      ...newDoctor,
      qualifications: [...newDoctor.qualifications, qualification],
    });
    setQualification('');
  };

  const handleDeleteQualifications = (qualification) => {
    setNewDoctor({
      ...newDoctor,
      qualifications: newDoctor.qualifications.filter((e) => e !== qualification),
    });
  };

  const handleMembership = (e) => {
    setMembership(e.target.value);
  };

  const handleAddMemberships = (e) => {
    e.preventDefault();
    if (!membership) return;
    setNewDoctor({
      ...newDoctor,
      memberships: [...newDoctor.memberships, membership],
    });
    setMembership('');
  };

  const handleDeleteMembership = (membership) => {
    setNewDoctor({
      ...newDoctor,
      memberships: newDoctor.memberships.filter((e) => e !== membership),
    });
  };

  const handleSkill = (e) => {
    setSkill(e.target.value);
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!skill) return;
    setNewDoctor({
      ...newDoctor,
      skills: [...newDoctor.skills, skill],
    });
    setSkill('');
  };

  const handleDeleteSkill = (skill) => {
    setNewDoctor({
      ...newDoctor,
      skills: newDoctor.skills.filter((e) => e !== skill),
    });
  };

  return {
    qualification,
    membership,
    skill,
    handleQualification,
    handleAddQualification,
    handleDeleteQualifications,
    handleMembership,
    handleAddMemberships,
    handleDeleteMembership,
    handleSkill,
    handleAddSkill,
    handleDeleteSkill,
  };
};
