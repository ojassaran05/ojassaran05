import "./Dashboard.css";

import SpaceCard from "./SpaceCard";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="Top">{/* <p className="topProject">Project</p> */}</div>
      <div className="Mid">
        <div className="midProject">
          <p className="midProjectName">Project Name</p>
          <p className="midProjectAdd">233456 New Delhi Dwarka</p>
        </div>
        <button className="midNewProject" onClick="">
          Start New project
        </button>
      </div>
      <div className="Main">
        <div className="mainTop">
          <i class="fa-sharp fa-solid fa-circle-check statsIcons"></i>
          <span className="iconName">Basic Info</span>
          <i class="fa-solid fa-arrow-right statsIcons"></i>
          <i class="fa-sharp fa-solid fa-circle-check statsIcons"></i>
          <span className="iconName">Design Style</span>
          <i class="fa-solid fa-arrow-right statsIcons"></i>
          <i class="fa-sharp fa-solid fa-circle-check statsIcons"></i>
          <span className="iconName">Quiz Output</span>
          <i class="fa-solid fa-arrow-right statsIcons"></i>
          <i class="fa-sharp fa-solid fa-circle-check statsIcons"></i>
          <span className="iconName">Space</span>
          <i class="fa-solid fa-arrow-right statsIcons"></i>
          <i class="fa-solid fa-circle statsIcons"></i>
          <span className="iconName">Cost</span>
          <i class="fa-solid fa-arrow-right statsIcons"></i>
          <i class="fa-solid fa-circle statsIcons"></i>
          <span className="iconName">Information</span>
        </div>
        <div className="mainStats">
          <div className="mainStatsLeft">
            <div className="configure">
              <h4 className="leftHead">Configure your Office</h4>
              <p className="leftDesc">
                Below is given the configuration of your office
              </p>
              <div className="leftStats">
                <p className="totalArea">Total Area : 3000</p>
                <p className="available">3200</p>
              </div>
              <div className="comment">You have some space still left.</div>
            </div>
            <div className="pieChart"></div>
          </div>
          <div className="mainStatsRight">
            <SpaceCard
              name="Cubicle/L-Type"
              desc="This space is for a two liner short description."
              imgUrl="https://epicofficefurniture.com.au/wp-content/uploads/2021/03/SHUSH30-1-person-cubicle-1500H-OG.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://5.imimg.com/data5/ZK/KH/PT/SELLER-50304012/modulartwopersonlinearworkstation-500x500.png"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Cubicle/L-Type"
              desc="This space is for a two liner short description."
              imgUrl="https://epicofficefurniture.com.au/wp-content/uploads/2021/03/SHUSH30-1-person-cubicle-1500H-OG.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://5.imimg.com/data5/ZK/KH/PT/SELLER-50304012/modulartwopersonlinearworkstation-500x500.png"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <button className="proceedButton" onClick="">
          Proceed
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
