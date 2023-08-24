import React, { useState } from "react"
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import MapIcon from "@mui/icons-material/Map"
import TuneIcon from "@mui/icons-material/Tune"
import SidebarItem from "./SidebarItem"
import BeachAccessIcon from "@mui/icons-material/BeachAccess"
import SearchField from "../search/SearchField"

interface Iprops {
  children: React.ReactNode
}

const Sidebar: React.FC<Iprops> = ({ children }) => {
  const [selected, setSelected] = useState<string>("")

  return (
    <div className="flex">
      <div className="bg-component rounded-3xl items-center h-[calc(100vh-4rem)] w-28 flex flex-col px-3 py-8 sticky shadow ">
        <div className="flex-1">
          <div className="mb-8">
            <SidebarItem
              to=""
              icon={<BeachAccessIcon style={{ color: "white" }} />}
              label=""
              labelColor="white"
              onSelect={() => setSelected("")}
            />
          </div>
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li>
              <SidebarItem
                to="/"
                icon={
                  <ThunderstormIcon
                    style={{ color: selected === "" ? "gray" : "white" }}
                  />
                }
                label="Weather"
                labelColor={selected === "" ? "gray" : "white"}
                onSelect={() => setSelected("")}
              />
            </li>
            <li>
              <SidebarItem
                to="/cities"
                icon={
                  <FormatListBulletedIcon
                    style={{ color: selected === "Cities" ? "gray" : "white" }}
                  />
                }
                label="Cities"
                labelColor={selected === "Cities" ? "gray" : "white"}
                onSelect={() => setSelected("Cities")}
              />
            </li>
            <li>
              <SidebarItem
                to="/map"
                icon={
                  <MapIcon
                    style={{ color: selected === "Map" ? "gray" : "white" }}
                  />
                }
                label="Map"
                labelColor={selected === "Map" ? "gray" : "white"}
                onSelect={() => setSelected("Map")}
              />
            </li>

            <li>
              <SidebarItem
                to="/settings"
                icon={
                  <TuneIcon
                    style={{
                      color: selected === "Settings" ? "gray" : "white",
                    }}
                  />
                }
                label="Settings"
                labelColor={selected === "Settings" ? "gray" : "white"}
                onSelect={() => setSelected("Settings")}
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <SearchField />

        <main className="flex-grow m-8">{children}</main>
      </div>
    </div>
  )
}

export default Sidebar
