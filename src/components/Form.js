import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  Alert,
  Paper,
  Box,
  Modal,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormProvider, FTextField, FCheckbox } from "./form/index";
import { useAuth } from "../contexts/AuthContext";
import { LoadingButton } from "@mui/lab";

function Form() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  let from = location.state?.from?.pathname || "/";

  function onDismiss() {
    navigate(-1);
  }

  const defaultValues = {
    email: "minhtri123@gmail.com",
    password: "123456",
    remember: true,
  };

  const methods = useForm({ defaultValues });

  const {
    handleSubmit,
    // setError,
    // control,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    auth.signin(data.email, () => {
      // gửi các props tới trang cần tới khi mà được chuyển về lại trang đăng nhập. dùng {replace: true} để không tạo thêm lịch sử trang
      navigate(from, { replace: true });
    });
  };
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={() => onDismiss()}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        outline: "0",
      }}
    >
      <Box>
        <Paper elevation={8} style={{ borderRadius: "20px" }}>
          <div style={{ padding: "3rem" }}>
            <Typography
              color="secondary"
              variant="h3"
              textAlign="center"
              mb={3}
            >
              Log In
            </Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} xs={3}>
                {!!errors.afterSubmit && (
                  <Alert severity="error">{errors.afterSubmit.message}</Alert>
                )}
                <FTextField name="email" label="Email Address" />
                <FTextField
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdorment: (
                      <InputAdornment position="end">
                        <IconButton
                          color="secondary"
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(event) => event.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Stack>
                <FCheckbox name="remember" label="Remember me" />
              </Stack>
              <Stack>
                <LoadingButton
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  loading={isSubmitting}
                >
                  Log In
                </LoadingButton>
              </Stack>
            </FormProvider>
          </div>
        </Paper>
      </Box>
    </Modal>
  );
}

export default Form;
