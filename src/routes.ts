import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomeScreen } from "./components/HomeScreen";
import { InsightsScreen } from "./components/InsightsScreen";
import { ControlScreen } from "./components/ControlScreen";
import { MoodResultScreen } from "./components/MoodResultScreen";
import { JournalScreen } from "./components/JournalScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomeScreen,
      },
      {
        path: "insights",
        Component: InsightsScreen,
      },
      {
        path: "control",
        Component: ControlScreen,
      },
      {
        path: "mood-result",
        Component: MoodResultScreen,
      },
      {
        path: "journal",
        Component: JournalScreen,
      },
    ],
  },
]);