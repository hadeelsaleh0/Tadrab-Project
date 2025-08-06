import React, { useEffect } from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ForgetPassword = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    document.title = "ForgetPassword";
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: isMdDown ? "column" : "row-reverse",
        fontFamily: "Cairo, sans-serif",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: isSmDown ? "flex-start" : "center",
        backgroundColor: "#f5f5f5",
        pt: isSmDown ? 4 : 0,
      }}
    >
      {/* الشق الأيسر بالصورة والخلفية */}
      {!isSmDown && (
        <Box
          sx={{
            width: isMdDown ? "90vw" : "704px",
            height: isMdDown ? "400px" : "880px",
            backgroundColor: "#317B74",
            borderRadius: "25px",
            position: "relative",
            overflow: "hidden",
            marginRight: isMdDown ? 0 : "32px",
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
              مع{' '}
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

      {/* الفورم */}
      <Box
        dir="rtl"
        sx={{
          width: isSmDown ? "100vw" : isMdDown ? "90vw" : "536px",
          px: isSmDown ? 2 : 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100%",
          pt: "100px",
        }}
      >
        <Stack alignItems="center" spacing={1.5} mb={2} sx={{ fontFamily: "Cairo" }}>
          <img
            src="/images/logo.png"
            alt="Tadrab Logo"
            style={{ width: "200px" }}
          />
          <Typography
            fontSize={isSmDown ? "22px" : "28px"}
            fontWeight={800}
            color="#000"
            sx={{ fontFamily: "Cairo" }}
          >
            هل نسيت كلمة المرور؟
          </Typography>
          <Typography
            fontSize={isSmDown ? "12px" : "13px"}
            color="#888"
            fontWeight={400}
            sx={{ fontFamily: "Cairo" }}
          >
            لا تقلق، سنرسل لك تعليمات إعادة التعيين
          </Typography>
        </Stack>

        <Stack spacing={4} width="100%" sx={{ fontFamily: "Cairo" }}>
          <Stack spacing={1}>
            <Typography color="#000000cc" sx={{ fontFamily: "Cairo" }}>
              البريد الإلكتروني:
            </Typography>
            <TextField
              variant="outlined"
              placeholder="أدخل بريدك الإلكتروني هنا"
              fullWidth
              InputProps={{
                style: {
                  backgroundColor: "#ECF1F6",
                  borderRadius: "15px",
                  height: "48px",
                  fontFamily: "Cairo",
                  textAlign: "center",
                },
              }}
            />
          </Stack>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#317B74",
              borderRadius: "15px",
              height: "48px",
              fontWeight: 600,
              fontFamily: "Cairo",
              "&:hover": { backgroundColor: "#2d6e69" },
            }}
            fullWidth
          >
            إرسال
          </Button>
          <Typography
            align="center"
            fontSize="13px"
            sx={{
              fontFamily: "Cairo",
              color: "#888",
              mt: -1,
            }}
          >
            هل تذكرت كلمة المرور؟{' '}
            <Link
              href="#"
              underline="none"
              sx={{
                fontFamily: "Cairo",
                color: "#317B74",
                fontWeight: 500,
              }}
            >
              تسجيل الدخول
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ForgetPassword;
