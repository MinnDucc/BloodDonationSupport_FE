import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/DefautPage/DefaultDetails/Home";
import Contact from "../pages/DefautPage/DefaultDetails/Contact";
import News from "../pages/DefautPage/DefaultDetails/News";
import QuestionAndAns from "../pages/DefautPage/DefaultDetails/QuestionAndAns";
import MemberLayout from "../layouts/MemberLayout/Member";
import AuthPage from "../pages/authPage/AuthPage";
import UserPage from "../pages/user/UserPage";

const CustomRoute = () => {
    return (
        <Routes>

            <Route path="/" element={<DefaultLayout />}>
                <Route path="/auth/*" element={<AuthPage />} />
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="news" element={<News />} />
                <Route path="Q-A" element={<QuestionAndAns />} />

            </Route>

            <Route path="/user/*" element={<MemberLayout />}>
                <Route index element={<UserPage />} />
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="news" element={<News />} />
                <Route path="Q-A" element={<QuestionAndAns />} />
    
            </Route>
        </Routes>
    );
};
export default CustomRoute;
