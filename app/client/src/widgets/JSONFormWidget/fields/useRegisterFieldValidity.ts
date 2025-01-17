import * as Sentry from "@sentry/react";
import { set } from "lodash";
import { ControllerProps, useFormContext } from "react-hook-form";
import { useContext, useEffect } from "react";

import FormContext from "../FormContext";
import { FieldType } from "../constants";

const clone = require("rfdc/default");

export type UseRegisterFieldValidityProps = {
  isValid: boolean;
  fieldName: ControllerProps["name"];
  fieldType: FieldType;
};
/**
 * This hook is used to register the isValid property of the field
 * the meta property "fieldState".
 * */
function useRegisterFieldValidity({
  fieldName,
  fieldType,
  isValid,
}: UseRegisterFieldValidityProps) {
  const { clearErrors, setError } = useFormContext();
  const { setMetaInternalFieldState } = useContext(FormContext);

  useEffect(() => {
    try {
      isValid
        ? clearErrors(fieldName)
        : setError(fieldName, {
            type: fieldType,
            message: "Invalid field",
          });
    } catch (e) {
      Sentry.captureException(e);
    }

    setMetaInternalFieldState((prevState) => {
      const metaInternalFieldState = clone(prevState.metaInternalFieldState);
      set(metaInternalFieldState, `${fieldName}.isValid`, isValid);

      return {
        ...prevState,
        metaInternalFieldState,
      };
    });
  }, [isValid, fieldName, fieldType]);
}

export default useRegisterFieldValidity;
