import homeData from "../../helper/homeData";
import { GET_ERRORS, HOME_DATA } from "../types/actionTypes";
import axios from "axios";
import { clearErrors } from "./errors";
import type { AppThunk } from "../types/actionInterfaces";

interface ContactFormType {
  name: string;
  email: string;
  message: string;
}

export const getHomeData = (): AppThunk => (dispatch) => {
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
  ): AppThunk =>
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
