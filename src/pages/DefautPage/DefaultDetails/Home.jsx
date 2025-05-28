import { Box, Container, Typography } from "@mui/material";
import BloodTypeSearch from "../../../components/homepage/BloodTypeSearch";
import AutoBanner from "../../../components/banner/AutoBanner";
import DateSearch from "../../../components/homepage/DateSearch";

export default function Home() {
    return (
        <>
            <Container maxWidth="100%" style={{ padding: 0 }}>
                <Box
                    sx={{
                        width: '70%',
                        margin: '0 auto',
                        borderRadius: 2,
                        overflow: 'hidden',
                        height: 400,
                    }}
                >
                    <AutoBanner />
                </Box>
            </Container>
            <Box sx={{ backgroundColor: '#0D47A1', padding: 2, display: 'flex', justifyContent: 'center' }}>
                <DateSearch />
            </Box>
            <Box>
                <Box sx={{ marginTop: 0 }}>
                    <BloodTypeSearch />
                    <Box
                        component="section"
                        sx={{
                            padding: 2,
                            backgroundColor: 'white',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'inline-block',
                                padding: 1,
                                borderRadius: 1,
                                marginBottom: 2,
                                textAlign: 'center',
                                width: '100%',
                            }}
                        >
                            <Box
                                component="a"
                                href="https://static.giotmauvang.org.vn/ihpstatic/GMV_HuongDanSuDung.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: 'inline-block',
                                    textDecoration: 'underline',
                                    textDecorationColor: 'blue',
                                    color: 'blue',
                                    cursor: 'pointer',
                                    transition: 'color 0.3s, textDecorationColor 0.3s',
                                    '&:hover': {
                                        textDecorationColor: 'red',
                                        color: 'red',
                                    },
                                }}
                            >
                                Xem hướng dẫn quy trình đăng ký hiến máu &gt;&gt;&gt; Tại đây
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        component="section"
                        sx={{
                            padding: 2,
                            backgroundColor: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h2" sx={{ marginTop: 2 }}>
                            Title
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
