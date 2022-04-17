import React, { useEffect, useState } from "react";
import Logo from "./assets/altafino.svg";
import "./app.styles.scss";
import { searchRepos } from "./services/githubService";
import RepositoriesPage from "./pages/RepositoriesPage";
import SettingPage from "./pages/SettingPage";
import Nav from "./components/Nav";

const REPOS_PAGE = "repositories";
const SETTING_PAGE = "setting";

const NAV_ITEMS = [{ name: "repostories" }, { name: "setting" }];

export default function App() {
  const [page, setPage] = useState(REPOS_PAGE);

  useEffect(() => {
    console.log("hello world");
    const params = {
      q: "org:vacasaoss",
      sort: "stars",
      order: "desc"
    };
    const result = searchRepos(params);

    result.then(result => {
      console.log(result.data);
    });
  }, []);

  return (
    <>
      <header>
        <Nav />
        <h1>{page}</h1>
      </header>
      <main>
        {page === REPOS_PAGE && <RepositoriesPage />}
        {page === SETTING_PAGE && <SettingPage />}
      </main>
    </>
  );
}
