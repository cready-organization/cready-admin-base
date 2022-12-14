import * as React from "react";
import { Badge, Button, Textarea, TextField } from "src/components";
import { TEXTFIELD_TYPE } from "src/helpers/app-enum";

function Dashboard() {
  return (
    <>
      <div className="mb-4">
        <TextField
          placeholder="Username"
          type={TEXTFIELD_TYPE.TEXT}
          label="Input Textfield"
        />
      </div>
      <div className="mb-4">
        <Textarea placeholder="Textarea content" label="Textarea" />
      </div>
      <div className="mb-4">
        <Button fullWidth={false}>Button</Button>
      </div>
      <div className="mb-4">
        <Badge
          onClose={(e) => {
            console.log(e);
          }}
        >
          Badge
        </Badge>
      </div>
    </>
  );
}

export default Dashboard;
