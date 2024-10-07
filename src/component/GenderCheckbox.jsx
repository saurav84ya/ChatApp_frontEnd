import React from "react";
import styled from "styled-components";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <GenderWrapper>
      <FormControl>
        <Label isSelected={selectedGender === "male"}>
          <LabelText>Male</LabelText>
          <Checkbox
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </Label>
      </FormControl>

      <FormControl>
        <Label isSelected={selectedGender === "female"}>
          <LabelText>Female</LabelText>
          <Checkbox
            type="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </Label>
      </FormControl>
    </GenderWrapper>
  );
};

export default GenderCheckbox;

const GenderWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const FormControl = styled.div`
  display: flex;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#bfdbfe" : "transparent")};
  padding: 0.25rem;
  border-radius: 0.375rem;
`;

const LabelText = styled.span`
  font-size: 1rem;
  color: #1e293b;
`;

const Checkbox = styled.input`
  border: 2px solid #1e293b;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;
