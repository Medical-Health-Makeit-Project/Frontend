export const SelectBlood = ({ handleChange }) => {
  return (
    <select
      id="blood"
      name="blood"
      type="blood"
      required
      className="blood__input input-box"
      onChange={(event) => handleChange(event)}
    >
      <option value="">Select...</option>
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
      <option value="AB+">AB+</option>
      <option value="AB-"></option>
    </select>
  );
};
