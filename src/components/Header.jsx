import { useIsFetching } from "@tanstack/react-query";

export default function Header({ children }) {
  const fetching = useIsFetching();
  return (
    <>
      <header id="main-header">
        <div id="header-title">
          <h1>MeetUp</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
