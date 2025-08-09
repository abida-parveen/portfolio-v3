import React, { type ChangeEvent } from "react";
import InputError from "../InputError";
import styles from "./text-area.module.css";

interface TextAreaPropType {
  type: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  name: string;
  error: string | false;
}

const TextArea: React.FC<TextAreaPropType> = (props) => {
  const { value, placeholder, handleChange, name, error } = props;
  return (
    <div className="form-control">
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className={`${styles.text_area}  ${error && styles.input_field_error}`}
        value={value}
      />
      {error && <InputError msg={error} />}
    </div>
  );
};

export default TextArea;
