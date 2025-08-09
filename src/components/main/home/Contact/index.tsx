import React, { type ChangeEvent, type FormEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { postContact } from "../../../../state-management/actions/home";
import CustomButton from "../../../form/CustomButton";
import InputField from "../../../form/InputField";
import TextArea from "../../../form/TextArea";
import styles from "./contact.module.css";
import ContactCard from "./ContactCard";
import Loader from "../../../general/Loader";
import type { RootState } from "../../../../state-management/store";
import type FormControlType from "../../../../models/component-types/FormControlType";
import type ContactDataType from "../../../../models/state-types/ContactDataType";
import type ValidationErrorType from "../../../../models/state-types/ValidationErrorType";

export interface ContactPropsType {
  postContact: (
    formData: FormControlType,
    setFormControl: React.Dispatch<React.SetStateAction<FormControlType>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setStatus: React.Dispatch<React.SetStateAction<number | undefined>>
  ) => void;
  errors?: ValidationErrorType | null;
  contact?: ContactDataType[];
}

const Contact: React.FC<ContactPropsType> = (props) => {
  const { errors, contact } = props;
  console.log(contact)
  const formInitial = {
    name: "",
    email: "",
    message: "",
  };
  const [formControl, setFormControl] = useState<FormControlType>(formInitial);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number | undefined>();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormControl((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.postContact(formControl, setFormControl, setLoading, setStatus);
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setStatus(undefined );
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

  return (
    <section id="contact">
      <div className="container">
        <h5>Contact me</h5>
        <h2>Contact me</h2>
        <div className={`${styles.contact_inner_container}`}>
          <div className={`${styles.contact_row}`}>
            <form
              onSubmit={handleSubmit}
              className={`${styles.form_container}`}
            >
              {status &&
                (status === 200 ? (
                  <div
                    className={`${styles.alert_message} ${styles.alert_success}`}
                  >
                    Your Message Has Been Sent
                  </div>
                ) : (
                  <div
                    className={`${styles.alert_message} ${styles.alert_error}`}
                  >
                    Something Went Wrong! Please Try Again
                  </div>
                ))}

              <InputField
                type="text"
                value={formControl.name}
                name="name"
                handleChange={handleChange}
                placeholder="Name"
                error={
                  errors?.data?.validationErrors?.name
                    ? errors?.data?.validationErrors?.name
                    : false
                }
              />
              <InputField
                type="email"
                value={formControl.email}
                name="email"
                handleChange={handleChange}
                placeholder="Email"
                error={
                  errors?.data?.validationErrors?.email
                    ? errors?.data?.validationErrors?.email
                    : false
                }
              />
              <TextArea
                type="text"
                value={formControl.message}
                name="message"
                handleChange={handleChange}
                placeholder="Message"
                error={
                  errors?.data?.validationErrors?.message
                    ? errors?.data?.validationErrors?.message
                    : false
                }
              />
              <CustomButton
                text={loading ?  <Loader size={"25px"} /> : "Send Message"}
                type="submit"
              />
            </form>
            <div className={`${styles.contact_right_column}`}>
              {contact?.map((item) => (
                <ContactCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  errors: state.errors ?? undefined,
});
export default connect(mapStateToProps, { postContact })(Contact);
