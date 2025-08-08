// frontend/src/pages/ResetPasswordPage.jsx

import React from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ResetPasswordPage = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Cairo, sans-serif",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
        flexDirection: isMdDown ? "column" : "row-reverse",
      }}
    >
      {/* ✅ الشق الأيسر - الخلفية والصورة */}
      {!isSmDown && (
        <Box
          sx={{
            width: isMdDown ? "90vw" : "704px",
            height: isMdDown ? "400px" : "880px",
            backgroundColor: "#317B74",
            borderRadius: "25px",
            position: "relative",
            overflow: "hidden",
            margin: isMdDown ? "0 auto 0" : "0 32px 0 0",
            marginTop: isMdDown ? "-20px" : "-40px", // ✅ رفع الشق الأيسر لفوق
          }}
        >
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
          <img
            src="/images/Intersect.png"
            alt=""
            style={{
              position: "absolute",
              width: "426.62px",
              height: "426.93px",
              top: "-107px",
              left: "325px",
              opacity: 0.1,
              zIndex: 2,
            }}
          />
          <img
            src="/images/Union.png"
            alt=""
            style={{
              position: "absolute",
              width: "414.21px",
              height: "498.15px",
              bottom: 0,
              left: "217px",
              opacity: 0.1,
              zIndex: 2,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "64px",
              left: "180px",
              width: "420px",
              height: "120px",
              textAlign: "center",
              color: "#fff",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: 1,
            }}
          >
            <Typography
              fontSize="24px"
              fontWeight={900}
              sx={{
                fontFamily: "Cairo, sans-serif",
                lineHeight: 1,
                textAlign: "center",
              }}
            >
              انطلق نحو النمو، مستقبلك يبدأ هنا
            </Typography>
            <Typography
              fontSize="24px"
              fontWeight={900}
              mt={5}
              sx={{
                fontFamily: "Cairo, sans-serif",
                lineHeight: 1,
                textAlign: "center",
              }}
            >
              مع{" "}
              <Box
                component="span"
                sx={{
                  color: "#F9A825",
                  fontSize: "48px",
                  fontWeight: 900,
                  fontFamily: "Cairo",
                  lineHeight: "100%",
                  textAlign: "center",
                  letterSpacing: 0,
                  fontStyle: "normal",
                }}
              >
                تدرّب
              </Box>
            </Typography>
          </Box>
        </Box>
      )}

      {/* ✅ الشق الأيمن - الفورم */}
      <Box
        dir="rtl"
        sx={{
          width: isSmDown ? "100vw" : "536px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // ✅ رفع المحتوى لفوق
          alignItems: "center",
          px: isSmDown ? 2 : 0,
          pt: isSmDown ? 4 : 6, // ✅ padding-top لرفع المحتوى أيضًا
        }}
      >
        {/* Logo and Heading */}
        <Stack
          width={isSmDown ? "160px" : "250px"}
          alignItems="center"
          spacing={1.5}
          mb={2}
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
            fontSize={isSmDown ? "22px" : "23px"}
            fontWeight={800}
            color="#000"
            textAlign="center"
            sx={{
              fontFamily: "Cairo",
              whiteSpace: "nowrap", // ✅ لتكون بسطر واحد
            }}
          >
            تعيين كلمة مرور جديدة
          </Typography>
          <Typography
            fontSize="14px"
            color="#888"
            textAlign="center"
            sx={{ fontFamily: "Cairo" }}
          >
            يجب أن تكون 8 أحرف على الأقل
          </Typography>
        </Stack>

        {/* Form Section */}
        <Stack spacing={isSmDown ? 2 : 4} width="100%">
          {/* Password Field */}
          <Stack spacing={1}>
            <Typography
              color="#000000cc"
              sx={{ fontFamily: "Cairo", fontSize: isSmDown ? "14px" : "inherit" }}
            >
              كلمة المرور:
            </Typography>
            <TextField
              variant="filled"
              placeholder="أدخل كلمة المرور"
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

          {/* Confirm Password Field */}
          <Stack spacing={1}>
            <Typography
              color="#000000cc"
              sx={{ fontFamily: "Cairo", fontSize: isSmDown ? "14px" : "inherit" }}
            >
              تأكيد كلمة المرور:
            </Typography>
            <TextField
              variant="filled"
              placeholder="أدخل كلمة مرور جديدة"
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
            إعادة تعيين كلمة المرور
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ResetPasswordPage;
