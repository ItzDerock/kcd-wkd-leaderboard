import TeamHeader from "../components/team/Header";
import TeamPoints from "../components/team/TeamPoints";
import { TeamProvider } from "../context/TeamContext";

function Team() {
  return (
    <TeamProvider>
      <div className="l-wrapper">
        <div className="c-header">
          <h1>KCD Wild Kingdom Day » Leaderboard</h1>
        </div>
        <div className="l-grid__item">
          <div className="c-card">
            <TeamHeader />
            <TeamPoints />
          </div>
        </div>
        <footer>
          <p className="text-center">
            <i className="fa-solid fa-code" /> Developed by{" "}
            <a href="https://github.com/ItzDerock">Derock</a> •{" "}
            <i className="fa-brands fa-codepen" /> Template from{" "}
            <a href="https://codepen.io/ryanparag/pen/ZEGLqGW">Codepen</a> •{" "}
            <i className="fa-solid fa-code-branch" /> View on{" "}
            <a href="https://github.com/ItzDerock/kcd-wkd-leaderboard">
              Github
            </a>
          </p>
        </footer>
      </div>
    </TeamProvider>
  );
}

export default Team;
