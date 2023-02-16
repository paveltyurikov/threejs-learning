import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Field, Formik, FormikHelpers, FormikValues } from "formik";
import { TextField } from "formik-mui";
import useVisibility from "../../hooks/useVisibility";
import { FormCol, FormContainer, FormRow } from "../Form/Layout";


const SCENE_INITIAL = {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
};

const SceneForm = () => {
  const { visibility, toggle, hide } = useVisibility();
  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<any>
  ) => {};
  return (
    <>
      <Button size="small" onClick={toggle}>Scene</Button>
      <Formik initialValues={SCENE_INITIAL} onSubmit={handleSubmit}>
        <Dialog
          open={visibility}
          fullWidth
          sx={{ minWidth: 800 }}
          onClose={hide}
        >
          <DialogTitle>Scene control</DialogTitle>
          <DialogContent>
            <FormContainer>
              <FormRow>
                <FormCol>
                  <Field
                    label="Position X"
                    name="position.x"
                    component={TextField}
                    size="small"
                  />
                </FormCol>
                <FormCol>
                  <Field
                    label="Position Y"
                    name="position.y"
                    component={TextField}
                    size="small"
                  />
                </FormCol>
                <FormCol>
                  <Field
                    label="Position Z"
                    name="position.z"
                    component={TextField}
                    size="small"
                  />
                </FormCol>
              </FormRow>
              <FormRow>
                <FormCol>
                  <Field
                    label="Rotation X"
                    name="rotation.x"
                    component={TextField}
                    size="small"
                  />
                </FormCol>
                <FormCol>
                  <Field
                    label="Rotation Y"
                    name="rotation.y"
                    component={TextField}
                    size="small"
                  />
                </FormCol>
                <FormCol>
                  <Field
                    label="Rotation Z"
                    name="rotation.z"
                    component={TextField}
                    size="small"
                  />
                </FormCol>
              </FormRow>
            </FormContainer>
          </DialogContent>
          <DialogActions>
            <Button onClick={hide}>close</Button>
            <Button variant="contained" type="submit">
              apply
            </Button>
          </DialogActions>
        </Dialog>
      </Formik>
    </>
  );
};

export default SceneForm;
