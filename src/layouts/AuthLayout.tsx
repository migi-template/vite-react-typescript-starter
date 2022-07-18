import { Layout } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import User from "@/components/User";
import { useAuth } from "@/context/auth";

const { Header, Content } = Layout;

const AuthLayout = () => {
  const { hasLogin } = useAuth();
  if (!hasLogin) {
    return <Navigate to="/auth" />;
  }

  return (
    <Layout className="h-screen">
      <Header className="bg-white h-16 px-4 flex flex-end items-center">
        <User />
      </Header>
      <Content className="m-8 p-4 bg-white h-full">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AuthLayout;
