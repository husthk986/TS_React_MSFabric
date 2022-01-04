import * as React from "react";
import "../dashboard.scss";

export class DashboardPage extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return (
            <div className="scroll-container">
                <h1>This is Dashboard Page</h1>
            </div>
        );
    }
}
