import { Header } from "../../components/Header";
import { Outlet } from 'react-router-dom'
import { LayoutWrapper } from "./styles";

export function DefautLayout() {
  return(
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  )
}