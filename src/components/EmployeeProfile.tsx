import "./EmployeeProfile.css";

interface Props {
  name: string;
  age: number;
  gender: string;
  location: string;
  profilepicture: string;
}

const EmployeeProfile = ({ name, age, gender, location, profilepicture }: Props) => {
  return (
    <div className="employee-profile">
      <img
        src={profilepicture}
        alt={`${name}'s profile`}
        className="profile-image"
      />
      <div className="employee-details">
        <h2 className="employee-name">{name}</h2>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
      </div>
    </div>
  );
};

export default EmployeeProfile;
