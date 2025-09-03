import type { GenericPageWrapperProp } from "../interfaces/types";
import FooterLayout from "../layouts/FooterLayout";
import MenubarLayout from "../layouts/MenubarLayout";
import NavbarLayout from "../layouts/NavbarLayout";
import SubscribeLayout from "../layouts/SubscribeLayout";

export default function GenericPageWrapper({
  children,
}: GenericPageWrapperProp) {
  return (
    <>
      <NavbarLayout />
      <MenubarLayout />
      {children}
      <SubscribeLayout />
      <FooterLayout />
    </>
  );
}
