import { 
    Refine,
    GitHubBanner, 
    WelcomePage,
    Authenticated, 
} from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { AuthPage,ErrorComponent
,useNotificationProvider
,ThemedLayoutV2
,ThemedSiderV2} from '@refinedev/antd';
import "@refinedev/antd/dist/reset.css";

import dataProvider, { GraphQLClient, liveProvider } from "@refinedev/nestjs-query";
import { App as AntdApp } from "antd"
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/header";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ForgotPassword } from "./pages/forgotPassword";






function App() {
    

    
    
    return (
        <BrowserRouter>
        <GitHubBanner />
        <RefineKbarProvider>
<AntdApp>
            <DevtoolsProvider>
                <Refine 
                //dataProvider={dataProvider(gqlClient)}
                //liveProvider={liveProvider(wsClient)}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                        useNewQueryKeys: true,
                            projectId: "44HUeM-iWbld7-VMI55f",
                        liveMode: "auto",
                    }}
                >


                        <Routes>
                            <Route index element={<WelcomePage />} />
                        </Routes>
                    <RefineKbar />
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
            <DevtoolsPanel />
            </DevtoolsProvider>
            </AntdApp>
        </RefineKbarProvider>
        </BrowserRouter>
      );
};

export default App;
