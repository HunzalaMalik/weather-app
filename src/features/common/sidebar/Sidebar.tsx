import React, { useEffect } from "react"
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import MapIcon from "@mui/icons-material/Map"
import TuneIcon from "@mui/icons-material/Tune"
import SidebarItem from "./SidebarItem"
import BeachAccessIcon from "@mui/icons-material/BeachAccess"
import SearchField from "../search/SearchField"
import { useLocation } from "react-router-dom"
import {
  selectCurrentPage,
  setPagePath,
} from "../../../slices/selectedPageSlice"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectLoading } from "../../../slices/loadingSlice"
import { selectQuery } from "../../../slices/querySlice"

interface Iprops {
  children: React.ReactNode
}

const Sidebar: React.FC<Iprops> = ({ children }) => {
  const location = useLocation()
  const currentPath = location.pathname.split("/")[1]
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(selectCurrentPage)
  const loading = useAppSelector(selectLoading)

  useEffect(() => {
    dispatch(setPagePath(currentPath))
  }, [])

  return (
    <div className="flex pt-2">
      <div className="bg-component rounded-3xl items-center h-[calc(100vh-4rem)] w-28 flex flex-col px-3 py-8 sticky shadow ">
        <div className="flex-1">
          <div className="mb-8">
            <SidebarItem
              to=""
              icon={<BeachAccessIcon style={{ color: "white" }} />}
              label=""
              labelColor="primary"
              disabled
            />
          </div>
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li>
              <SidebarItem
                to="/"
                icon={
                  <ThunderstormIcon
                    style={{ color: currentPage === "" ? "white" : "gray" }}
                  />
                }
                label="Weather"
                labelColor={currentPage === "" ? "primary" : "secondary"}
                onSelect={() => dispatch(setPagePath(""))}
                disabled={false}
              />
            </li>
            <li>
              <SidebarItem
                to="/cities"
                icon={
                  <FormatListBulletedIcon
                    style={{
                      color: currentPage === "cities" ? "white" : "gray",
                    }}
                  />
                }
                label="Cities"
                labelColor={currentPage === "cities" ? "primary" : "secondary"}
                onSelect={() => dispatch(setPagePath("cities"))}
                disabled={false}
              />
            </li>
            <li>
              <SidebarItem
                to="/cities"
                icon={
                  <MapIcon
                    style={{
                      color: currentPage === "Map" ? "white" : "gray",
                    }}
                  />
                }
                label="Map"
                labelColor={currentPage === "Map" ? "primary" : "secondary"}
                onSelect={() => dispatch(setPagePath("Map"))}
                disabled
              />
            </li>

            <li>
              <SidebarItem
                to="/cities"
                icon={
                  <TuneIcon
                    style={{
                      color: currentPage === "Settings" ? "white" : "gray",
                    }}
                  />
                }
                label="Settings"
                labelColor={
                  currentPage === "Settings" ? "primary" : "secondary"
                }
                onSelect={() => dispatch(setPagePath("Settings"))}
                disabled
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col w-full ">
        <SearchField />

        <main
          className={
            !loading
              ? `grid grid-cols-10 gap-4 ml-8 mt-8 overflow-y-auto h-[calc(100vh-10rem)]`
              : ""
          }
        >
          {children}
        </main>
      </div>
    </div>
  )
}

export default Sidebar
