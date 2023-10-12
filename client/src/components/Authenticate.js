import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function Authenticate() {
  return (
    <>
      <Stack gap={3} className="align-items-center">
        <div>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <p>Password</p>
            <input type="text" />
          </label>
        </div>
        <div>
          <Button size="md">Click me!</Button>
        </div>
      </Stack>
    </>
  );
}
