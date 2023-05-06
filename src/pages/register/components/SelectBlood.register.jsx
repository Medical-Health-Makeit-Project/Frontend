export const SelectBlood = ({ handleChange }) => {
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  return (
    <select
      id="blood"
      name="blood_type"
      type="blood"
      className="blood__input input-box"
      onChange={(event) => handleChange(event)}
    >
      <option value="">Select...</option>
      {bloodTypes.map((type) => {
        return (
          <option key={type} value={type}>
            {type}
          </option>
        );
      })}
    </select>
  );
};
