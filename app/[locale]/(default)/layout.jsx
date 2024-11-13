import SiteMenu from "@/app/components/navigation/SiteMenu";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <SiteMenu />
      {children}
    </>
  );
};
export default DefaultLayout;
