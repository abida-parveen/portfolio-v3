import homeData from "../../helper/homeData";
import { GET_ERRORS, HOME_DATA } from "../types";
import axios from "axios";
import { clearErrors } from "./errors";
import type { AppThunkType } from "../../models/state-types/AppThunkType";

interface ContactFormType {
  name: string;
  email: string;
  message: string;
}

export const getHomeData = (): AppThunkType => (dispatch) => {
  dispatch({
    type: HOME_DATA,
    payload: homeData,
  });
};

export const postContact =
  (
    contactForm: ContactFormType,
    handleContactForm: (form: ContactFormType) => void,
    handleLoading: (loading: boolean) => void,
    handleStatus: (status: number) => void
  ): AppThunkType =>
  (dispatch) => {
    dispatch(clearErrors());
    handleLoading(true);
    axios
      .post("/api/send", contactForm, {
        withCredentials: true,
      })
      .then((res) => {
        handleStatus(res.status);
        handleLoading(false);

        handleContactForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        handleLoading(false);
        if (err.response.status === 500) {
          handleContactForm({
            name: "",
            email: "",
            message: "",
          });
        }
        if (err.response.status !== 422) {
          handleStatus(err.response.status);
        }
        dispatch({ type: GET_ERRORS, payload: err.response });
      });
  };
