import React from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const SignInPage = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        flexDirection: isMdDown ? "column" : "row-reverse",
        fontFamily: "Cairo, sans-serif",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        alignItems: "center",
        justifyContent: isSmDown ? "flex-start" : "center",
        backgroundColor: "#f5f5f5",
        boxSizing: "border-box",
        pt: isSmDown ? 4 : 0,
      }}
    >
      {/* الصورة واليسار */}
      {!isSmDown && (
        <Box
          sx={{
            width: isMdDown ? "90vw" : "704px",
            height: isMdDown ? "400px" : "880px",
            backgroundColor: "#317B74",
            borderRadius: "25px",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            marginRight: isMdDown ? 0 : "32px",
            marginLeft: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minWidth: 0,
          }}
        >
          {/* صورة اللابتوب */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url('/images/labtob.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
            }}
          />
          {/* الدوائر والمنحنيات */}
          {!isSmDown && (
            <>
              <img
                src="/images/Intersect.png"
                alt=""
                style={{
                  position: "absolute",
                  width: "426.62px",
                  height: "426.93px",
                  top: "-107px",
                  left: "325px",
                  zIndex: 2,
                  pointerEvents: "none",
                  opacity: 0.1,
                }}
              />
              <img
                src="/images/Union.png"
                alt=""
                style={{
                  position: "absolute",
                  width: "414.21px",
                  height: "498.15px",
                  top: "415px",
                  left: "217px",
                  zIndex: 2,
                  pointerEvents: "none",
                  opacity: 0.1,
                }}
              />
            </>
          )}
          {/* نص الترحيب */}
          <Box
            sx={{
              position: "absolute",
              top: isSmDown ? "16px" : "30px",
              left: isSmDown ? "16px" : "167px",
              width: isSmDown ? "calc(100vw - 32px)" : "371px",
              height: isSmDown ? "auto" : "141px",
              textAlign: "right",
              zIndex: 3,
            }}
          >
            <Typography
              fontSize={isSmDown ? "24px" : isMdDown ? "30px" : "38px"}
              fontWeight={900}
              color="#fff"
              sx={{ fontFamily: "Cairo" }}
            >
              أهلا بك بمنصة{" "}
              <Box
                component="span"
                sx={{
                  color: "#F9A825",
                  fontSize: isSmDown ? "32px" : isMdDown ? "40px" : "54px",
                }}
              >
                تدرّب
              </Box>
            </Typography>
            <Typography
              fontSize={isSmDown ? "16px" : isMdDown ? "18px" : "22px"}
              fontWeight={700}
              sx={{
                fontFamily: "Cairo",
                color: "#fff",
                width: "100%",
                textAlign: "center",
                mt: "8px",
              }}
            >
              لطلاب الجامعة الاسلامية
            </Typography>
          </Box>
        </Box>
      )}
      {/* الكونتينر الخاص بالفورم */}
      <Box
        dir="rtl"
        sx={{
          width: isSmDown ? "100vw" : isMdDown ? "90vw" : "536px",
          height: isSmDown ? "auto" : isMdDown ? "auto" : "776px",
          backgroundColor: "transparent",
          fontFamily: "Cairo, sans-serif",
          gap: isSmDown ? "24px" : "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          marginLeft: isMdDown ? 0 : "32px",
          marginRight: 0,
          mt: isMdDown ? 3 : 0,
          mb: isMdDown ? 3 : 0,
          px: isSmDown ? 2 : 0,
        }}
      >
        {/* Logo and Heading */}
        <Stack
          width={isSmDown ? "160px" : "250px"}
          alignItems="center"
          spacing={1.5}
          mb={2}
          mt={0}
        >
          <img
            src="/images/logo.png"
            alt="Tadrab Logo"
            style={{
              width: isSmDown ? "120px" : "250px",
              height: isSmDown ? "120px" : "250px",
            }}
          />
          <Typography
            fontSize={isSmDown ? "22px" : "32px"}
            fontWeight={800}
            color="#000"
            textAlign="center"
            sx={{ fontFamily: "Cairo" }}
          >
            تسجيل الدخول
          </Typography>
        </Stack>

        {/* Form Section */}
        <Stack spacing={isSmDown ? 2 : 4} width="100%">
          <Stack spacing={isSmDown ? 2 : 4}>
            {/* Email Field */}
            <Stack spacing={1}>
              <Typography
                color="#000000cc"
                sx={{ fontFamily: "Cairo", fontSize: isSmDown ? "14px" : "inherit" }}
              >
                البريد الإلكتروني:
              </Typography>
              <TextField
                variant="filled"
                placeholder="أدخل البريد الإلكتروني"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  style: {
                    textAlign: "center",
                    padding: isSmDown ? "8px 8px" : "10px 16px",
                    height: isSmDown ? "40px" : "48px",
                    backgroundColor: "#ECF1F6",
                    borderRadius: "15px",
                    fontFamily: "Cairo",
                    fontSize: isSmDown ? "14px" : "16px",
                    fontWeight: 500,
                  },
                }}
              />
            </Stack>

            {/* Password Field */}
            <Stack spacing={1}>
              <Typography
                color="#000000cc"
                sx={{ fontFamily: "Cairo", fontSize: isSmDown ? "14px" : "inherit" }}
              >
                كلمة المرور:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#ECF1F6",
                  borderRadius: "15px",
                  padding: isSmDown ? "8px 8px" : "10px 16px",
                  justifyContent: "space-between",
                  height: isSmDown ? "40px" : "48px",
                  fontFamily: "Cairo",
                }}
              >
                <TextField
                  variant="filled"
                  placeholder="أدخل كلمة المرور"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                    style: {
                      textAlign: "center",
                      fontFamily: "Cairo",
                      backgroundColor: "transparent",
                      fontSize: isSmDown ? "14px" : "16px",
                      fontWeight: 500,
                    },
                  }}
                />
                <IconButton>
                  <img
                    src="/images/eye-icon.png"
                    alt="Toggle Password"
                    style={{
                      width: isSmDown ? "16px" : "22.35px",
                      height: isSmDown ? "14px" : "19.3px",
                    }}
                  />
                </IconButton>
              </Box>
            </Stack>

            {/* Forgot + Remember */}
            <Box
              display="flex"
              flexDirection={isSmDown ? "column" : "row"}
              justifyContent="space-between"
              alignItems={isSmDown ? "flex-start" : "center"}
              gap={isSmDown ? 1 : 0}
              mt={isSmDown ? 1 : 0}
            >
              <Link
                href="#"
                color="#D32F2F"
                fontSize={isSmDown ? "12px" : "14px"}
                sx={{ fontFamily: "Cairo" }}
              >
                هل نسيت كلمة المرور؟
              </Link>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography sx={{ fontFamily: "Cairo", fontSize: isSmDown ? "12px" : "inherit" }}>
                    تذكرني لاحقًا
                  </Typography>
                }
              />
            </Box>
          </Stack>

          {/* Submit Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#317B74",
              borderRadius: "15px",
              height: isSmDown ? "40px" : "48px",
              fontSize: isSmDown ? "14px" : "16px",
              fontWeight: 600,
              textAlign: "center",
              fontFamily: "Cairo",
              "&:hover": { backgroundColor: "#2d6e69" },
            }}
          >
            تسجيل الدخول
          </Button>

          {/* Create Account Link */}
          <Typography
            variant="body2"
            align="center"
            fontSize={isSmDown ? "14px" : "16px"}
            fontWeight={500}
            sx={{ fontFamily: "Cairo" }}
          >
            ليس لديك حساب؟{" "}
            <Link
              href="#"
              fontWeight={600}
              color="#0288D1"
              sx={{ fontFamily: "Cairo" }}
            >
              إنشاء حساب جديد
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignInPage;
