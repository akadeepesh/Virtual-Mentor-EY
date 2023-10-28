// components/DividedForm.tsx
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label"

const DividedForm = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    skills: '',
    gender: '',
  });
  const [section, setSection] = useState(1);

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user?.emailAddresses || '',
      }));
    }
  }, [user]);
  
  const handleNextClick = () => {
    setSection(section + 1);
  };

  const handlePreviousClick = () => {
    setSection(section - 1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleFormSubmit}>
        {section === 1 && (
          <div className='flex flex-col'>
            <Label>First Name</Label>
            <Input className="ml-1 w-[95%]" type="text" name="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}/>
            <Label>Last Name</Label>
            <Input className="ml-1 w-[95%]" type="text" name="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}/>
            <Label>First Name</Label>
            <Input className="ml-1 w-[95%]" type="text" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            <label>Last Name</label>
            <button onClick={handleNextClick}>Next</button>
          </div>
        )}

        {section === 2 && (
          <div className='flex flex-col'>
            <Label>Skills</Label>
            <Input className="ml-1 w-[95%]" type="text" name="skills" onChange={(e) => setFormData({ ...formData, skills: e.target.value })}/>

            <Label>Gender</Label>
            <Input className="ml-1 w-[95%]" type="text" name="gender" onChange={(e) => setFormData({ ...formData, gender: e.target.value })}/>
            <button onClick={handlePreviousClick}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default DividedForm;
