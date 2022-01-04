import { Pivot, PivotItem } from "@business-app/fabric";
import { Label } from "office-ui-fabric-react/lib/Label";
import * as React from "react";
import "../configuration.scss";

export class ConfigurationPage extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return (
            <div className="scroll-container">
                <Pivot>
                    <PivotItem headerText="Auto">
                        <h2>This is Auto config</h2>
                    </PivotItem>
                    <PivotItem headerText="Flighting">
                        <h2>This is Flighting config</h2>
                    </PivotItem>
                    <PivotItem headerText="Chain">
                        <h2>This is Chain config</h2>
                    </PivotItem>
                    <PivotItem headerText="Intent Switch">
                        <h2>This is Intent Switch config</h2>
                    </PivotItem>
                </Pivot>
            </div>
        );
    }
}
