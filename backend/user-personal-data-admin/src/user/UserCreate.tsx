import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Education"
          source="education"
          choices={[{ label: "Education", value: "Btech" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="First Name" source="firstName" />
        <SelectArrayInput
          label="Languages"
          source="languages"
          choices={[{ label: "Languges", value: "Hindi" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <SelectArrayInput
          label="Skills"
          source="skills"
          choices={[{ label: "Skills", value: "Skills" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="State" source="state" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
